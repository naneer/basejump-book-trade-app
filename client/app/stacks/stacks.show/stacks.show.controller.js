'use strict';

angular.module('workspaceApp')
  .controller('StacksShowCtrl', [ 'myBooks', function (myBooks) {
    var ctrl = this;
    ctrl.books = myBooks;
  }]);
