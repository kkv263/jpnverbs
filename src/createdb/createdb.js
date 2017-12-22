const tagMap = require ('./tagmap');
const mongoose = require('mongoose');
const data2 = require('./JMdict.json');
const Entry = require('../models/entry');
const conjugateEntry = require('./conjugate');
var user = require('../cred');
// const mongoUrl = 'mongodb://localhost/test'

const mongoUrl = 'mongodb://' + user.user + ':' + user.pw +'@ds059207.mlab.com:59207/conjugations';

//Connect to DB
mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useMongoClient: true });
mongoose.connection.once('open', function(){
  console.log('Connection has been made...');
  }).on('error', function(error){
    console.log('Connection error:', error);
  });

mongoose.set('debug', true);

function matchPos(regex, array){
// return -1 or array pos... ugh
  for (var i = 0; i < array.length; i ++){
    if (regex.test(array[i]))
      return i;
  }
  return -1;
}

//dont do vz, vs-c, vr 
var re = /&v[^2-4zrti]-?[^c]*;/
const miscArray = ['misc', 'field', 'ant', 'dial', 'pri', 's_inf'];
console.log('Creating database');
// around 180,000 entries
for (var i = (30000) * 5; i < data2.length; i++){
  var conIndex = matchPos(re, data2[i]['sense'][0]['pos']);
  if ( conIndex !== -1){
      console.log(i);
      var entry = new Entry();
      var conjugate = false;
      // grabs all kanji if exists
      var kanjiArray = [];

      if ('k_ele' in data2[i]){
        for(var j = 0; j < data2[i]['k_ele'].length; j++){
          kanjiArray.push(data2[i]['k_ele'][j]['keb'][0]);
        }

      }
      // grabs all hiragana
      var hiraArray = [];
      for(var j = 0; j < data2[i]['r_ele'].length; j++){
        hiraArray.push(data2[i]['r_ele'][j]['reb'][0]);
      } 
      entry.kdict = kanjiArray;
      entry.hdict = hiraArray;

      if ('k_ele' in data2[i]){
        conjugate = true;
          entry.forms = conjugateEntry.conjugate(data2[i]['k_ele'][0]['keb'][0], data2[i]['sense'][0]['pos'][conIndex]);
      }else{
        conjugate = true;
          entry.forms = conjugateEntry.conjugate(data2[i]['r_ele'][0]['reb'][0], data2[i]['sense'][0]['pos'][conIndex]);
      }
      entry.conjugate = conjugate;

      for (var j = 0; j < data2[i]['sense'].length; j++){
        // each loop new schema for these three
        var definition = '';
        var pos = [];
        var xref = [];
        var misc = [];

        var definition = data2[i]['sense'][j]['gloss'].join('; ');
        if ('pos' in data2[i]['sense'][j]){
          pos = data2[i]['sense'][j]['pos'];
          for (var k = 0; k < pos.length; k++){
            if (pos[k] in verbMap) {
              pos[k] = verbMap[pos[k]];
            }
          }
        }  
        if ('xref' in data2[i]['sense'][j]){
          xref = data2[i]['sense'][j]['xref'];
          for (var k = 0; k < xref.length; k++){
            xref[k] = xref[k].split('・');
            if (!isNaN(xref[k][xref[k].length-1]))
              xref[k].splice(xref[k].length-1,1);
          }
        }  

        for (var k = 0; k < miscArray.length; k ++){
          if (miscArray[k] in data2[i]['sense'][j]){
            misc = data2[i]['sense'][j][miscArray[k]];
            for (var m = 0; m < misc.length; m++){
              if (misc[m] in miscMap) {
                misc[m] = miscMap[misc[m]];
              }
              else {
                misc[m] = misc[m].replace(/usu./i, 'usually');
                misc[m] = misc[m].replace(/esp./i, 'especially');
                misc[m] = misc[m].replace(/orig./i, 'original');
                misc[m] = misc[m].replace(/oft./i, 'often');
                misc[m] = misc[m].replace(/neg./i, 'negative');
                misc[m] = misc[m].replace(/aux./i, 'auxilary');
                misc[m] = misc[m].replace(/occ./i, 'occasionally');
                misc[m] = misc[m].replace(/var./i, 'variation');
                misc[m] = misc[m].replace(/lit./i, 'literary');
                misc[m] = misc[m].replace(/equiv./i, 'equivalent');
                misc[m] = misc[m].charAt(0).toUpperCase() + misc[m].slice(1);
              }
            }
          }  
        }

        (entry.info).push({definition: definition, pos: pos, xref:xref, misc:misc});
      }


      entry.save().then(function() {
        mongoose.disconnect();
      });
    }
}

console.log('Inserting...');