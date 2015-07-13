'use strict';

angular.module('workspaceApp')
  .controller('StacksAllCtrl', [ 'stack', function (stack) {
    var ctrl = this;
    ctrl.books = stack;
  }]);
