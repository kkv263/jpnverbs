const mongoose = require('mongoose');

var data = require('./verbs.json');

// mongoose.connect('mongodb://localhost/verbsdev', { useMongoClient: true });
// mongoose.connection.once('open', function(){
//   console.log('Connection has been made...');
//   }).on('error', function(error){
//     console.log('Connection error:', error);
//   });

var class2 = {
  Present: ['る','ない','ます','ません']
}

// Conjugate forms
for (var i = 0; i < data.length; i ++){
  if (data[i] !== null){
    if (data[i]['kdict'] === 'N/A'){
      if (data[i]['class'] === 2){
        console.log(conjugate( data[i]['hdict'], ['る','ない','ます','ません']));
      }
    }
    else
      if (data[i]['class'] === 2){
        console.log(conjugate( data[i]['kdict'], ['る','ない','ます','ません']));
      }
  }
}



function conjugate (verb, endings) {
  var stem = verb.substring(0, verb.length-1);

  for (var i = 0; i < endings.length; i ++){
    endings[i] = stem.concat(endings[i]);
  }

  return endings;
}