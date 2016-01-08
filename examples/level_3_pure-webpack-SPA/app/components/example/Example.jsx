import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import DummyStore from '../../stores/DummyStore';
import DummyActions from '../../actions/DummyActions';
import ExampleCSS from './Example.styl';
import Style from 'node-stylus-require/Style.js';

@connectToStores
class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    static getStores(props) {
        return [DummyStore];
    }

    static getPropsFromStores(props) {
        return DummyStore.getState();
    }

    render() {
        return (
            <div id="example">
                <Style style={ExampleCSS}></Style>
                <input type="text" value={this.state.name} onChange={this.onChange}/>
                <h1 className="example-title">It works: {this.props.name}</h1>
            </div>
        );
    }

    onChange = evt => {
        this.setState({name: evt.target.value});
        DummyActions.updateName(evt.target.value);
    }
}

export default Example;