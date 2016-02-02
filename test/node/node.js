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
  var server
  var fs = require('fs')
  var fetch = require('node-fetch')

  before(function (done) {
    inst.register()
    app.use(inst.styleInterceptor)
    var reactEngine = require('react-engine')

    var engine = reactEngine.server.create({
    })

    app.engine('.jsx', engine)

    app.set('views', path.join(__dirname, '../assets/react/'))

    app.set('view engine', 'jsx')

    app.set('view', require('react-engine/lib/expressView'))

    app.get('/', function (req, res, next) {
      res.render('Sample.jsx')
      next()
    })

    server = app.listen('8888', function () {
      var host = server.address().address
      var port = server.address().port
      console.log("Node server is ready on Http://%s:%s/", host, port)
      done()
    })
  })

  after(function (done) {
    inst.remove()
    server && server.close(function () {
      console.log("Node server is closed!")
      done()
    })
    server || done()
  })

  it('->intercept', function (done) {
    var p = fetch('http://localhost:8888/')
    var stylusFiles = [
      '../assets/react/Sample.styl',
      '../assets/react/Second.styl',
      '../assets/react/Child/Child.styl'
    ];

    p.catch(function (e) {
      e.should.not.be.type('Error')
      done()
    })

    p.then(function (res) {
      return res.text()
    })
    .then(function (body) {
      var $ = cheerio;
      var $document = $.load(body)

      stylusFiles.forEach(function (item) {
        var itemStyle = require(item)
        var $itemDOM = $document('#' + itemStyle.id)
        $itemDOM.should.be.instanceOf(Object)
        $itemDOM.html().should.be.eql(itemStyle.css)
      });

      done()
    })
  })
})
