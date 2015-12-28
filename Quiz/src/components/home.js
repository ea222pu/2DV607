var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    Link = require('react-router').Link,
    actions = require('../actions.js'),
    Button = require('react-bootstrap').Button;

var Home = React.createClass({
    propTypes: {
        selectQuiz: ptypes.func.isRequired
    },
    render: function() {
        return (
            <div>
                <h1>Welcome</h1>
                <Link to="quiz"><Button onClick={this.props.selectQuiz.bind(null, 1)}>Sci-fi Quiz</Button></Link>
                <br />
                <Link to="quiz"><Button onClick={this.props.selectQuiz.bind(null, 2)}>Other Quiz</Button></Link>
            </div>
        );
    }
});

var mapDispatchToProps = function(dispatch) {
    return {
        selectQuiz: function(category) {
            dispatch(actions.setQuiz(category));
        }
    };
};

module.exports = ReactRedux.connect(null, mapDispatchToProps)(Home);