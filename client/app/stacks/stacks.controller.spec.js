'use strict';

describe('Controller: StacksCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var StacksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StacksCtrl = $controller('StacksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
