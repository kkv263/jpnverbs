const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var FormSchema = new Schema({
  form: String,
  plainp: String,
  plainn: String,
  politep: String,
  politen: String,
});

var InfoSchema = new Schema({
  definition: String,
  pos: [String],
  xref: [[String]],
  misc: [[String]],
});

var EntrySchema = new Schema({
  hdict: [String],
  kdict: [String],  
  info: [InfoSchema],
  forms: [FormSchema],
  conjugate: Boolean,
  freq: Number
});

EntrySchema.plugin(mongoosePaginate);

const Entry = mongoose.model("entry", EntrySchema);

module.exports = Entry;