## Week 04 - Schema Design 
Basic Facts of MongDB: 
 1. Support Rich Documents
 2. Pre join/embed data for fast acess
 3. Doesn't support joins inside the kernel
 4. No constraints 
 5. Atomic operation - don't transactions 
 6. No declared schema - 


# I. Application Driven Schema - 
# KEY: The most important factor in design your application schema in MongoDB is 
---> "Matching the data access patterns of your application" <---

Disadvantages of 3rd Normal Form:
  -  When you update one email, you will have to update all the columns of the same data, and this could potential become a problem

#Goals of Normalization:
1. free the db of modification anomalies // => 
check top for detail explanations
2. minimize redesign when extending 
3. avoid bias toward any particular access pattern // => not worrying too much in mongodDB 

## Transactions (MongoDB does not support)
- Transaction is a logical unit that is independent executed for data retrieval or updates. Must be Atomic, Consistency, Isolation, Durability. 
- MongoDB only have atomic operations, which means when you work on an file, you need to embed the data and pre join them,so either you see them all at once. 
- 3 Approach to overcome lack of transactions: 
1. restructure - everything happen in a single document 
2. implement in Software - add additional to operation
3. tolerate inconsistency.
e.g. (operations operate atomically within a single document - Update / findAndModify / $addToSet(within an update / $push within an update)

## 1:1 Relations 
 - Each item are on one to one relation.
 - Thinking about the following factors:
 1. Freq of access
 2. Size of the items 
 3. Atomicity of data - if you want to update two documents at the same time, you may want to put those two documents together.

 ## 1:Many Relations 
 - Requires two collection
 - It is recommend to to use this model for collection whenever the many is large.
 - Single most important factor in designing your application schema within MongoDB is to 
 MATCHING THE DATA ACCESS PATTERNS OF YOUR APPLICATION.

 ## Many:to:Many Relations 
 e.g. Books : Authors  (Few to Few)
 e.g. Students : teachers 
 - Use arrays for the collection of relationships 

 ## Multikey Indexes 
 e.g. 
 Students:
 {  _id: 0,
    'name': 'Andrew',
    'teachers': [1, 7, 10, 23]
 }
 Teachers:
 {  _id: 10,
    name: 'Tony Stark'
 }

// to add Multikey Indexes in the shell,
 - db.students.ensureIndex({ 'teachers': 1 })
 // find the query of student that the teacher value has 0 and 1.
 - db.students.find( {'teachers': {$all:[0,1]}} ) 
 // if we use explain in the query, the shell will return to show us what we used in the query.
 db.students.find( {'teachers': {$all:[0,1]}} ).explain()

## Benefits of Embedding Data:
- (From two collections into one collection)
- Improved Read Performance, one round trip to the DB,
because the spinning disc has high latency.

## Representing Tree 
- a good way in rich DB like mongoDB, 
is to list all the ancestors prior to this node out
A good Example: 
=====
db.categories.insertOne({"_id": "Quantum Mechanics", "ancestors": ["Books", "Science", "Physics"], "parent": "Physics"})
db.categories.insertOne({"_id": "Classical Mechanics", "ancestors": ["Books", "Science", "Physics"], "parent": "Physics"})
db.categories.insertOne({"_id": "Physics", "ancestors": ["Books", "Science"], "parent": "Science"})
db.categories.insertOne({"_id": "Chemistry", "ancestors": ["Books", "Science"], "parent": "Science"})
db.categories.insertOne({"_id": "Science", "ancestors": ["Books"], "parent": "Books"})
db.categories.insertOne({"_id": "Books", "ancestors": [], "parent": null})
=====


