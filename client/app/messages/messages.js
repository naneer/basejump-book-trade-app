'use strict';

angular.module('workspaceApp')
  .config([ '$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('messages', {
        url: '/messages',
        templateUrl: 'app/messages/messages.html',
        controller: 'MessagesCtrl',
        controllerAs: 'ctrl',
        resolve: {
          requests: [
            'Trade',
            function(Trade){
              return Trade.myrequests().$promise;
            }
          ],
          offers: [
            'Trade',
            function(Trade){
              return Trade.myoffers().$promise;
            }
          ]
        }
      });
  }]);