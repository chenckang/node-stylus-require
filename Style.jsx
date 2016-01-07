var React = require('react')

var Style = React.createClass({
  render: function () {
    var style = this.props.style()

    return (
      <style id={style.id} data-node="node-stylus">{style.css}</style>
    )
  }
})

module.exports = Style