var React = require('react');

var Style = React.createClass({
  render: function () {
    if (typeof STYLUS_LOADER === 'boolean' && STYLUS_LOADER) {
      return null;
    }
    if (typeof this.props.style !== 'function') {
      return null;
    }
    return (
      <script dangerouslySetInnerHTML={
        {__html: '('+ this.props.style.toString() + ')()'}
      }>
      </script>
    );
  }
});

module.exports = Style;
