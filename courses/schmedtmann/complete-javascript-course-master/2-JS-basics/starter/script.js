/****************************** 
Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


// Variable naming rules
// $ or _ are only non-alpha characters allowed to start variable names:
var $3years = 3;
var _3years = 3;
*/

/******************************
 * Variable mutation and type coercion
 */
/*
 var firstName = 'John';
 var age = 28;

//  Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'teacher';
//  isMarried = false;

// commented out isMarried will throw an undefined that is then coerced into a string along with other elements:
 console.log(firstName + ' is a ' + age + ' year old ' + job + ', Is he married? ' + isMarried);

//  Variable mutation
age = 'twenty-eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' yeard old ' + job + ', Is he married? ' + isMarried);

// prompt() receives input from user which is then assigned to lastName:
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/******************************
 * Basic operators
 */
/*
 var year, yearJohn, yearMark;
 now = 2018;
 ageJohn = 28;
 ageMark = 33;

//  Math operators
 var yearJohn = now - ageJohn;
 var yearMark = now - ageMark;

 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

//  Logical operators
 var johnOlder = ageJohn > ageMark;
 console.log(johnOlder);

//  typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/******************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
// true:
var isFullAge = now - yearJohn >= fullAge; 
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
// grouping with parentheses has highest order of precedence:
var average = (ageJohn + ageMark) / 2;

// Multiple assignments
var x, y;
// below works because Assignment operator works right to left:
x = y = (3 + 5) * 4 - 6;
// 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x++;
console.log(x);
*/

/******************************
* if / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var heightMark = 1.9;
var massMark = 80;
var heightJohn = 1.8;
var massJohn = 85;

var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

var bmiJohn = massJohn / (heightJohn * heightJohn);

// var bmiMarkHigher = bmiMark > bmiJohn; 
// console.log('Is Mark\'s BMI higher than John\'s? ' + bmiMarkHigher);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/******************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20)  {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/******************************
* Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// lengthier equivalent:
// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}
age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/******************************
* truthy and falsy values and equality operators
*/

// falsy values: undefined, null, 0 '', NaN
// truthy values: NOT falsy values
/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
};
*/

/******************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/******************************
* Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {};

// Function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John')); 
console.log(whatDoYouDo('designer', 'Jane')); 
console.log(whatDoYouDo('retired', 'Mark')); 

// JavaScript expression returns an immediate value; whenever JavaScript expects a value, we have to write a JavaScript exression.

// JavaScript statements (if/else, while loops, function declarations) do not produce immediate values.
*/

/******************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
// names[5] = 'Mary';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

// Array methods

// push adds one or more elements to end of array and returns its new length:
john.push('blue');
// unshift adds one or more elements to beginning of array and returns its new length:
john.unshift('Mr.');
console.log(john);

// pop removes and returns last element in array:
john.pop();
john.pop();
// shift removes and returns first element in array:
john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/******************************
* Objects and properties
*/

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);