"use strict";

var stylus = require('stylus')
var fs = require('fs')
var path = require('path')

var md5 = require('md5')

var compress = require('./compress.js')
var styleInterceptor = require('./interceptor')

function register(options) {
  options = options || {}

  require.extensions[options.extension || '.styl'] = function (module, filename) {
    var src = fs.readFileSync(filename, {
      encoding: 'utf8'
    })

    var filePath = path.resolve(filename)

    var hash = md5(filePath.toLowerCase())

    stylus.render(src, {filename: filename}, function (err, css) {
      if (err) { throw err }

      var sty = compress(css, hash)

      module._compile('module.exports=' + JSON.stringify(sty))
    })
  }
}

function remove(options) {
  options = options || {}
  delete require.extensions[options.extensions || '.styl']
}

module.exports = {
  register: register,
  install: register,
  remove: remove,
  styleInterceptor: styleInterceptor
}
