var CleanCSS = require('clean-css')
var cleanCSS = new CleanCSS()
var UglifyJS = require('uglify-js')

module.exports = function (css, codeStr, hash) {
  var code

  css = cleanCSS.minify(css).styles
  code = codeStr.replace(/\$\{css\}/g, css)
  code = code.replace(/\$\{MD5\}/, hash)
  code = UglifyJS.minify(code, {fromString: true}).code

  return code
}
