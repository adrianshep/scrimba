////////////////////////////////////
// SECTION 5 CODING CHALLENGE

/*
--- Beginner level ---
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).


*/

var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
};

var asteroid = new Question('Question 1 - If you stand on an asteroid and look out, the next asteroid will on average be: ', ['1 - about to crash into the one you are on.', '2 - a faint glimmer of light way, way off in the far, far distance.', '3 - 600,000 miles away, so invisible to your naked eye.'], 3);

var jupiter = new Question('Question 2 - A special kind of rain falls on Jupiter made of: ', ['1 - single cell organisms', '2 - diamonds', '3 - marshmallow hearts, moons, stars and clovers '], 2);

var neptune = new Question('Question 3 - Neptune has a distinctive vivid blue color given it by atmospheric: ', ['1 - ice', '2 - methane', '3 - blueberry Slurpee mix'], 2);

var questions = [asteroid, jupiter, neptune];

var score = 0;

var next = function() {
    random = Math.floor(Math.random() * questions.length);
    console.log(questions[random].question);
    console.log(questions[random].answers[0]);
    console.log(questions[random].answers[1]);
    console.log(questions[random].answers[2]);
    var user = prompt("Please enter the number of the correct answer here, or, if you wish to quit the game, enter the word 'exit': ");
    if (user == 'exit') {
        console.log("Game over, man!");
        console.log("Your total score: " + score);
    } else if (user == questions[random].correct) {
        score = score + 1;
        console.log("You are correct!", "user's answer: ", user, "correct answer:", questions[random].correct);
        console.log("Your total score: " + score);
        next();
    } else {
        console.log("Sorry, that ain't it!", "user's answer:", user, ", correct answer:", questions[random].correct);
        console.log("Your total score: " + score);
        next();
        }
}

Question.prototype.questionSelect = (function() {
    random = Math.floor(Math.random() * questions.length);
    console.log(questions[random].question);
    console.log(questions[random].answers[0]);
    console.log(questions[random].answers[1]);
    console.log(questions[random].answers[2]);
    var user = prompt("Please enter the number of the correct answer here, or, if you wish to quit the game, enter the word 'exit': ");
})();

Question.prototype.answerPrompt = (function() { if (user == 'exit') {
        console.log("Game over, man!");
        console.log("Your total score: " + score);
    } else if (user == questions[random].correct) {
        score = score + 1;
        console.log("You are correct!", "user's answer: ", user, "correct answer:", questions[random].correct);
        console.log("Your total score: " + score);
    } else {
        console.log("Sorry, that ain't it!", "user's answer:", user, ", correct answer:", questions[random].correct);
        console.log("Your total score: " + score);
        }
    next();
})();

// asteroid.questionSelect();
// asteroid.answerPrompt();

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/
