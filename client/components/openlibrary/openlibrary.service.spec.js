'use strict';

describe('Service: openlibrary', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var openlibrary;
  beforeEach(inject(function (_openlibrary_) {
    openlibrary = _openlibrary_;
  }));

  it('should do something', function () {
    expect(!!openlibrary).toBe(true);
  });

});
