var React = require('react'),
    ReactRedux = require('react-redux'),
    ptypes = React.PropTypes,
    Question = require('./question.js'),
    Finished = require('./finished.js');

var Quiz = React.createClass({
    propTypes: {
        questionIndex: ptypes.number.isRequired,
        questionListLength: ptypes.number.isRequired,
        playerScore: ptypes.number.isRequired
    },
    render: function() {
        if(this.props.questionIndex < this.props.questionListLength) {
            return <Question />
        }
        else {
            return <Finished score={this.props.playerScore} max={this.props.questionListLength} />
        }
    }
});

var mapStateToProps = function(state) {
    return {
        questionIndex: state.quiz.questionIndex,
        questionListLength: state.quiz.questionList.length,
        playerScore: state.player.score
    };
}

module.exports = ReactRedux.connect(mapStateToProps)(Quiz);