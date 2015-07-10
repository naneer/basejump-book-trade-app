'use strict';

describe('Controller: StacksShowCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var StacksShowCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StacksShowCtrl = $controller('StacksShowCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
