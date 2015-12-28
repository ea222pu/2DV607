var JSON_QUESTIONS = require('../assets/questions/questions.json'),
    constants = require('./constants.js');

module.exports = function() {
    return {
        player: {
            score: 0
        },
        gameState: {
            GAME_STATE: constants.QUESTION
        },
        quiz: {
            questionList: JSON_QUESTIONS.other,
            questionIndex: 0
        }
    }
};