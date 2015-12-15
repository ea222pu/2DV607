var actions = require('./actions.js'),
    initState = require('./initialstate.js');

module.exports = function(state, action) {
    var newState = Object.assign({}, state);
    switch(action.type) {
        case "IS_CORRECT":
            if(action.answer === newState.quiz.currentAnswer) {
                newState.quiz.correctAnswers += 1;
            }
            newState.quiz.questionIndex += 1;
            newState.quiz.currentQuestion = newState.quiz.questionList[newState.quiz.questionIndex];
            return newState;

    }
};