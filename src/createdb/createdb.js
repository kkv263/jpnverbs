const mongoose = require('mongoose');

const data = require('../verbs.json');
const Verb = require('../models/verb');

var class2 = {
  'Present': ['る','ない','ます','ません'],
  'Past' : ['た', 'なかった', 'ました', 'ませんでした'],
  'Present-Progressive': ['ている', 'ていない','ています', 'ていません'],
  'Te' : ['て', 'なくて', 'まして', 'ませんで', ],
  'Volitional': ['よう', 'まい', 'ましょう', 'ますまい'],
  'Causative': ['させる', 'させない', 'させます', 'させません'],
  'Desire (Present)' : ['たい', 'たくない', 'たいです','たくないです'],
  'Desire (Past)' : ['たかった', 'たくなかった', 'たかったです','たくなかったです'],
  'Conditional': ['たら','なかったら','ましたら','ませんでしたら'],
  'Provisional': ['れば', 'なければ', 'ますなら(ば)','ませんなら(ば)'],
  'Passive' : ['られる', 'られない', 'られます', 'られません'],
  'Causative-Passive': ['させられる', 'せられない', 'させられます', 'させられません'],
  'Conjectural' : ['るだろう', 'ないだろう', 'るでしょう', 'ないでしょう'],
  'Alternative' : ['たり', 'なかったり', 'ましたり', 'ませんでしたり'],
  'Imperative' : ['ろ', 'るな', 'なさい', 'なさるな']
}

// Connect to DB
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.connection.once('open', function(){
  console.log('Connection has been made...');
  }).on('error', function(error){
    console.log('Connection error:', error);
  });


// for (var i = 0; i < data.length; i ++){
//   if (data[i] !== null){
//     if (data[i]['kdict'] === 'N/A'){
//       if (data[i]['class'] === 2){
//         conjugate( data[i]['hdict'], class2);
//       }
//     }
//     else
//       if (data[i]['class'] === 2){
//         conjugate( data[i]['kdict'], class2);
//       }
//   }
// }

var c = conjugate(data[3]['kdict'], class2);

var verb = new Verb({
  rdict: data[3]['rdict'],
  hdict: data[3]['hdict'],
  kdict: data[3]['kdict'],
  definition: data[3]['definition'],
  class: data[3]['class'],
  forms: c
});

verb.save().then(function() {
  mongoose.disconnect();
});

// Conjugate forms function
function conjugate (verb, vclass) {
  var stem = verb.substring(0, verb.length-1);
  var formsArray = [];

  for (var forms in vclass) {
    if (vclass.hasOwnProperty(forms)){
      conjugate = new Object();
      conjugate.form = forms;
      conjugate.plainp = stem.concat(vclass[forms][0]);
      conjugate.plainn= stem.concat(vclass[forms][1]);
      conjugate.politep = stem.concat(vclass[forms][2]);
      conjugate.politen = stem.concat(vclass[forms][3]);
      formsArray.push(conjugate);
    }
  } 

  return formsArray;
}