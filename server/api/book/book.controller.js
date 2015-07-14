'use strict';

var _ = require('lodash');
var Book = require('./book.model');

// Get list of books
exports.index = function(req, res) {
  Book.find()
      .sort('-_id')
      .skip(req.query.offset)
      .limit(15)
      .populate('_owner', 'name')
      .exec(function (err, books) {
        if(err) { return handleError(res, err); }
        return res.json(200, books);
      });
};

// Get list of logged in User books
exports.mybooks = function(req, res) {
  Book.find({ _owner: req.user._id })
      .populate('_owner', 'name')
      .exec(function (err, books) {
        if(err) { return handleError(res, err); }
        return res.json(200, books);
      });
};

// Get a single book
exports.show = function(req, res) {
  Book.findById(req.params.id, function (err, book) {
    if(err) { return handleError(res, err); }
    if(!book) { return res.send(404); }
    return res.json(book);
  });
};

// Creates a new book in the DB.
exports.create = function(req, res) {
  req.body._owner = req.user._id;
  Book.create(req.body, function(err, book) {
    if(err) { return handleError(res, err); }
    return res.json(201, book);
  });
};

// Updates an existing book in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Book.findById(req.params.id, function (err, book) {
    if (err) { return handleError(res, err); }
    if(!book) { return res.send(404); }
    var updated = _.merge(book, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, book);
    });
  });
};

// Deletes a book from the DB.
exports.destroy = function(req, res) {
  Book.findById(req.params.id, function (err, book) {
    if(err) { return handleError(res, err); }
    if(!book) { return res.send(404); }
    book.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}