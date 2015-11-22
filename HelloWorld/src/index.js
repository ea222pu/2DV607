//index.js
var React = require('react'),
    ReactDOM = require('react-dom');

//Multiple components
var Main = React.createClass({
    render: function() {
        return (
            <div>
                <HelloOnKeyDown />
                <HelloOnChange />
            </div>
        );
    }
});

//Press 'enter' to update
var HelloOnKeyDown = React.createClass({
    displayName: "keyDown",
    getInitialState: function() {
        return {
            name: ""
        };
    },
    keyDown: function(event) {
        if(event.keyCode == 13) {
            if(event.target.value) {
                this.setState({name: " " + event.target.value});
            }
            else {
                this.setState(this.getInitialState);
            }
        }
    },
    render: function() {
        return (
            <div>
                <h1>Hello{this.state.name}!</h1>
                <input type="text" placeholder="Enter a name and press 'enter'" onKeyDown={this.keyDown} style={{width: 155}} />
            </div>
        );
    }
});

//Updates as you type
var HelloOnChange = React.createClass({
    displayName: "change",
    getInitialState: function() {
        return {
            name: ""
        };
    },
    onChange: function(event) {
        if(event.target.value) {
            this.setState({name: " " + event.target.value});
        }
        else {
            this.setState(this.getInitialState);
        }
    },
    render: function() {
        return (
            <div>
                <h1>Hello{this.state.name}!</h1>
                <input type="text" placeholder="Enter a name" onChange={this.onChange} />
            </div>
        );
    }
});

//Render components
ReactDOM.render(
    <Main />,
    document.getElementById('greetings')
);