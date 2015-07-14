'use strict';

angular.module('workspaceApp')
  .controller('StacksAllCtrl', [ 'stack', 'Book', function (stack, Book) {
    var ctrl = this;
    ctrl.books = stack;

  }]);
