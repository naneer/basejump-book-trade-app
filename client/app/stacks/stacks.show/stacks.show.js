'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stacks.show', {
        url: '/mystack',
        templateUrl: 'app/stacks/stacks.show/stacks.show.html',
        controller: 'StacksShowCtrl',
        controllerAs: 'ctrl',
        authenticate: true,
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