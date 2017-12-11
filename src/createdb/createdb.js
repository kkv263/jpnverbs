const mongoose = require('mongoose');
const data = require('../verbs.json');
const data2 = require('./JMdict.json');
const Verb = require('../models/verb');

function assignEndings (verb, type) {
  formsObject = new Object();
  var endingArray = [];
  if (type === 1){
    var ending = verb.charAt(verb.length-1);
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
        if (verb === '行く'){
          endingArray[0] = 'って';
          endingArray[1] = 'った';
        }
        break;
    }
  } else if (type === 2) {
      endingArray = ['て', 'た', 'る', '', '', 'よ', 'れ', 'られ', 'さ', 'ろ'];
  } else {
      if (verb === '来る' || verb === 'くる'){
        endingArray = ['て', 'た', 'る', '', '', 'よ', 'れ', 'られ', 'さ', 'い'];
      }
      else {
        endingArray = ['して', 'した', 'する', 'し', 'し', 'しよ', 'でき', '', 'さ', 'しろ'];
      }
  }

  // possible refactor later on
  formsObject.Present = [endingArray[2], endingArray[3] + 'ない', 
  endingArray[4] + 'ます', endingArray[4] + 'ません'];
  formsObject.Past = [endingArray[1], endingArray[3] + 'なかった', 
  endingArray[4] + 'ました', endingArray[4] + 'ませんでした'];
  formsObject.Te = [endingArray[0], endingArray[3] + 'なくて',
  endingArray[4] + 'まして', endingArray[4] + 'ませんで'];
  formsObject.Present_Progressive = [endingArray[0] + 'いる', endingArray[0] + 'いない',
  endingArray[0] + 'います', endingArray[0] + 'いません'];
  formsObject.Volitional = [endingArray[5] + 'う', (type === 2 ? '': endingArray[2]) + 'まい', 
  endingArray[4] + 'ましょう', endingArray[4] + 'ますまい'];
  formsObject.Desire_Present = [endingArray[4] + 'たい', endingArray[4] + 'たくない',
  endingArray[4] + 'たいです', endingArray[4] + 'たくないです'];
  formsObject.Desire_Past = [endingArray[4] + 'たかった', endingArray[4] + 'たくなかった',
  endingArray[4] + 'たかったです', endingArray[4] + 'たくなかったです'];
  formsObject.Conditional= [endingArray[1] + 'ら', endingArray[3] + 'なかったら', 
  endingArray[4] + 'ましたら', endingArray[4] + 'ませんでしたら'];
  formsObject.Provisional = [(verb === 'する' ? 'すれ' : endingArray[6]) + 'ば', endingArray[3] + 'なければ',
  endingArray[4] + 'ますなら(ば)',  endingArray[4] + 'ませんなら(ば)'];
  formsObject.Potential = [endingArray[(type === 2 ? 7 : 6)] + 'る', endingArray[(type === 2 ? 7 : 6)] + 'ない',
  endingArray[(type === 2 ? 7 : 6)] + 'ます', endingArray[(type === 2 ? 7 : 6)] + 'ません'];
  formsObject.Passive = (type === 2 ? formsObject.Potential : ([endingArray[(type !== 1 ? 8 : 3)]  + 'れる', endingArray[(type !== 1 ? 8 : 3)] + 'れない',
  endingArray[(type !== 1 ? 8 : 3)] + 'れます', endingArray[(type !== 1 ? 8 : 3)] + 'れません']));
  formsObject.Causative = [endingArray[(type !== 1 ? 8 : 3)] + 'せる', endingArray[(type !== 1 ? 8 : 3)] + 'せない',
  endingArray[(type !== 1 ? 8 : 3)] + 'せます', endingArray[(type !== 1 ? 8 : 3)] + 'せません'];
  formsObject.Causative_Alt = [endingArray[(type !== 1 ? 8 : 3)] + 'す', endingArray[(type !== 1 ? 8 : 3)] + 'さない',
  endingArray[(type !== 1 ? 8 : 3)] + 'します', endingArray[(type !== 1 ? 8 : 3)] + 'しません'];
  formsObject.Causative_Passive = [endingArray[(type !== 1 ? 8 : 3)] + 'せられる', endingArray[(type !== 1 ? 8 : 3)] + 'せられない',
  endingArray[(type !== 1 ? 8 : 3)] + 'せられます', endingArray[(type !== 1 ? 8 : 3)] + 'せられません'];
  formsObject.Conjectural = [endingArray[2] + 'だろう', endingArray[3] + 'ないだろう', 
  endingArray[2] + 'でしょう', endingArray[3] + 'ないでしょう'];
  formsObject.Alternative = [endingArray[1] + 'り', endingArray[3] + 'なかったり', 
  endingArray[4] + 'ましたり', endingArray[4] + 'ませんでしたり'];
  formsObject.Imperative = [type !== 1 ? endingArray[9] : endingArray[6], endingArray[2] + 'な',
  endingArray[4] + 'なさい', endingArray[4] + 'なさるな'];
  return(formsObject);
}

// Conjugate forms function
function conjugate (verb, type) {

  if (verb === 'する'){
    var stem = '';
  }
  else {
    var stem = verb.substring(0, verb.length-1);
  }
  var formsArray = [];
  var vclass = assignEndings (verb, type);

  for (var forms in vclass) {
    if (vclass.hasOwnProperty(forms)){
      formObject = new Object();
      formObject.form = forms;
      formObject.plainp = stem.concat(vclass[forms][0]);
      formObject.plainn= stem.concat(vclass[forms][1]);
      formObject.politep = stem.concat(vclass[forms][2]);
      formObject.politen = stem.concat(vclass[forms][3]);
      formsArray.push(formObject);
    }
  } 

  return formsArray;
}

console.log(conjugate('来る', 3));
console.log(conjugate('する', 3));

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
//         conjugate(data[i]['hdict'], ichidan);
//       }
//     }
//     else
//       if (data[i]['class'] === 2){
//         conjugate(data[i]['kdict'], ichidan);
//       }
//   }
// }

//console.log(data2[0]['r_ele'][0]);

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

