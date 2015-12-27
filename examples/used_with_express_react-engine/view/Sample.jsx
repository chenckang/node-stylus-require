import React from 'react'
import Style from 'node-stylus-require/Style.jsx'
import SampleCSS from './Sample.styl'
import SecondCSS from './Second.styl'
import Child from './child/Child.jsx'

class Sample extends React.Component {
  render() {
    return (
      <div>
        <div className="Sample">
          Hello, World!
        </div>
        <div className="Second">
          This is the second section!
        </div>
        <Child></Child>
        <Style style={SampleCSS}></Style>
        <Style style={SecondCSS}></Style>
      </div>
    );
  }
}

export default Sample;
