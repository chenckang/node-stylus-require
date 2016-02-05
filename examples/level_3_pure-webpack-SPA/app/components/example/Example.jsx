import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import DummyStore from '../../stores/DummyStore';
import DummyActions from '../../actions/DummyActions';
import ExampleCSS from './Example.styl';
import Style from 'node-stylus-require/Style.js';
import ReactDOM from 'react-dom';

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
                <input id="input" ref="input" type="text" defaultValue={this.state.name}/>
                <h1 id="output" className="example-title">It works: <span id="outputText">{this.props.name}</span></h1>
            </div>
        );
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.input).addEventListener('change', this.onChange);
    }

    componentWillUnMount() {
        ReactDOM.findDOMNode(this.refs.input).removeEventListener('change', this.onChange);
    }

    onChange = (evt) => {
        this.setState({name: evt.target.value});
        DummyActions.updateName(evt.target.value);
    }
}

export default Example;