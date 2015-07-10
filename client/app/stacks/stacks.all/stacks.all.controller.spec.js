'use strict';

describe('Controller: StacksAllCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var StacksAllCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StacksAllCtrl = $controller('StacksAllCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
