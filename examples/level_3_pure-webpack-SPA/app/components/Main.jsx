import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Style from 'node-stylus-require/Style.js';
import MainCSS from './Main.styl';

class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <h1>Example</h1>
                <Link ref="exampleBtn" id="exampleBtn" to="example">Go to example</Link>
                {this.props.children}
                <Style style={MainCSS}></Style>
            </div>
        );
    }
}

export default Main;