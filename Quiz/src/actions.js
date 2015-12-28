var constants = require('./constants.js');

module.exports = {

    isCorrect: function(answer) {
        return {
            type: constants.QUESTION,
            answer
        };
    },
    setQuiz: function(quiz) {
        return {
            type: constants.SET_QUIZ,
            quiz
        };
    }

};