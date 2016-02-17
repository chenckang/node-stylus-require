var should = require('should');
var cheerio = require('cheerio');

describe('Level 4 application node:', function () {
  var app;
  var expect = require('unexpected')
    .clone()
    .installPlugin(require('unexpected-express'));

  it('Server could be started:', function () {
    should.doesNotThrow(function () {
      require('../start.js');
    })
  });

  before(function () {
    require('../index.js');
    app = require('../app.js');
  });

  it('Server list page should work correctly: ', function () {
    var stylusFiles = [
      '../public/views/list/List.styl'
    ];

    return expect(app, 'to yield exchange', {
      request: {
        url: '/'
      }
    }).then(function (context) {
      var $ = cheerio;
      var $document = $.load(context.httpResponse.body);

      stylusFiles.forEach(function (item) {
        var itemStyle = require(item);
        var $itemDOM = $document('#' + itemStyle.id);
        $itemDOM.should.be.instanceOf(Object);
        $itemDOM.html().should.be.eql(itemStyle.css);
      });
    });
  });

  it('Server detail page should work correctly: ', function () {
    var stylusFiles = [
      '../public/views/detail/Detail.styl'
    ];

    return expect(app, 'to yield exchange', {
      request: {
        url: '/movie/1'
      }
    }).then(function (context) {
      var $ = cheerio;
      var $document = $.load(context.httpResponse.body);

      stylusFiles.forEach(function (item) {
        var itemStyle = require(item);
        var $itemDOM = $document('#' + itemStyle.id);
        $itemDOM.should.be.instanceOf(Object);
        $itemDOM.html().should.be.eql(itemStyle.css);
      });
    });
  });

});
