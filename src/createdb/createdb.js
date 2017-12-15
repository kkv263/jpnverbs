const tagMap = require ('./tagmap');
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
var re = /&v[^2-4zr]-?[^c]*;/
const miscArray = ['misc', 'field', 'lsource', 'ant', 'dial', 'pri', 's_inf'];
for (var i = 0; i < data2.length; i++){
  if (re.test(data2[i]['sense'][0]['pos'][0])){
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
            if (pos[k] in tagMap) {
              pos[k] = tagMap[pos[k]];
            }
          }
        }  
        if ('xref' in data2[i]['sense'][j]){
          xref = data2[i]['sense'][j]['xref'];
        }  

        for (var k = 0; k < miscArray.length; k ++){
          if (miscArray[k] in data2[i]['sense'][j]){
            misc = data2[i]['sense'][j][miscArray[k]];
          }  
        }

        (entry.info).push({definition: definition, pos: pos, xref:xref, misc:misc});
      }

        if ('k_ele' in data2[i]){
          conjugate = true;
          entry.forms = conjugateEntry.conjugate(data2[i]['k_ele'][0]['keb'][0], data2[i]['sense'][0]['pos'][0]);
        }else{
          conjugate = true;
          entry.forms = conjugateEntry.conjugate(data2[i]['r_ele'][0]['reb'][0], data2[i]['sense'][0]['pos'][0]);
        }
      entry.conjugate = conjugate;

      // entry.save().then(function() {
      //   mongoose.disconnect();
      // });

      // console.log('Saving: ' + i);
    }

}




