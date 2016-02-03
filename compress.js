var CleanCSS = require('clean-css')
var cleanCSS = new CleanCSS()

module.exports = function (css, hash) {
  var code

  css = cleanCSS.minify(css).styles

  return {id: hash, css: css}
}
