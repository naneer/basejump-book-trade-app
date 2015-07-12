'use strict';

describe('Controller: RePintModalCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var RePintModalCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RePintModalCtrl = $controller('RePintModalCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
