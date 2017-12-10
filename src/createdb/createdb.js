const mongoose = require('mongoose');
const data = require('../verbs.json');
const data2 = require('./JMdict.json');
const Verb = require('../models/verb');

var class2 = {
  'Present': ['る','ない','ます','ません'],
  'Past' : ['た', 'なかった', 'ました', 'ませんでした'],
  'Te' : ['て', 'なくて', 'まして', 'ませんで', ],
  'Present_Progressive': ['ている', 'ていない','ています', 'ていません'],
  'Volitional': ['よう', 'まい', 'ましょう', 'ますまい'],
  'Desire (Present)' : ['たい', 'たくない', 'たいです','たくないです'],
  'Desire (Past)' : ['たかった', 'たくなかった', 'たかったです','たくなかったです'],
  'Conditional': ['たら','なかったら','ましたら','ませんでしたら'],
  'Provisional': ['れば', 'なければ', 'ますなら(ば)','ませんなら(ば)'],
  'Passive' : ['られる', 'られない', 'られます', 'られません'],
  'Causative': ['させる', 'させない', 'させます', 'させません'],
  'Causative_Alt': ['さす', 'ささない', 'さします', 'さしません'],
  'Causative_Passive': ['させられる', 'せられない', 'させられます', 'させられません'],
  'Conjectural' : ['るだろう', 'ないだろう', 'るでしょう', 'ないでしょう'],
  'Alternative' : ['たり', 'なかったり', 'ましたり', 'ませんでしたり'],
  'Imperative' : ['ろ', 'るな', 'なさい', 'なさるな']
}

function godanEndings (verb) {
  class1 = new Object();
  console.log(verb);
  var ending = verb.charAt(verb.length-1);
  var endingArray = [];
  switch (ending) {
    case 'う':
      endingArray = ['って', 'った', 'う','わ', 'い'];
      break;
    case 'つ':
      endingArray = ['って', 'った', 'つ','た', 'ち'];
      break;
    case 'る':
      endingArray = ['って', 'った', 'る','ら', 'り'];
      break;
    case 'む':
      endingArray = ['んで', 'んだ',  'む','ま', 'み'];
      break;
    case 'ぶ':
      endingArray = ['んで', 'んだ',  'ぶ','ば', 'び'];
      break;
    case 'ぬ':
      endingArray = ['んで', 'んだ',  'ぬ','な', 'に'];
      break;
    case 'す':
      endingArray = ['して', 'した',  'す','さ', 'し'];
      break;
    case 'ぐ':
      endingArray = ['いで', 'いだ',  'ぐ','が', 'ぎ'];
      break;
    case 'く':
      endingArray = ['いて', 'いた', 'く','か', 'き'];
      break;
  }

  class1.Present = [endingArray[2], endingArray[3] + 'ない', 
  endingArray[4] + 'ます', endingArray[4] + 'ません'];
  class1.Past = [endingArray[1], endingArray[3] + 'なかった', 
  endingArray[4] + 'ました', endingArray[4] + 'ませんでした'];
  class1.Te = [endingArray[0], endingArray[3] + 'なくて',
  endingArray[4] + 'まして', endingArray[4] + 'ませんで'];
  class1.Present_Progressive = [endingArray[0] + 'いる', endingArray[0] + 'いない',
  endingArray[0] + 'います', endingArray[0] + 'いません'];


  return(class1);
}

console.log(conjugate(data[488]['kdict'],godanEndings(data[488]['kdict'])));
godanEndings(data[426]['kdict']);
godanEndings(data[0]['kdict']);
godanEndings(data[155]['kdict']);
godanEndings(data[341]['kdict']);
godanEndings(data[146]['kdict']);
godanEndings(data[277]['kdict']);
godanEndings(data[443]['kdict']);
godanEndings(data[502]['kdict']);

// Connect to DB
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
// mongoose.connection.once('open', function(){
//   console.log('Connection has been made...');
//   }).on('error', function(error){
//     console.log('Connection error:', error);
//   });


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

//console.log(data2[0]['r_ele'][0]);
//var c = conjugate(data[3]['kdict'], class2);

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