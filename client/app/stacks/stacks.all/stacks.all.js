'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stacks.all', {
        url: '',
        templateUrl: 'app/stacks/stacks.all/stacks.all.html',
        controller: 'StacksAllCtrl',
        controllerAs: 'ctrl',
        authenticate: true,
        resolve: {
          stack: [
            'Book',
            function(Book){
              return Book.query().$promise;
            }
          ]
        }
      });
  });