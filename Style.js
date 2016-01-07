var React = require('react')

var Style = React.createClass({
  displayName: "Style",

  render: function () {
    var style = this.props.style()

    return React.createElement(
      "style",
      { id: style.id, "data-node": "node-stylus" },
      style.css
    )
  }
})

module.exports = Style
