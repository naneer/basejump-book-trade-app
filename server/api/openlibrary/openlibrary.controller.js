'use strict';

var _ = require('lodash');
var Openlibrary = require('./openlibrary.model');

// Get list of openlibrarys
exports.index = function(req, res) {
  var query = req.query;
  Openlibrary.find(query, function (err, openlibraries) {
    if(err) { return handleError(res, err); }
    return res.json(200, openlibraries);
  });
};

// Get a single openlibrary
exports.show = function(req, res) {
  Openlibrary.findById(req.params.id, function (err, openlibrary) {
    if(err) { return handleError(res, err); }
    if(!openlibrary) { return res.send(404); }
    return res.json(openlibrary);
  });
};

// // Creates a new openlibrary in the DB.
// exports.create = function(req, res) {
//   Openlibrary.create(req.body, function(err, openlibrary) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, openlibrary);
//   });
// };

// // Updates an existing openlibrary in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   Openlibrary.findById(req.params.id, function (err, openlibrary) {
//     if (err) { return handleError(res, err); }
//     if(!openlibrary) { return res.send(404); }
//     var updated = _.merge(openlibrary, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, openlibrary);
//     });
//   });
// };

// // Deletes a openlibrary from the DB.
// exports.destroy = function(req, res) {
//   Openlibrary.findById(req.params.id, function (err, openlibrary) {
//     if(err) { return handleError(res, err); }
//     if(!openlibrary) { return res.send(404); }
//     openlibrary.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

function handleError(res, err) {
  return res.send(500, err);
}