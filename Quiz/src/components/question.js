var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions.js'),

    Jumbotron = require('react-bootstrap').Jumbotron,
    Button = require('react-bootstrap').Button,
    ButtonGroup = require('react-bootstrap').ButtonGroup;

var Question = React.createClass({
    propTypes: {
        question: ptypes.string.isRequired,
        answerAlternative: ptypes.shape({
            altOne: ptypes.string.isRequired,
            altTwo: ptypes.string.isRequired,
            altThree: ptypes.string.isRequired,
            altFour: ptypes.string.isRequired
        }).isRequired,
        answer: ptypes.string.isRequired,
        isCorrect: ptypes.func.isRequired,
        updateScore: ptypes.func.isRequired,
        nextQuestion: ptypes.func.isRequired
    },
    render: function() {
        return (
            <div className="question">
                <Jumbotron>
                    <h3>{this.props.question}</h3>
                </Jumbotron>
                <ButtonGroup justified>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.props.isCorrect.bind(null, 1)}>{this.props.answerAlternative.altOne}</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.props.isCorrect.bind(null, 2)}>{this.props.answerAlternative.altTwo}</Button>
                    </ButtonGroup>
                </ButtonGroup>
                <ButtonGroup justified>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.props.isCorrect.bind(null, 3)}>{this.props.answerAlternative.altThree}</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.props.isCorrect.bind(null, 4)}>{this.props.answerAlternative.altFour}</Button>
                    </ButtonGroup>
                </ButtonGroup>
            </div>
        );
    }
});

var mapStateToProps = function(state) {
    return {
        question: state.quiz.currentQuestion,
        answerAlternative: {
            altOne: state.quiz.one,
            altTwo: state.quiz.two,
            altThree: state.quiz.three,
            altFour: state.quiz.four
        },
        answer: state.quiz.answer
    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        isCorrect: function(answer) {
            dispatch(actions.isCorrect(answer));
        },
        updateScore: function() {
            dispatch(actions.updateScore());
        },
        nextQuestion: function() {
            dispatch(actions.nextQuestion());
        }
    };
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Question);