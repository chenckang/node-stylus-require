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
      if (err) throw err
      css = cleanCSS.minify(css.replace(/[\r\n\s]/g, '')).styles
      codeStr = codeStr.replace(/\$\{css\}/g, css)
      codeStr = codeStr.replace(/\$\{MD5\}/, srcHash)
      codeStr = UglifyJS.minify(codeStr, {fromString: true}).code;

      module._compile(codeStr)
    })
  }
}

module.exports = {
  register: register
}
