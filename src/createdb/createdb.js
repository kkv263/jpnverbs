const mongoose = require('mongoose');
const data2 = require('./JMdict.json');
const Verb = require('../models/verb');
const conjugateVerb = require('./conjugate');

// Connect to DB
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
// mongoose.connection.once('open', function(){
//   console.log('Connection has been made...');
//   }).on('error', function(error){
//     console.log('Connection error:', error);
//   });


// var verbtest = data2[101737]['r_ele'][0]['reb'][0];
// var typetest = data2[101737]['sense'][0]['pos'][0];
// var tester = (conjugateVerb.conjugate(verbtest, typetest));
// console.log(tester);

//dont do vz, vs-c, vr 

// var re = /&v5r-i*;/
// for (var i = 0; i < data2.length; i++){
//   if(re.test(data2[i]['sense'][0]['pos'][0])){
//       console.log(i);
//       console.log(data2[i]['r_ele']);
//       console.log(data2[i]['sense'][0]['gloss']);
//   }
// }


// var verb = new Verb({
//   rdict: data[3]['rdict'],
//   hdict: data[3]['hdict'],
//   kdict: data[3]['kdict'],
//   definition: data[3]['definition'],
//   class: data[3]['class'],
//   forms: c
// });

// verb.save().then(function() {
//   mongoose.disconnect();
// });

