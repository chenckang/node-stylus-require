require('node-require-jsx').install()

var path = require('path');
var should = require('should');
var cheerio = require('cheerio');

describe('Level 2 application: ', function () {

  var express = require('express')
  var inst = require('node-stylus-require')
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

    app.set('views', path.join(__dirname, '../view/'))

    app.set('view engine', 'jsx')

    app.set('view', require('react-engine/lib/expressView'))

    app.get('/', function (req, res) {
      res.render('Sample.jsx')
    })

  })

  after(function () {
    inst.remove()
  })

  it('The interceptor should work properly: ', function () {
    var stylusFiles = [
      '../view/Sample.styl',
      '../view/Second.styl',
      '../view/child/Child.styl'
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
