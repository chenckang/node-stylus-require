var compress = require('./compress.js')
var md5 = require('md5')
var stylus = require('stylus')
var path = require('path')
var fs = require('fs')

module.exports = function (stylusCode) {
  this.cacheable && this.cacheable()

  var callback = this.async()
  var filePath = this.resourcePath

  var hash = md5(filePath.toLowerCase())

  stylus.render(stylusCode, function (err, css) {
    if (err) { callback(err) }

    var com = compress(css, hash)

    callback(null, "module.exports=" + JSON.stringify(com))
  })
}
