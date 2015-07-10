'use strict';

angular.module('workspaceApp')
  .factory('OpenLibrary', [ '$resource', function ($resource) {
    return $resource('/api/openlibrary');
  }]);
