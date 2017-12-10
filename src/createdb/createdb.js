const mongoose = require('mongoose');
const data = require('../verbs.json');
const data2 = require('./JMdict.json');
const Verb = require('../models/verb');

var ichidan = {
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
};

function godanEndings (verb) {
  godan = new Object();
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
      if (verb === '行く'){
        endingArray[0] = 'って';
        endingArray[1] = 'った';
      }
      break;
  }


  // possible refactor later on
  godan.Present = [endingArray[2], endingArray[3] + 'ない', 
  endingArray[4] + 'ます', endingArray[4] + 'ません'];
  godan.Past = [endingArray[1], endingArray[3] + 'なかった', 
  endingArray[4] + 'ました', endingArray[4] + 'ませんでした'];
  godan.Te = [endingArray[0], endingArray[3] + 'なくて',
  endingArray[4] + 'まして', endingArray[4] + 'ませんで'];
  godan.Present_Progressive = [endingArray[0] + 'いる', endingArray[0] + 'いない',
  endingArray[0] + 'います', endingArray[0] + 'いません'];
  godan.Volitional = [endingArray[5] + 'う', endingArray[2] + 'まい', 
  endingArray[4] + 'ましょう', endingArray[4] + 'ますまい'];
  godan.Desire_Present = [endingArray[4] + 'たい', endingArray[4] + 'たくない',
  endingArray[4] + 'たいです', endingArray[4] + 'たくないです'];
  godan.Desire_Past = [endingArray[4] + 'たかった', endingArray[4] + 'たくなかった',
  endingArray[4] + 'たかったです', endingArray[4] + 'たくなかったです'];
  godan.Conditional= [endingArray[1] + 'ら', endingArray[3] + 'なかったら', 
  endingArray[4] + 'ましたら', endingArray[4] + 'ませんでしたら'];
  godan.Provisional = [endingArray[6] + 'ば', endingArray[3] + 'なければ',
  endingArray[4] + 'ますなら(ば)',  endingArray[4] + 'ませんなら(ば)'];
  godan.Potential = [endingArray[6] + 'る', endingArray[6] + 'ない',
  endingArray[6] + 'ます', endingArray[6] + 'ません'];
  godan.Passive = [endingArray[3] + 'れる', endingArray[3] + 'れない',
  endingArray[3] + 'れます', endingArray[3] + 'れません'];
  godan.Causative = [endingArray[3] + 'せる', endingArray[3] + 'せない',
  endingArray[3] + 'せます', endingArray[3] + 'せません'];
  godan.Causative_Alt = [endingArray[3] + 'す', endingArray[3] + 'さない',
  endingArray[3] + 'します', endingArray[3] + 'しません'];
  godan.Causative_Passive = [endingArray[3] + 'せられる', endingArray[3] + 'せられない',
  endingArray[3] + 'せられます', endingArray[3] + 'せられません'];
  godan.Conjectural = [endingArray[2] + 'だろう', endingArray[3] + 'ないだろう', 
  endingArray[2] + 'でしょう', endingArray[3] + 'ないでしょう'];
  godan.Alternative = [endingArray[1] + 'り', endingArray[3] + 'なかったり', 
  endingArray[4] + 'ましたり', endingArray[4] + 'ませんでしたり'];
  godan.Imperative = [endingArray[6], endingArray[2] + 'な',
  endingArray[4] + 'なさい', endingArray[4] + 'なさるな'];
  return(godan);
}

function irregularEndings (verb) {
  irregular = new Object();
  endingArray = [];

  if (verb === '来る'　|| 'くる')
    irregular = ichidan;
    irregular.Imperative[0] = 'い';

  if (verb === 'する'){
  }

  return irregular;
}

console.log(conjugate('来る', irregularEndings ('来る')));

// Connect to DB
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
// mongoose.connection.once('open', function(){
//   console.log('Connection has been made...');
//   }).on('error', function(error){
//     console.log('Connection error:', error);
//   });


for (var i = 0; i < data.length; i ++){
  if (data[i] !== null){
    if (data[i]['kdict'] === 'N/A'){
      if (data[i]['class'] === 2){
        conjugate(data[i]['hdict'], ichidan);
      }
    }
    else
      if (data[i]['class'] === 2){
        conjugate(data[i]['kdict'], ichidan);
      }
  }
}

//console.log(data2[0]['r_ele'][0]);
//var c = conjugate(data[3]['kdict'], godan);

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