### Week 5 - Indexes and Performance
# Storage Engines - 2 Types 
  1. MMAP (Default)
  2. Wired Tiger (Sleepycat - Berkeley DB)
  3. Quiz: The storage engine directly determines which of the following? Check all that apply: 
    - The data file format 
    - Format of indexes

# MMAP v1 - allocate memory, or map files or devices into memory
  1. COMMAND - man map 
  2. Collection Level Locking - only one write to one collection at one time
  3. In plane update
  4. power of two sizes - MMAPv1 automatically allocates power-of-two sized documents when new documents are inserted.
  5. MMAPv1 is built on top of the mmap system call that maps files into memory
  
# Wired Tiger
  1. Document Level Concurrency 
  2. Offers compression - (data and indexes)
  3. No Inplace Update 
  4. COMMAND - killall mongod 
  5. COMMAND - mkdir WT
  6. COMMAND - mongod -dbpath WT - storageEngine wiredTiger
  7. db.foo.stats() - tells you if you're using wire tiger

# Indexes 
  1. Adding appropriate index on large collections so that only  small percentage of queries need to scan the collection
  2. If you have a data structure like {a:1, b:2, c:3}, it's possible to search a, ab, abc, but not possible searching c, cb and etc.
  3. reads happens faster with index, however, it slows down writing document. -- however normally you would still want indexing.
  4. B-tree - a self-balancing tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time.  
    - B-tree is optimized for system that read and write large blocks of data.

# Creating Indexes 
- In Mongoshell
db.students.find({student_id: 5});
db.students.explain().find({student_id: 5}); // this line with provide detail of the data
db.students.findOne({student_id: 5}); // this is generally faster because once you found it, it will quit looking.
- Creating index COMMAND
db.students.createIndex({student: 1});
- Creating Compound index COMMAND
db.students.createIndex({student: 1, class_id: -1});
- Example: add an index to a collection named students, having the index key be class, student_name.
db.students.createIndex({class: 1, student_name: 1});

# Discover and Deleting Indexes
- in Mongo shell 
db.students.getIndexes();
db.students.dropIndexes({student_id: 1});

# Multikey Indexes
Given: 
      { 
        name: "Andrew",
        tags: ['photography', 'hiking', 'golf'],
        color: 'red',
        location: ['NY', 'CA']
      }
- Multikey Indexes will NOT work if both the keys are array 
- Must have values in the value for the indexes.

# Notation $ Multikey 
- creating index for the sub part of the document 
db.students.createIndex({'scores.score':1});
db.people.createIndex({"work_history.company":-1});
- find people that has score above 99 
db.students.explain().find({'scores': {$elemMatch: {type:'exam', score:{'$gt': 99.8}}}});

