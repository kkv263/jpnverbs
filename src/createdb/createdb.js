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
  'Desire_Present' : ['たい', 'たくない', 'たいです','たくないです'],
  'Desire_Past' : ['たかった', 'たくなかった', 'たかったです','たくなかったです'],
  'Conditional': ['たら','なかったら','ましたら','ませんでしたら'],
  'Provisional': ['れば', 'なければ', 'ますなら(ば)','ませんなら(ば)'],
  'Potential' : ['られる', 'られない', 'られます', 'られません'],
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
      endingArray = ['って', 'った', 'う','わ', 'い', 'お', 'え'];
      break;
    case 'つ':
      endingArray = ['って', 'った', 'つ','た', 'ち','と','て'];
      break;
    case 'る':
      endingArray = ['って', 'った', 'る','ら', 'り','ろ', 'れ'];
      break;
    case 'む':
      endingArray = ['んで', 'んだ',  'む','ま', 'み','も', 'め'];
      break;
    case 'ぶ':
      endingArray = ['んで', 'んだ',  'ぶ','ば', 'び','ぼ', 'べ'];
      break;
    case 'ぬ':
      endingArray = ['んで', 'んだ',  'ぬ','な', 'に','の', 'ね'];
      break;
    case 'す':
      endingArray = ['して', 'した',  'す','さ', 'し','そ', 'せ'];
      break;
    case 'ぐ':
      endingArray = ['いで', 'いだ',  'ぐ','が', 'ぎ','ご', 'げ'];
      break;
    case 'く':
      endingArray = ['いて', 'いた', 'く','か', 'き','こ', 'け'];
      break;
  }


  // possible refactor later on
  class1.Present = [endingArray[2], endingArray[3] + 'ない', 
  endingArray[4] + 'ます', endingArray[4] + 'ません'];
  class1.Past = [endingArray[1], endingArray[3] + 'なかった', 
  endingArray[4] + 'ました', endingArray[4] + 'ませんでした'];
  class1.Te = [endingArray[0], endingArray[3] + 'なくて',
  endingArray[4] + 'まして', endingArray[4] + 'ませんで'];
  class1.Present_Progressive = [endingArray[0] + 'いる', endingArray[0] + 'いない',
  endingArray[0] + 'います', endingArray[0] + 'いません'];
  class1.Volitional = [endingArray[5] + 'う', endingArray[2] + 'まい', 
  endingArray[4] + 'ましょう', endingArray[4] + 'ますまい'];
  class1.Desire_Present = [endingArray[4] + 'たい', endingArray[4] + 'たくない',
  endingArray[4] + 'たいです', endingArray[4] + 'たくないです'];
  class1.Desire_Past = [endingArray[4] + 'たかった', endingArray[4] + 'たくなかった',
  endingArray[4] + 'たかったです', endingArray[4] + 'たくなかったです'];
  class1.Conditional= [endingArray[1] + 'ら', endingArray[3] + 'なかったら', 
  endingArray[4] + 'ましたら', endingArray[4] + 'ませんでしたら'];
  class1.Provisional = [endingArray[6] + 'ば', endingArray[3] + 'なければ',
  endingArray[4] + 'ますなら(ば)',  endingArray[4] + 'ませんなら(ば)'];
  class1.Potential = [endingArray[6] + 'る', endingArray[6] + 'ない',
  endingArray[6] + 'ます', endingArray[6] + 'ません'];
  class1.Passive = [endingArray[3] + 'れる', endingArray[3] + 'れない',
  endingArray[3] + 'れます', endingArray[3] + 'れません'];
  class1.Causative = [endingArray[3] + 'せる', endingArray[3] + 'せない',
  endingArray[3] + 'せます', endingArray[3] + 'せません'];
  class1.Causative_Alt = [endingArray[3] + 'す', endingArray[3] + 'さない',
  endingArray[3] + 'します', endingArray[3] + 'しません'];
  class1.Causative_Passive = [endingArray[3] + 'せられる', endingArray[3] + 'せられない',
  endingArray[3] + 'せられます', endingArray[3] + 'せられません'];
  class1.Conjectural = [endingArray[2] + 'だろう', endingArray[3] + 'ないだろう', 
  endingArray[2] + 'でしょう', endingArray[3] + 'ないでしょう'];
  class1.Alternative = [endingArray[1] + 'り', endingArray[3] + 'なかったり', 
  endingArray[4] + 'ましたり', endingArray[4] + 'ませんでしたり'];
  class1.Imperative = [endingArray[6], endingArray[2] + 'な',
  endingArray[4] + 'なさい', endingArray[4] + 'なさるな'];

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