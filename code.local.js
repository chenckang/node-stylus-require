module.exports = (function () {
  var css = "${css}"
  var md5 = "${MD5}"
  if (typeof document === 'object') {
    function appendStyle() {
      var style = document.getElementById(md5 + '-style')

      if (style) {
        style.removeAttribute('data-reactid')
        if (style.parentNode !== document.head) {
          document.head.appendChild(style)
        }
        return
      }

      var noScriptDOM = document.getElementById(md5)
      var styleDOM = document.createElement("style")
      styleDOM.id = md5 + '-style'
      styleDOM.setAttribute('data-node', 'node-style')

      if (noScriptDOM) {
        styleDOM.innerHTML = noScriptDOM.innerHTML
      }
      else {
        styleDOM.innerHTML = css
      }

      document.head.appendChild(styleDOM)
    }

    if ("complete" === document.readyState) {
      appendStyle()
    }

    document.addEventListener("DOMContentLoaded", function () {
      appendStyle()
    })
  }
  return {id: md5, css: css}
})
