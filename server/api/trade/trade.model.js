'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    timestamps = require('mongoose-timestamps');

var TradeSchema = new Schema({
  _to_book: { type: Schema.Types.ObjectId, ref: 'Book' },
  _from_book: { type: Schema.Types.ObjectId, ref: 'Book' },
  _touser: { type: Schema.Types.ObjectId, ref: 'User' },
  _fromuser: { type: Schema.Types.ObjectId, ref: 'User' },
  accepted: { type: Boolean, default: false },
  active: { type: Boolean, default: true }
});

TradeSchema.plugin(timestamps);

module.exports = mongoose.model('Trade', TradeSchema);