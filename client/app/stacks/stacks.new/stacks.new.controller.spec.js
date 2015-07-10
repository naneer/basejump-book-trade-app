'use strict';

describe('Controller: StacksNewCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var StacksNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StacksNewCtrl = $controller('StacksNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
