
'use strict';

var React = require('react');

module.exports = React.createClass({

  render: function render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});