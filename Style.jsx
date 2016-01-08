var React = require('react')

var Style = React.createClass({
  render: function () {
    var style = this.props.style()

    // 如果是后端渲染，则返回占位标签
    // 1. 交由express的拦截器处理
    // 2. 浏览器端也处理
    return (
      <noscript id={style.id} data-node="node-stylus" dangerouslySetInnerHTML={{__html:style.css}}>
      </noscript>
    )
  }
})

module.exports = Style