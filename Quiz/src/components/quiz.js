var React = require('react'),
    ReactRedux = require('react-redux'),
    PropTypes = React.PropTypes,
    Question = require('./question.js'),
    Finished = require('./finished.js');

var Quiz = React.createClass({
    render: function() {
        return (
            <Question />
        )
    }
});

module.exports = Quiz;