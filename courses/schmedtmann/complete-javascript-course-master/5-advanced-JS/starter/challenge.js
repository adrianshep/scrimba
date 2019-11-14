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
}

var asteroid = new Question('Question 1 - If you stand on an asteroid and look out, the next asteroid will on average be: ', ['1 - about to crash into the one you are on.', '2 - a faint glimmer of light way, way off in the far, far distance.', '3 - 600,000 miles away, so invisible to your naked eye.'], 3);

var jupiter = new Question('Question 2 - A special kind of rain falls on Jupiter made of: ', ['1 - single cell organisms', '2 - diamonds', '3 - marshmallow hearts, moons, stars and clovers '], 2);

var neptune = new Question('Question 3 - Neptune has a distinctive vivid blue color given it by atmospheric: ', ['1 - ice', '2 - methane', '3 - blueberry Slurpee mix'], 2);

var questions = [asteroid, jupiter, neptune];

Question.prototype.questionSelect = function() {
    var random = Math.floor(Math.random() * questions.length);
    console.log(questions[random].question);
    console.log(questions[random].answers[0]);
    console.log(questions[random].answers[1]);
    console.log(questions[random].answers[2]);
};

asteroid.questionSelect();

/*
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

john.calculateAge();

*/