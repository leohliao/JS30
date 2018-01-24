1. Creating documents
- insertOne()
- insertMany()

2. ObjectID is constructed in the following:
     Date   |  MacAddress |  PID  | COUNTER
—— —— —— ——   —— —— ——      —— ——   —— —— ——
** 12 Hex String

3. Equality Matches
- Scalars
- Embedded
- Arrays
db.movieDetails.find({"actors.0": "Jeff Briggs"}).pretty()

4. Cursors (101 Results)
var c = db.movieDetails.find();
var doc = function(){
  return c.hasNext() ? c.next() : null;}
}
c.objectLeftInBatch();

5. Projection - reducing the size of the query
db.movieDetails.find({rated: "PG"}, {writers: 0, actors: 0, id:0 }).pretty();

6. Comparison Operators:
example 1:
db.movieDetails.find({runtime: {$gt: 90}}).pretty()
------- runtime greater than 90

example 2:
db.movieDetails.find({ rated: { $in: ["G", "R", "PG-13"]}}, {title:1, rated: 1, _id: 0_ } ).pretty()
------- first column: include selected option in array
------- second column: output options

7. Element Operators:
db.moviesScratch.find({"_id_": { $type: "string"}}).count();

8. Logical Operators:
db.movieDetails.find({ $or : [ { "tomato.meter": { $gt: 95}}, {"metacritic": { $gt:88}} ]}).pretty();

9. Regex Operators:
db.movieDetails.find({ "awards.text": { $ regex: /^Won \s.* / }})

10. Array Operators
db.movieDetails.find({ "boxOffice.country": "UK", "boxOffice.revenue": { $gt: 15 } } )
------ To perform a query on subdocuments or array items you have to use dot notation.

11. Find array with nested documents:
db.movieDetails.find({"awards.oscars.award": "bestPicture"})

12. Updating based on multiple criteria:
First Approach:
db.movieDetails.updateMany({ year: {$gte: 2010, $lte: 2013},
                             "imdb.votes": {$lt: 10000},
                             $and: [{"tomato.consensus": {$exists: true} },
                                    {"tomato.consensus": null} ] },
                           { $unset: { "tomato.consensus": "" } });
Second Approach:
db.movieDetails.updateMany({ year: {$gte: 2010, $lte: 2013},
                             "imdb.votes": {$lt: 10000},
                             "tomato.consensus": null },
                           { $unset: { "tomato.consensus": "" } });                      
