var React = require('react');
var SecondCSS = require('../Second.styl'); // Load stylus files repeatedly is okay
var ChildCSS = require('./Child.styl'); // Use `require` other than `import`
var Style = require('node-stylus-require/Style.js');

var Child = React.createClass({
  render: function () {
    return (
      <div ref="child">
        <Style style={ChildCSS}></Style>
        <Style style={SecondCSS}></Style>
        <Style style={ChildCSS}></Style>
        <div className="Child">
          This is Child
        </div>
      </div>
    );
  }
})

module.exports = Child;
