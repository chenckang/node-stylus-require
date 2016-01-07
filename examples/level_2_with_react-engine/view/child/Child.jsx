import React from 'react'
import SecondCSS from '../Second.styl' // Load stylus files repeatedly is okay
var ChildCSS = require('./Child.styl') // Use `require` other than `import`

import Style from 'node-stylus-require/Style.jsx'

class Child extends React.Component {

  render() {
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
}

export default Child;
