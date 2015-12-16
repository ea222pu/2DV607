# Reducer

I'm in the process of moving all the logic of the game from component to the reducer. As of now, it can keep track of the score, and increment an index variable (which will be used to select next question when the user answers). The next problem I'm going to tackle is to figure out a good way to structure the different actions, so that the sequence of a game will be:
 1. Answer question
 2. Update score, increment index
 3. Repeat 1,2 until index = `questionList.length-1`
 4. End game, show score

The application is available [here](http://ea222pu.github.io/2DV607/Quiz).