# Index Creation Option, Unique 
- create unique index
db.stuff.createIndex({thing:1}, {unique: true}); 
- remove one duplicated item: 
db.stuff.remove({thing: 'apple}, {justOne: true});
- Quiz: mongo shell command to create a unique index on student_id, class_id, ascending for the collection students. 
db.students.createIndex({student_id:1, class_id:1},{unique:true});

# Sparse Index 
- can be when index key is missing from some of the indexes.
Example: 
{a: 1, b:2, c: 5}
{a:10, b:5, c:10}
{a:13, b:17}
{a:7, b:23}
create unique index c would be a problem - c would be null and is duplicated 
- using sparse in mongo shell 
db.employees.createIndex({cell:1}, {unique: true, sparse: true});
- cannot be use for sorting
- sparse index takes SMALLER space 
- gain greater flexibility with creating Unique indexes

# Index Creation 
1. FOREGROUND INDEX (default)
- fast
- blocks writers and readers in the database
2. BACKGROUND INDEX
- don't block reader / writers 
- creating index in the background takes longer than creating it in the foreground 
- although the database server will continue to take requests, a background index creation still blocks the mongo shell that you are using to create the index.
db.students.createIndex({'scores.score':1}, {background: true});

# Explain - queryPlaner Mode - tells you what the DB would use in terms of index, but not the telling what the result of using that index are
- is used to find out the database is doing with your query. 
- does not bring back the data back to the client 
- can be used in shell,, driver and application 
- in MongoDB 3.0, you can: 
db.foo.explain().find()
db.foo.explain().update()
db.foo.explain().remove()
db.foo.explain().aggregrate() 
db.foo.explain().help()
**NOTE you cannot use insert()
- the parameter used for explain is called verbosity 
- winningPlan is the one got chosen 
IXSCAN - fast 
COLLSCAN - slow, but scan the whole collection 
- QUIZ: Valid ways to find out which indices a particular query uses:
db.example.find({a:1, b:2}).explain();
db.example.explain().find({a:1, b:2});
db.example.explain().remove({a:1, b:2});
var exp = db.example.explain();       exp.find({a:1, b:2}); 
curs = db.example.find({a:1, b:2});   curs.explain();
# Explain - ExecutionStats Mode 

# Explain - allPlansExecution Mode 
- does what the query optimizer does, 
but periodically 

# Covered Queries 
- is a query itself where it can be satisfied by entirely with an index. 
- totalKeysexamined has numbers but totalDocsExamined is 0;
- Example:
## exp.find({i:45, j:23}, {_id:0, k:1, j:1});
** The above example doesn't work if only _id:0 is presented

# Choosing an Index 
- Store in Cache
- Compare:
 1. Threshold Writes 
 2. Rebuild 
 3. +/- 
 4. Restart 

 # Index Size 
 - Working Set - portion of data that client frequent access
 - How to fit working set into memory? Key component - indexes - thus index size is important
 You can see index size using following commands in the shell
 db.student.stats()
 db.students.totalIndexSize()
 - use wireTiger here because it has indexPrefixCompression 


 # Index Cardinality - how many index points are there for each different type of index the MDB supports
 - Cost only exists in the MMAPv1 storage engine. 
 - In the wireTiger storage engine, index entries don't contain pointers to actual disk locations,
 instead, in wireTiger, the index points to an internal document identified that is immutable. 
 Regular         |      Sparse        |             Multikey
 ---------------------------------------------------------------------      
   1:1           |     <= document    |  tags: [_, _, _,...] > document      


# Geospatial Index - allow you to find thing based on location 
- 2D: 
  'location':[x, y] // specify the xy coordinates
  ensureIndex({"location": '2d', type: 1}) // given index
  find({location:{$near: [x,y]}}).limit(20) // find all the location that are near x,y this is increasing distance
  ## Quiz: Suppose you have a 2D geospatial index defined on the key location in the collection places. Write a query that will find the closest three places (the closest three documents) to the location 74, 140.
- Answer: db.places.find({location:{$near:[74, 140]}}).limit(3);
- Spherical (3D):
  use geojson (geojson.org/)
  longitude, latitude 
  ## db.places.ensureIndex({'location': '2dsphere'}) // to make sure the index are in 2dsphere mode 
- search the query in spherical mode: 
  ## db.places.find({
  ##   location: {
  ##    $near: {
  ##      $geometry: {
  ##        type: "Point",
  ##        coordinates: [-122.1166, 37.427sa ], // coordinate of the hoover tower [longitude, latitude]
  ##      },
  ##      $maxDistance: 2000
  ##    }
  ##   }
  ## }).pretty()

# Full Text Search - index the entire document and every word like the array in index 
  ## db.sentences.ensureIndex({'words': 'text'});
  ## db.sentences.find({{$text:{$search:'dog'}}}); // versus find({'words':'dog'})

# Designing / Using Indexes 
Several factors to conisder
- selectivity - minimize records scanned 
- other ops - how are SORTS handled?
- use hint({ class_id: 1}) to make your selection more selective
- Selectivity is the primary factor that determines how efficiently an index can be used. Ideally, the index enables us to select only those records required to complete the result set, without the need to scan a substantially larger number of index keys (or documents) in order to complete the query. 
- Selectivity determines how many records any subsequent operations must work with. Fewer records means less execution time.

# Efficiency of Index Use Example 
- Generally speaking, you want to avoid sorting in the final stage,
however, in order to eliminate that sorting process in the final, 
you will need to search index even more:
db.students.createIndex({class_id: 1, final_grade: 1, student_id: 1})
db.students.find({student_id: {$gt: 50000}, class_id: 54}).sort({final_grade: -1}).explain("executionStats");
- Quiz: In general, which of the following rules of thumb should you keep in mind when building compound indexes? Check all that apply. For this question, use the following definitions:
equality field: field on which queries will perform an equality test
sort field: field on which queries will specify a sort
range field: field on which queries perform a range test
Answer: 
1. Equality field before range fields 
2. Sort fields before range fields
3. Equality fields before sort fields
Equality > Sort > Range

# Profiler 
- System.profile 
0    |         1        |       2 (for debugging)    
------------------------------------------
off  |  log slow query  |   all my queries

  ## mongod -dbpath /usr/local/var/mongodb --profile 1 --slowms 2
  ## db.system.profile.find({ns: /test.foo/}).sort({ts:1}).pretty()
  ## db.getProfilingLevel()
  ## db.getProfilingStatus()
  ## db.setProfilingLevel(1, 4) // set to 0 to turn it off
Quiz: Write the query to look in the system profile collection for all queries that took longer than one second, ordered by timestamp descending.
  ## db.system.profile.find( { millis : { $gt:1000 } } ).sort( { ts : -1 } )

# Mongotop 
- see where the mongo is spending most time at

# Mongostat
- performance tunning command 
- mongostat out are:
  1. the getmore column concerns the number of requests pe time interval to get additional data from a cursor
  2. the faults column appears only in the mmapv1 output

# Sharding - technique of splitting large collection among small multiple server
- insert must include the entire shard key 
- update/remove/find - mongodb will have to broadcast to all the shards to perform action if it doesn't know the shard key
- you should specify shard key if possible 



 



