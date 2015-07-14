/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    city: 'Los Angeles',
    state: 'California',
    name: 'erudite',
    lastname: 'User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'dauntless',
    firstname: 'Daunt',
    lastname: 'Less',
    email: 'daunt@test.com',
    password: 'test'
  }, {
    provider: 'local',
    name: 'admin',
    role: 'admin',
    firstname: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});