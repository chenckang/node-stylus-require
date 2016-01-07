import React from 'react';
import {RouteHandler, Link} from 'react-router';
import Style from 'node-stylus-require/Style.js';
import MainCSS from './Main.styl';

class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <Style style={MainCSS}></Style>
                <h1>Example</h1>
                <Link to="example">Go to example</Link>
                <RouteHandler></RouteHandler>
            </div>
        );
    }
}

export default Main;