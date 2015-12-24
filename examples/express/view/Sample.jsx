import React from 'react'
import Style from 'node-stylus-require/Style.jsx'
import SampleCSS from './Sample.styl'

class Sample extends React.Component {
  render() {
    return (
      <div>
        <span className="Sample">Hello, World! From Express Demo.</span>
        <Style style={SampleCSS}></Style>
      </div>
    );
  }
}

export default Sample;
