'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export viacore-lib', function() {
    var bitcore = require('../');
    should.exist(bitcore.lib);
    should.exist(bitcore.lib.Transaction);
    should.exist(bitcore.lib.Block);
  });
});
