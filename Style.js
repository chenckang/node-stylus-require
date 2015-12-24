var React = require('react');

var Style = React.createClass({
  displayName: 'Style',

  render: function () {
    if (typeof STYLUS_LOADER === 'boolean' && STYLUS_LOADER) {
      return null;
    }
    if (typeof this.props.style !== 'function') {
      return null;
    }
    return React.createElement('script', { dangerouslySetInnerHTML: { __html: '(' + this.props.style.toString() + ')()' } });
  }
});

module.exports = Style;
