var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

// connect to database
mongoose.connect(configDB.url, {useMongoClient: true});

require('./config/passport')(passport); // pass passport for configuration

// set up express application
app.use(morgan('dev')); // log every request to console
app.use(cookieParser()); // read cookies
app.use(bodyParser()); // get infor from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// for passport
app.use(session({ secret: "thisismysecretpasspword"}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash message stored in session

// routes
require('./app/routes.js')(app, passport); // load routes in pass into app

// launch
app.listen(port);
console.log("successfully launched port " + port);
