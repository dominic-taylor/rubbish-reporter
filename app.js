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

var geoTag = {
address:[
{lat: 89.0000},
{lang: -132.00}
]
}


app.get('/', function (req, res){
res.redirect ('index')
})

app.get('/index', function (req, res){
res.render ('index', geoTag)
})

app.get('/submit', function (req, res){
  //console.log(geoTag)
res.render ('submit')
})



module.exports = app;
