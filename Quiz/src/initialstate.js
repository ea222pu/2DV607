var JSON_QUESTIONS = require('../assets/questions/questions.json');

module.exports = function() {
    return {
        quiz: {
            currentState: constants.QUESTION,
            questionIndex: 0,
            currentQuestion: null,
            currentAnswer: null,
            questionList: JSON_QUESTIONS.scifi,
            correctAnswers: 0,
            isAnswerCorrect: null
        }
    }
};