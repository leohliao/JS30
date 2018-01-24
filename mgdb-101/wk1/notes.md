MongoDB Overview

Clients => Node.js (app, uses driver library to operate data on MongoDB) =>
MongoDB (uses mongo shell)

Installing MongoDB
1. download MongoDB
2. (un tar command) tar xvf _filename_
3. inside bin, mongo(mongo shell), mongod(actual server)

BSON:
MongoDB saves as BSON
BSON - Binary JSON ( lightweight, traversable, efficient )
-- Does not support number, therefore saves as string

MongoDB Operation
C - create
R - read
U - update
D - delete

Mongo Shell Commands
1. terminal
mongo, mongod - initialize
show dbs
use video
show tables

(insert data)
** MongoDB will create underscoreID("_id_")
db.moveis.find()
db.movies.find({"title": "Jaws"}).pretty()
var c = db.movies.find()
c.hasNext() // return true
c.next() // return data

Homework1_1:
{ "_id" : ObjectId("51e4524ef3651c651a42331c"), "answer" : "Hello from MongoDB!" }
