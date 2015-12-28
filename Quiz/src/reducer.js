var actions = require('./actions.js'),
    constants = require('./constants.js'),
    JSON_QUESTIONS = require('../assets/questions/questions.json');

module.exports = function(state, action) {
    var newState = Object.assign({}, state);
    switch(action.type) {
        // Check if answer is correct, update score.
        case constants.QUESTION:
            if(state.quiz.questionList[state.quiz.questionIndex].answer == action.answer) {
                newState.player.score += 1;
            }
            var newIndex = newState.quiz.questionIndex += 1;
            newState.quiz.questionIndex = newIndex;
            return newState;

        case constants.SET_QUIZ:
            newState.quiz.questionIndex = 0;
            newState.player.score = 0;
            if(action.quiz == 1) {
                newState.quiz.questionList = JSON_QUESTIONS.scifi;
            }
            else if(action.quiz == 2) {
                newState.quiz.questionList = JSON_QUESTIONS.other;
            }
            return newState;

        default:
            return state;
    }
};