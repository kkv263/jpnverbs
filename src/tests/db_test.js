const assert = require('assert');
const Verb = require('../models/verb');

describe('Saving records', function(){
  it('Saves a record to the database', function(done){

    const verb = new Verb({
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

});
