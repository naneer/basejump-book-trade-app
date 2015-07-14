'use strict';

angular.module('workspaceApp')
  .factory('Trade', [ '$resource', function ($resource) {
    return $resource('api/trades/:id', {
      id: '@id'
    }, 
    {
      myrequests: {
        method: 'GET',
        isArray: true,
        params: {
          id: 'myrequests'
        }
      }, 
      myoffers: {
        method: 'GET',
        isArray: true,
        params: {
          id: 'myoffers'
        }
      },
      put: {
        method: 'PUT'
      }
    });
  }]);
