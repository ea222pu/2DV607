var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions.js'),

    Jumbotron = require('react-bootstrap').Jumbotron,
    Button = require('react-bootstrap').Button,
    ButtonGroup = require('react-bootstrap').ButtonGroup;

var Question = React.createClass({
    propTypes: {
        currentQuestion: ptypes.shape({
             question: ptypes.string.isRequired,
             altOne: ptypes.string.isRequired,
             altTwo: ptypes.string.isRequired,
             altThree: ptypes.string.isRequired,
             altFour: ptypes.string.isRequired,
             answer: ptypes.string.isRequired
        }),
        isCorrect: ptypes.func.isRequired
    },
    render: function() {
        return (
            <div className="question">
                <Jumbotron>
                    <h3>{this.props.currentQuestion.question}</h3>
                </Jumbotron>
                <ButtonGroup justified>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.props.isCorrect.bind(null, 1)}>{this.props.currentQuestion.altOne}</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.props.isCorrect.bind(null, 2)}>{this.props.currentQuestion.altTwo}</Button>
                    </ButtonGroup>
                </ButtonGroup>
                <ButtonGroup justified>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.props.isCorrect.bind(null, 3)}>{this.props.currentQuestion.altThree}</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.props.isCorrect.bind(null, 4)}>{this.props.currentQuestion.altFour}</Button>
                    </ButtonGroup>
                </ButtonGroup>
            </div>
        );
    }
});

var mapStateToProps = function(state) {
    return {
        currentQuestion: {
            question: state.quiz.questionList[state.quiz.questionIndex].question,
            altOne: state.quiz.questionList[state.quiz.questionIndex].altOne,
            altTwo: state.quiz.questionList[state.quiz.questionIndex].altTwo,
            altThree: state.quiz.questionList[state.quiz.questionIndex].altThree,
            altFour: state.quiz.questionList[state.quiz.questionIndex].altFour,
            answer: state.quiz.questionList[state.quiz.questionIndex].answer,
        },
    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        isCorrect: function(answer) {
            dispatch(actions.isCorrect(answer));
        }
    };
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Question);