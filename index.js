"use strict";

var stylus = require('stylus')
var fs = require('fs')
var path = require('path')
var UglifyJS = require('uglify-js')
var CleanCSS = require('clean-css')
var md5 = require('md5')
var cleanCSS = new CleanCSS()

var codeStr = fs.readFileSync(path.join(__dirname, 'code.local'), {
      encoding: 'utf8'
    })

function appendStyle(css) {
  var styleDOM = document.createElement('style');
  styleDOM.innerHTML = css;
  document.head.appendChild(styleDOM);
}

function register(options) {
  options = options || {}

  require.extensions[options.extension || '.styl'] = function (module, filename) {
    var src = fs.readFileSync(filename, {
      encoding: 'utf8'
    })

    var srcHash = md5(src)

    stylus.render(src, {filename: filename}, function (err, css) {
      if (err) { throw err }
      var code;
      css = cleanCSS.minify(css).styles
      code = codeStr.replace(/\$\{css\}/g, css)
      code = code.replace(/\$\{MD5\}/, srcHash)
      code = UglifyJS.minify(code, {fromString: true}).code;

      module._compile(code)
    })
  }
}

module.exports = {
  register: register
}
