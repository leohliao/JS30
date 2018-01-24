const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

MongoClient.connect('mongodb://localhost:2707/video', function(err, db) {
  assert.equal(null, err);
  // this message will print FIRST
  console.log("Successfully connected to server");

  // this function will run, but will print in the last
  // find documents in our collection, turn it into array objects
  db.collection('movies').find({}).toArray(function(err, docs){
    //iterate and print the title of each document in the result set
    docs.forEach(function(doc) {
      console.log(doc.title);
    });

    //close database
    db.close();
  })

  // this message will print SECOND
  console.log("Called find()");

}) // MongoClient
