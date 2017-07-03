const mongoose = require('mongoose');
const { Schema, SchemaTypes } = mongoose;

const BookSchema = new Schema({
  title: String,
  imgLink: String,
  owner: SchemaTypes.ObjectId
});

module.exports = mongoose.model('Book', BookSchema);
