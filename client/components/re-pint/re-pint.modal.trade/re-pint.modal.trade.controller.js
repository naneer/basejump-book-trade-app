'use strict';

angular.module('workspaceApp')
  .controller('RePintModalTradeCtrl', [ 'myBooks', function (myBooks) {
    var tradectrl = this;
    tradectrl.mybooks = myBooks;
  }]);
