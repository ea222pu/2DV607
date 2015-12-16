var actions = require('./actions.js'),
    constants = require('./constants.js');

module.exports = function(state, action) {
    var newState = Object.assign({}, state);
    switch(action.type) {
        case constants.ANSWER:
            if(state.quiz.answer == action.answer) {
                newState.player.score += 1;
            }
            var newIndex = newState.quiz.questionIndex += 1;
            console.log("index: " + newIndex);
            console.log("score: " + newState.player.score);
            return newState;
        default:
            return state;
    }
};