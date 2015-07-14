'use strict';

angular.module('workspaceApp')
  .controller('MessagesCtrl', [ 'requests', 'offers', 'Trade', '$timeout', function (requests, offers, Trade, $timeout) {
    var ctrl = this;
    ctrl.requests = requests;
    ctrl.offers = offers;
    
    ctrl.cancel = function(trade, index, event) {
      var query = Trade.delete({ id: trade._id }).$promise;
      query.then(function(result){
        event.target.parentElement.classList.add("animated", "zoomOut");
        $timeout(function(){
          ctrl.requests.splice(index, 1);
        }, 1000);
      });
    };
    
    ctrl.decline = function(trade, index, event) {
      var query = Trade.put({ id: trade._id }, { active: false }).$promise;
      query.then(function(result){
        event.target.parentElement.classList.add("animated", "zoomOut");
        $timeout(function(){
          ctrl.offers[index].active = result.active;
          ctrl.offers[index].accepted = result.accepted;
        }, 500);
      });
    };
    
    ctrl.accept = function(trade, index, event) {
      var query = Trade.put({ id: trade._id }, { active: false, accepted: true }).$promise;
      query.then(function(result){
        event.target.parentElement.classList.add("animated", "zoomOut");
        $timeout(function(){
          ctrl.offers[index].active = result.active;
          ctrl.offers[index].accepted = result.accepted;
        }, 500);
      });
    };
  }]);
