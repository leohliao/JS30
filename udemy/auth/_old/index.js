// authentication setup
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//using express js
var app = express();

var router = require('./services/router');

mongoose.connect('mongodb://localhost:27017/introToAuth');

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/v1', router);

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '127.0.0.1';

//test to see if it succeed
console.log('Listening on', HOST, PORT);

app.listen(PORT, HOST);
// end authentication setup
// ================================================================
