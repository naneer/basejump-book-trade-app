'use strict';

describe('Directive: rePint', function () {

  // load the directive's module and view
  beforeEach(module('workspaceApp'));
  beforeEach(module('components/re-pint/re-pint.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<re-pint></re-pint>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the rePint directive');
  }));
});