var React = require('react');

var Style = React.createClass({
  displayName: 'Style',

  getInitialState: function () {
    return this.props.style();
  },

  appendStyle: function () {
    var style = document.getElementById(this.state.id + '-style');
    if (style) {
      style.removeAttribute('data-reactid');
      style.innerHTML = this.state.css;
      if (style.parentNode !== document.head) {
        document.head.appendChild(style);
      }
      return;
    }

    var styleDOM = document.createElement("style");
    styleDOM.id = this.state.id + '-style';
    styleDOM.setAttribute('data-node', 'node-style');

    styleDOM.innerHTML = this.state.css;

    document.head.appendChild(styleDOM);
  },

  componentDidMount: function () {
    if (typeof document === 'object') {
      this.appendStyle();
    }
  },

  render: function () {
    // 如果是后端渲染，则返回占位标签
    // 1. 交由express的拦截器处理
    // 2. 浏览器端也处理
    return React.createElement('noscript', { id: this.state.id, 'data-node': 'node-stylus',
      dangerouslySetInnerHTML: { __html: this.state.css }
    });
  }
});

module.exports = Style;
