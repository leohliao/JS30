const express = require('express');
const app = express();
const engines = require('consolidate');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect('mongodb://localhost:27017/video', function(err, db){

  assert.equal(null, err);
  console.log("Successfully connected to MongoDB");

  app.get('/', function(req, res) {
    db.collection('movies').find({}).toArray(function(err, docs){
      res.render('movies', { 'movies': docs })
    });
  });

  app.use(function(req,res){
    res.sendStatus.(404);
  });

  const server = app.listen(3000, function(){
    let port = server.address().port;
    console.log('Express server listening on port %s.', port);
  });

});
