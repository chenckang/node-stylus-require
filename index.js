"use strict";

var stylus = require('stylus')
var fs = require('fs')
var path = require('path')

var md5 = require('md5')

var compress = require('./compress.js')

var codeStr = fs.readFileSync(path.join(__dirname, 'code.local.js'), {
    encoding: 'utf8'
  })

function register(options) {
  options = options || {}

  require.extensions[options.extension || '.styl'] = function (module, filename) {
    var src = fs.readFileSync(filename, {
      encoding: 'utf8'
    })

    var hash = md5(src)

    stylus.render(src, {filename: filename}, function (err, css) {
      if (err) { throw err }

      module._compile(compress(css, codeStr, hash))
    })
  }
}

module.exports = {
  register: register
}
