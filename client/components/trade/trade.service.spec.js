'use strict';

describe('Service: trade', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var trade;
  beforeEach(inject(function (_trade_) {
    trade = _trade_;
  }));

  it('should do something', function () {
    expect(!!trade).toBe(true);
  });

});
