const express = require('express');
// const consolidate = require('consolidate');
// const mongodb = requre('mongodb');
const app = express();

// In order to use templates, you must install the following:
const engine = require('consolidate');
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('hello', { 'name': 'Templates' });
});

// set up routers "/", send req and res objects
// app.get('/', function(req, res) {
//   res.send('Hello World')
// });

app.use(function(req, res) {
  res.sendStatus(404);
});

const server = app.listen(3000, function(){
  let port = server.address().port;
  console.log('Express server listening on ort %s', port);
});
