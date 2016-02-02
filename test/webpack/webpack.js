var should = require('should')

describe('webpack', function () {

  it('->node-stylus-loader', function () {
    var simple = require('../assets/simple.styl')

    should(simple.id).be.a.String()
    should(simple.css).be.a.String()
  })
})

