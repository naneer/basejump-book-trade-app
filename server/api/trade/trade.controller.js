'use strict';

var _ = require('lodash');
var Trade = require('./trade.model');

// Get list of trades
exports.index = function(req, res) {
  Trade.find(function (err, trades) {
    if(err) { return handleError(res, err); }
    return res.json(200, trades);
  });
};

// Get list of logged in User requests
exports.myrequests = function(req, res) {
  Trade.find({ _fromuser: req.user._id })
      .sort('-created_at')
      .limit(10)
      .populate('_touser', 'username')
      .populate('_to_book _from_book')
      .exec(function (err, requests) {
        if(err) { return handleError(res, err); }
        return res.json(200, requests);
      });
};

// Get list of logged in User offers
exports.myoffers = function(req, res) {
  Trade.find({ _touser: req.user._id })
       .sort('-created_at')
       .limit(5)
       .populate('_fromuser', 'username')
       .populate('_to_book _from_book')
       .exec(function (err, offers) {
         if(err) { return handleError(res, err); }
         return res.json(200, offers);
       })
};

// Get a single trade
exports.show = function(req, res) {
  Trade.findById(req.params.id, function (err, trade) {
    if(err) { return handleError(res, err); }
    if(!trade) { return res.send(404); }
    return res.json(trade);
  });
};

// Creates a new trade in the DB.
exports.create = function(req, res) {
  req.body._fromuser = req.user._id;
  Trade.create(req.body, function(err, trade) {
    if(err) { return handleError(res, err); }
    return res.json(201, trade);
  });
};

// Updates an existing trade in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Trade.findById(req.params.id, function (err, trade) {
    if (err) { return handleError(res, err); }
    if(!trade) { return res.send(404); }
    var updated = _.merge(trade, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, trade);
    });
  });
};

// Deletes a trade from the DB.
exports.destroy = function(req, res) {
  Trade.findById(req.params.id, function (err, trade) {
    if(err) { return handleError(res, err); }
    if(!trade) { return res.send(404); }
    trade.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}