var React = require('react'),
    JSON_QUESTIONS = require('../../assets/questions/questions.json'),
    Question = require('./question.js'),
    Finished = require('./finished.js');

var GAME_STATES = {
    QUESTION: 1,
    FINISHED: 2
};

var Quiz = React.createClass({
    getInitialState: function() {
        return {
            currentState: GAME_STATES.QUESTION,
            questionIndex: 0,
            currentQuestion: JSON_QUESTIONS.scifi[0].question,
            currentAnswer: JSON_QUESTIONS.scifi[0].answer,
            questionList: JSON_QUESTIONS.scifi,
            score: 0
        };
    },
    isCorrect: function(answer) {
        var newScore = this.state.score;
        if(answer == this.state.currentAnswer) {
            newScore++;
        }

        this.setState({
            score: newScore
        });
        this.nextQuestion();
    },
    nextQuestion: function() {
        var newIndex = this.state.questionIndex + 1;
        if(newIndex === this.state.questionList.length) {
            this.setState({
                currentState: GAME_STATES.FINISHED
            });
        }
        else {
            this.setState({
                questionIndex: newIndex,
                currentQuestion: this.state.questionList[newIndex].question,
                currentAnswer: this.state.questionList[newIndex].answer
            });
        }
    },
    render: function() {
        switch(this.state.currentState) {
            case GAME_STATES.QUESTION:
                return <Question isCorrect={this.isCorrect} question={this.state.questionList[this.state.questionIndex]} />
            case GAME_STATES.FINISHED:
                return <Finished score={this.state.score} max={this.state.questionList.length}/>
        }
    }
});

module.exports = Quiz;