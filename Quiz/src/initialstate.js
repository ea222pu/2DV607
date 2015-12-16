var JSON_QUESTIONS = require('../assets/questions/questions.json');

module.exports = function() {
    return {
        player: {
            score: 0
        },
        gameState: {
            playing: false
        },
        quiz: {
            questionIndex: 0,
            questionList: JSON_QUESTIONS.scifi,
            currentQuestion: JSON_QUESTIONS.scifi[0].question,
            one: JSON_QUESTIONS.scifi[0].altOne,
            two: JSON_QUESTIONS.scifi[0].altTwo,
            three: JSON_QUESTIONS.scifi[0].altThree,
            four: JSON_QUESTIONS.scifi[0].altFour,
            answer: JSON_QUESTIONS.scifi[0].answer
        }
    }
};