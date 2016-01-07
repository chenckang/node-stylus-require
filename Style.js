var React = require('react');

var Style = React.createClass({
  displayName: 'Style',

  render: function () {
    var style = this.props.style();

    // 如果当前是前端渲染，则上面的style()调用已经完胜style的标签追加
    if (typeof document === 'object') {
      var styleDOM = document.getElementById(style.id);
      if (styleDOM) {
        return null;
      }
    }

    // 如果是后端渲染，则返回占位标签，交由express的拦截器处理
    return React.createElement(
      'style',
      { id: style.id, 'data-node': 'node-stylus' },
      style.css
    );
  }
});

module.exports = Style;
