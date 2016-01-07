var interceptor = require('express-interceptor')
var cheerio = require('cheerio')

var styleInterceptor = interceptor(function(req, res){
  return {
    // Only HTML responses will be intercepted
    isInterceptable: function(){
      return /text\/html/.test(res.get('Content-Type'))
    },
    // Appends a paragraph at the end of the response body
    intercept: function(body, send) {
      var $document = cheerio.load(body)

      var $nodes = $document('[data-node="node-stylus"]').remove()
      var uniqStyles = {}
      var $styles = $nodes.each(function(idx, elm) {
        uniqStyles[elm.attribs.id] = elm
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
