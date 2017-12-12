const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to mongodb
before(function(done){
  
  mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
  mongoose.connection.once('open', function(){
    console.log('Connection has been made...');
      done();
    }).on('error', function(error){
      console.log('Connection error:', error);
    });
  
  });

// Drop the collection before each test
  beforeEach(function(done){
    mongoose.connection.collections.entries.drop(function(){
      done();
    });
});

after(function (done) {
  mongoose.disconnect();
  done();
});