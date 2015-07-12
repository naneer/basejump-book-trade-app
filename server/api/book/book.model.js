'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  cover: String,
  authorlist: Array,
  ol_key: String,
  user_id: String
});

module.exports = mongoose.model('Book', BookSchema);