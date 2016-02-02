import React from 'react'
import SampleCSS from './Sample.styl'
import SecondCSS from './Second.styl'
import Child from './child/Child.jsx'
import Style from 'node-stylus-require/Style.js'

class Sample extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default Sample;
