/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    username: 'erudite',
    firstname: 'Test',
    lastname: 'User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    username: 'dauntless',
    firstname: 'Daunt',
    lastname: 'Less',
    email: 'daunt@test.com',
    password: 'test'
  }, {
    provider: 'local',
    username: 'admin',
    role: 'admin',
    firstname: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});