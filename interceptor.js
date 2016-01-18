var interceptor = require('express-interceptor')
var cheerio = require('cheerio')

var styleInterceptor = interceptor(function(req, res){
  return {
    // Only HTML responses will be intercepted
    isInterceptable: function(){
      if (!/2\d\d/.test(res.statusCode)) {
        return false
      }

      return /text\/html/.test(res.get('Content-Type'))
    },
    // Appends a paragraph at the end of the response body
    intercept: function(body, send) {
      var $ = cheerio;
      var $document = $.load(body)

      var $nodes = $document('[data-node="node-stylus"]')
      var uniqStyles = {}
      var $styles = $nodes.each(function(idx, elm) {
        var css = $(elm).text()

        var style = [
          '<style id=',
          elm.attribs.id + '-style',
          ' ',
          'data-node="node-style"',
          '>',
          css,
          '</style>'
        ].join('')

        uniqStyles[elm.attribs.id] = style
      })

      for (var i in uniqStyles) {
        if (uniqStyles.hasOwnProperty(i)) {
          $document('head').append(uniqStyles[i])
        }
      }

      send($document.html())
    }
  }
})

module.exports = styleInterceptor
