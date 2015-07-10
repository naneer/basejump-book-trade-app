'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stacks', {
        abstract: true,
        url: '/stacks',
        templateUrl: 'app/stacks/stacks.html',
        controller: 'StacksCtrl',
        controllerAs: 'ctrl'
      });
  });