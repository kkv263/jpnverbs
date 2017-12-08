const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FormSchema = new Schema({
  form: String,
  plainp: [String],
  plainn: [String],
  politep: [String],
  politen: [String],
});

var VerbSchema = new Schema({
  rdict: String,
  hdict: String,
  kdict: String,  
  definition: String,
  class: Number,
  forms: [FormSchema]
});

const Verb = mongoose.model("verb", VerbSchema);

module.exports = Verb;