1. NodeJS Driver and CRUD
   Crunchbase - details of startup company
   - mongoimport - allows us to import human readable JSON
   - less companies.json
   - mongoimport -d crunchbase -c companies companies.json
   - mongod --port 27018 // if you want to use other por

KEY CONCEPT
   When mongoDB returns certain size when using Cursor:
   - Cursor.toArray - needs to fetch all elements first
   - Cursor.forEach - can return only partial of the data

2. Field Projection:
-- setting parameter for just the field you needed to return
e.g.
var projection = {"name":1, "category": 0}
var cursor = db.collection('companies').find(query)
cursor.project(projection)

3. Using $regex (Regular Expression):
---Regular Expression: searching string value field,
you can also use textSearch for full text search

Example 1:
if ("overview" in options) {
  query.overview = {"$regex": options.overview, "$options": "i"};
}
return query;
// this $options: i means letter cases are not restricted;

in terminal, you can type the following for command operator
node app-milestones.js -  "billion.+valuation"
------ the + in the above example will return query that is either space
or even if including + itself.

4. dot notation in nodejs driver
dot notation - use this to reaching into codes inside embedded documents
Example:
if ("ipo" in options){
  if (options.ip == "yes") {
    query["ipo.valuation_amount"] = {"$exists": true, "$ne":null};
  } else if (options.ip == "no"){
    query["ipo.valuation_amount"] = null;
  }
}

5. SKIP LIMIT SORT
--- sort is a cursor method
eg
var cursor = db.collection('companies').find(query);
cursor.project(projection)
// sort by single field in descendant order
cursor.sort({founded_year: 1});
// sort by multiple field
cursor.sort([["founded_year", 1], ["number_of_employees", -1]]);

MongoDB will always:
First SORT
Second SKIP
THIRD LIMIT
---- You can use createIndex method in your MongoDB database so that the Sorting method is using index to sort
db.companies.createIndex({permalink: 1})

db.dropDatabase() // delete the database in db
