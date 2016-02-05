var should = require('should');

describe('Level 1 application:', function () {

  it('Simple example should work fine:', function () {
    var simple = require('../simple.js');

    simple.id.should.be.a.string;
    simple.css.should.be.a.string;
  })
})
