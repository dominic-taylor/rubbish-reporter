var express = require('express');
 var path = require('path');
 var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('pages', path.join(__dirname, 'pages'));
app.set('view engine', 'hbs');

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
