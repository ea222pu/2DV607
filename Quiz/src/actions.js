var constants = require('./constants.js');

module.exports = {

    isCorrect: function(answer) {
        return {
            type: constants.ANSWER,
            answer
        };
    },
    updateScore: function() {
        return {
            type: constants.UPDATE_SCORE
        };
    },
    nextQuestion: function() {
        return {
            type: constants.NEXT_QUESTION
        };
    }

};