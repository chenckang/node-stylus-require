var should = require('should')
var cheerio = require('cheerio')
var path = require('path')

describe('node', function () {
  var inst = require('../../index.js')

  after(function () {
    inst.remove()
  })

  it('->register', function () {
    inst.register()

    var style = require('../assets/simple.styl')

    style.should.have.property('id').which.is.a.String()
    style.should.have.property('css').which.is.a.String()
  })

  it('->remove', function () {
    inst.remove();

    (function removeException() {
        require('../assets/simple-cp.styl')
    }).should.throw(SyntaxError)

  })

})

describe('express', function () {
  require('babel-register')

  var express = require('express')
  var inst = require('../../index.js')
  var app = express()
  var fs = require('fs')
  var expect = require('unexpected')
    .clone()
    .installPlugin(require('unexpected-express'));

  before(function () {
    inst.register()
    app.use(inst.styleInterceptor)
    var reactEngine = require('react-engine')

    var engine = reactEngine.server.create({
    })

    app.engine('.jsx', engine)

    app.set('views', path.join(__dirname, '../assets/react/'))

    app.set('view engine', 'jsx')

    app.set('view', require('react-engine/lib/expressView'))

    app.get('/', function (req, res) {
      res.render('Sample.jsx')
    })

  })

  after(function () {
    inst.remove()
  })

  it('->intercept', function () {
    var stylusFiles = [
      '../assets/react/Sample.styl',
      '../assets/react/Second.styl',
      '../assets/react/child/Child.styl'
    ];

    return expect(app, 'to yield exchange', {
      request: {
        url: '/'
      }
    }).then(function (context) {
      var $ = cheerio;
      var $document = $.load(context.httpResponse.body)

      stylusFiles.forEach(function (item) {
        var itemStyle = require(item)
        var $itemDOM = $document('#' + itemStyle.id)
        $itemDOM.should.be.instanceOf(Object)
        $itemDOM.html().should.be.eql(itemStyle.css)
      });
    })

  })
})
