'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stacks.new', {
        url: '/new',
        templateUrl: 'app/stacks/stacks.new/stacks.new.html',
        controller: 'StacksNewCtrl',
        controllerAs: 'ctrl',
        authenticate: true
      });
  });