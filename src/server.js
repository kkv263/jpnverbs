'use strict'
require('dotenv/config');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Entry = require('./models/entry');

var app = express();
var router = express.Router();

var charMap = require ('./js/charmap.js');

var port = process.env.PORT || 3001;

//const mongoUrl = 'mongodb://localhost/test'
const mongoUrl = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PW +'@ds059207.mlab.com:59207/conjugations';

//connect to db
mongoose.connect(mongoUrl, { useMongoClient: true });
mongoose.connection.once('open', function(){
  console.log('Connection has been made...');
  }).on('error', function(error){
    console.log('Connection error:', error);
  });


//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 // remove caching
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API working!'});
});

router.route('/search/:name/:page').get(function(req, res) {
var value = req.params.name;
var page = req.params.page;

//for english to hiragana, only translate if first character is an roman letter
value = charMap(value)

//var query = {"$or": [{'kdict.0': value}, {'hdict' : value},]};
var query =   {"$or": [{'kdict': value}, {'hdict' : value}, {'forms.plainp': value}, 
{'forms.plainn': value},{'forms.politep': value},{'forms.politen': value}, {'info.definition': new RegExp(value, 'i') }]};
var options = {
  select: 'kdict hdict info',
  sort:{
    freq: -1 //Sort by freq DESC
  }, 
  page: page,
  limit: 10
};

Entry.paginate(query, options, function(err, result) {
  if (err)
    res.send(err);
  res.json(result);
}) .then(function(result) {
});


});

router.route ('/entry/:name').get (function(req, res) {
  var value = req.params.name;
  Entry.findOneAndUpdate({"$or": [{'kdict.0': value}, {'hdict' : value}]}, {$inc : {'freq' : 1}}, function(err, entries){
    if (err)
      res.send(err);
    res.json(entries);
  });
});


//Use our router configuration when we call /api
app.use('/api/v1', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});