const mongoose = require('mongoose');
const data2 = require('./JMdict.json');
const Entry = require('../models/entry');
const conjugateEntry = require('./conjugate');

// Connect to DB
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
// mongoose.connection.once('open', function(){
//   console.log('Connection has been made...');
//   }).on('error', function(error){
//     console.log('Connection error:', error);
//   });


//dont do vz, vs-c, vr 

var re = /&v.*;/

for (var i = 0; i < data2.length; i++){
  if(re.test(data2[i]['sense'][0]['pos'][0])){
      console.log(data2[i]['sense']);
  }
}


// var entry = new Entry({
//   rdict: data[3]['rdict'],
//   hdict: data[3]['hdict'],
//   kdict: data[3]['kdict'],
//   definition: data[3]['definition'],
//   class: data[3]['class'],
//   forms: c
// });

// entry.save().then(function() {
//   mongoose.disconnect();
// });

