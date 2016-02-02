var CleanCSS = require('clean-css')
var cleanCSS = new CleanCSS()
var UglifyJS = require('uglify-js')

module.exports = function (css, hash) {
  var code

  css = cleanCSS.minify(css).styles

  return {id: hash, css: css}
}
