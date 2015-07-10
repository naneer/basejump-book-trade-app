'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stacks.all', {
        url: '',
        templateUrl: 'app/stacks/stacks.all/stacks.all.html',
        controller: 'StacksAllCtrl',
        controllerAs: 'ctrl'
      });
  });