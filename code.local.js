module.exports = (function () {
  var css = "${css}"
  var md5 = "${MD5}"
  if (typeof document === 'object') {
    function appendStyle() {
      var style = document.getElementById(md5)

      if (style) {
        if (style.parentNode !== document.head) {
          document.head.appendChild(style)
        }
        return
      }

      var styleDOM = document.createElement("style")
      styleDOM.innerHTML = css
      styleDOM.id = md5
      styleDOM.setAttribute('data-node', 'node-stylus')
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
