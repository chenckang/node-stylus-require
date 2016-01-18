var compress = require('./compress.js')
var md5 = require('md5')
var stylus = require('stylus')
var path = require('path')
var fs = require('fs')

var codeStr = fs.readFileSync(path.join(__dirname, 'code.local.js'), {
    encoding: 'utf8'
  })

module.exports = function (stylusCode) {
  this.cacheable && this.cacheable()

  var callback = this.async()

  var hash = md5(this.resourcePath)

  stylus.render(stylusCode, function (err, css) {
    if (err) { callback(err) }

    callback(null, compress(css, codeStr, hash))
  })
}
