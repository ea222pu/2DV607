module.exports = {

    isCorrect: function(answer) {
        return {type: "IS_CORRECT", answer};
    },
    nextQuestion: function() {
        return {type: "NEXT_QUESTION"};
    }

};