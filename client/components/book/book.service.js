'use strict';

angular.module('workspaceApp')
  .factory('Book', ['$resource', function ($resource) {
    return $resource('api/books/:id', {
      id: '@id'
    }, 
    {
      mybooks: {
        method: 'GET',
        isArray: true,
        params: {
          id: 'mybooks'
        }
      }
    });
  }]);
