var React = require('react');
var SampleCSS = require('./Sample.styl');
var SecondCSS = require('./Second.styl');
var Child = require('./child/Child.jsx');
var Style = require('../../../Style.js');

var Sample = React.createClass({
  render: function() {
    return (
      <html lang="en">
        <head>
          <title>Document</title>
        </head>
        <body>
          <Style style={SampleCSS}></Style>
          <Style style={SampleCSS}></Style>
          <Style style={SecondCSS}></Style>
          <div>
            <div className="Sample">
              Hello, World!
            </div>
            <div className="Second">
              This is the second section!
            </div>
            <Child></Child>
          </div>
        </body>
      </html>
    );
  }
});

module.exports = Sample;
