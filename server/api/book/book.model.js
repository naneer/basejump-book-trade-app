'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  subtitle: String,
  cover: String,
  author_list: String,
  ol_key: String,
  user_id: String
});

module.exports = mongoose.model('Book', BookSchema);