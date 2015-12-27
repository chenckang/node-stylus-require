import React from 'react'
import Style from 'node-stylus-require/Style.jsx'
import SecondCSS from '../Second.styl' // Load stylus files repeatedly is okay
var ChildCSS = require('./Child.styl') // Use `require` other than `import`

class Child extends React.Component {
  render() {
    return (
      <div>
        <div className="Child">
          This is Child
        </div>
        <Style style={ChildCSS}></Style>
        <Style style={SecondCSS}></Style>
      </div>
    );
  }
}

export default Child;
