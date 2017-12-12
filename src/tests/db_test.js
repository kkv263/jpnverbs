const assert = require('assert');
const Entry = require('../models/entry');

describe('Saving records', function(){
  it('Saves a record to the database', function(done){

    var entry = new Entry({
      rdict: 'taberu',
      hdict: ['たべる'],
      kdict: ['食べる'],
    });

    entry.save().then(function(){
      assert(!entry.isNew);
      done();
    });

  });

  it('Creates record with sub form', function(done){
    var entry = new Entry({
      rdict: 'miru',
      forms: [{form: 'Present', plainp: '見る', plainn: '見ない', politep: '見ます', politen: '見ません'}]
    });

    entry.save().then(function(){
      Entry.findOne({rdict: 'miru'}).then(function(result){
        assert(result.forms.length === 1);
        done();
      });
    });
  });

});
