const assert = require('assert');
const Verb = require('../models/verb');

describe('Saving records', function(){
  it('Saves a record to the database', function(done){

    var verb = new Verb({
      rdict: 'taberu',
      hdict: 'たべる',
      kdict: '食べる',
      definition: 'to eat',
      class: 2
    });

    verb.save().then(function(){
      assert(!verb.isNew);
      done();
    });

  });

  it('Creates record with sub form', function(done){
    var verb = new Verb({
      rdict: 'miru',
      forms: [{form: 'Present', plainp: ['見る'], plainn: ['見ない'], politep: ['見ます'], politen: ['見ません']}]
    });

    verb.save().then(function(){
      Verb.findOne({rdict: 'miru'}).then(function(result){
        assert(result.forms.length === 1);
        done();
      });
    });
  });

});
