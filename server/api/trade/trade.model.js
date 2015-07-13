'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TradeSchema = new Schema({
  bookrequested: String,
  bookoffered: String,
  accepted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Trade', TradeSchema);