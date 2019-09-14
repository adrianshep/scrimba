var heightMark = 1.9;
var massMark = 80;
var heightJohn = 1.8;
var massJohn = 85;

var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

var bmiMarkHigher = bmiMark > bmiJohn; 
console.log(bmiMarkHigher);