var React = require('react'),
    Jumbotron = require('react-bootstrap').Jumbotron,
    Button = require('react-bootstrap').Button,
    ButtonGroup = require('react-bootstrap').ButtonGroup;

var Question = React.createClass({
    userAnswer: function(userAnswer) {
        this.props.isCorrect(userAnswer);
    },
    render: function() {
        return (
            <div className="question">
                <Jumbotron>
                    <h3>{this.props.question.question}</h3>
                </Jumbotron>
                <ButtonGroup justified>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.userAnswer.bind(null, 1)}>{this.props.question.altOne}</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.userAnswer.bind(null, 2)}>{this.props.question.altTwo}</Button>
                    </ButtonGroup>
                </ButtonGroup>
                <ButtonGroup justified>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.userAnswer.bind(null, 3)}>{this.props.question.altThree}</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button bsSize="large" onClick={this.userAnswer.bind(null, 4)}>{this.props.question.altFour}</Button>
                    </ButtonGroup>
                </ButtonGroup>
            </div>
        );
    }
});

module.exports = Question;