'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stacks.show', {
        url: '/:username',
        templateUrl: 'app/stacks/stacks.show/stacks.show.html',
        controller: 'StacksShowCtrl',
        controllerAs: 'ctrl',
        resolve: {
          myBooks: [
            'Book',
            function(Book){
              return Book.mybooks().$promise;
            }
          ]
        }
      });
  });