'use strict';

describe('Controller: RePintModalTradeCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var RePintModalTradeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RePintModalTradeCtrl = $controller('RePintModalTradeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
