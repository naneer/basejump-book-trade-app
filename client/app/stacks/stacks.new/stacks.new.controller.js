'use strict';

angular.module('workspaceApp')
  .controller('StacksNewCtrl', [ 'OpenLibrary', function (OpenLibrary) {
    var ctrl = this;
    ctrl.ol_find = function(){
      var promise = OpenLibrary.get({ q: ctrl.query }).$promise;
      promise.then(function(response){
        ctrl.data = response;
        ctrl.books = response.docs.filter(function(book){
          return book.hasOwnProperty("cover");
        })
      });
    }
  }]);
