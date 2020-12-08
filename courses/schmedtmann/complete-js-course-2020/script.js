// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// ASSIGNMENTS

// Values and Variables

let country = 'United States of America';
let continent = 'North America';
let population = 330;

console.log(country);
console.log(continent);
console.log(population);

// Data Types

let isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// let, const and var
language = 'English';
const isIsland;
const language;

// Basic Operators
//  population of each half of the country:
let half = population/2;
console.log(population + 1)
population > 6;
population < 33;
let description = country + ' is in ' + continent + ', ' + 'and its ' + population + ' million people speak ' + language;

//  Strings and Template Literals
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}`

// Taking Decisions: if / else statements

if (population > 33) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`)
}

// Lesson: Type Conversion and Type Coercion

// Type Conversion

const inputYear = '1991';
console.log(input + 18);
// returns 199118 -- concatenates the two strings
console.log(Number(inputYear));
// will return string as a number
// inputYear value is still a string, though; it isn't converted
console.log(Number(inputYear) + 18);
// will return 2009, 1991 + 18

console.log(String(23), 23);
// returns 23 as a string and 23 as a number

// Type Coercion
// happens whenever an operator is dealing with values of two different types; JS will behind the scenes convert one of the values so the operation can be executed

console.log('I am ' + 23 + ' years old.')
// returns entirely as a string

console.log('23' - '10' - 3);
// returns number 10
// minus operator converts strings to numbers as opposed to plus operator converting numbers to strings

// all below convert strings to numbers
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
// returns '11' (string)
n = n - 1;
// minus operator converts '11' to 11
console.log(n);
// result is 10

2 + 3 + 4 + '5'
// '95'
'10' - '4' - '3' - 2 + '5'
// '15' 

// Assignment
// Type Conversion and Coercion
'9' - '5'
// 4
'19' - '13' + '17';
// '617'
'19' - '13' + 17;
// 23
'123' < 57;
// false
5 + 6 + '4' + 9 - 4 - 2;
// 1143

//  Lesson: Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, Nan
// become false when converted to a boolean

console.log(Boolean(0)); 
// false
console.log(Boolean(undefined));
// false
console.log(Boolean('Jonas'));
// true
console.log(Boolean({}));
// true
console.log('');
// false

// conversion happens when using:
// 1. logical operators
// 2. condition of an if/else statement

// in if/else statement
const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!")
}
// JS will try to convert money in condition into a boolean
// if money is 0, then condition is falsy
// if money is 100, then condition is truthy

// checking if variable is defined or not (does it exist or not)
let height;
if (height) {
    console.log('Yay! Height is defined!');
} else {
    console.log('Height is UNDEFINED');
}
// let height; is undefined
// let height = value; is defined
// unless let height = 0; will be undefined
// can fix the height = 0 problem using logical operators

// Lesson: Equality Operators:
//  == vs. ===

const age = 18;
if (age === 18) console.log('You just became an adult :D');
// single line of code means you can omit {}

18 === 18
// true
18 === 19
// false

// === is strict equality operator; does NOT do type coercion
// == is loose equality operator; does type coercion

'18' == 18
// true
'18' === 18
// false

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');
// BEST PRACTICE: always default to strict triple equality operator
// if you need type coercion, always better to do it manually before the comparison than rely on loose double equality operator

const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);
// prompt returns a string, not a number

if (favorite == 23) {
    console.log('Cool! 23 is an amazing number!');
// loose equality operator will allow string '23' to convert to number 23

const favorite = Number(prompt("What's your favorite number?"));

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else if (favorite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 23 nor 7 nor 9');
}

// Inequality Operators

if (favorite !== 23) console.log('Why not 23?');
// !== is strick inequality operator; make sure to use it instead of loose != 

// Assignment: Equality Operators
// loose
let numNeighbors = prompt('How many neighbor countries does your country have?');
if (numNeighbors == 1) {
    console.log('Only 1 border!');
} else if (numNeighbors > 1) {
    console.log('More than 1 border.');
} else {
    console.log('No borders.');
}

// strict
let numNeighbors = prompt('How many neighbor countries does your country have?');
if (numNeighbors === 1) {
    console.log('Only 1 border!');
} else if (numNeighbors > 1) {
    console.log('More than 1 border.');
} else {
    console.log('No borders.');
}

// Lesson: Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
// true

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
// false

console.log(hasDriversLicense || hasGoodVision);
// true

console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
// true
console.log(hasDriversLicense && hasGoodVision && isTired);
// true

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
// false

// Lesson: The Switch Statement

const day = 'monday';

switch(day) {
    case 'monday':
        // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

// without break command, code continues executing until next break command

// switch statement in if/else statements

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

// Assignment
// Switch Statement

const language = 'spanish';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// Lesson: Statements and Expressions

// Expression:
// a piece of code that produces a value
//  3 + 4 is an expression
// 1991 is, too
// true && false && !false

// Statement:
// a bigger piece of code that is executed that does not produce a value in itself
// this is a statement and it doesn't produce a value
if (23 > 10) {
    const str = '23 is bigger';
}
// '23 is bigger' is an expression; anything that ends in a semicolon is a statement

// in a template literal you can only insert an expression, not a statement
console.log(`I'm ${2037-1991} years old`);

// Lesson: Conditional or Ternary Operator
// ternary because it has three parts:
// condition, if, else

const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')
// if age is >= to 18, 

// an operator always produces a value
// in other words, an operators is always an expression

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// ternary in if/else terms
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

// Assignment: Ternary Operator

/* 
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let population = 330;
const country = "America";
const myCountryPopulation = population > 33 ? 'above' : 'below';
console.log(`${country}'s population is ${population} average`);

// Jonas's solution:
console.log(
    `${country}'s population is ${population > 33 ? 'above' :
    'below'} average`);

// Lesson: Functions

function logger() {
    console.log('My name is Ado');
}

// calling / running / invokine the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Lesson: Function Declarations vs Expressions

// function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
// the parameter is the placeholder for the argument in the function; the argument itself is the actual value invoked for use in the function
const age1 = calcAge1(1991);
console.log(age1);

// function expression
// expression is unnamed and lies to the right of the assignment operator
// in JS, functions are also values, and can therefore be stored in the variable
const calcAge2 = function( birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// a function declaration can be called in code before they're defined
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// function expression cannot be called before it is defined due to hoisting
// below won't work
const age2 = calcAge2(1991);

const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

// Lesson: Arrow Functions
// a special form of function expression
// implicit return

// function expression
const calcAge2 = function( birthYear) {
    return 2037 - birthYear;
}

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const calcAge3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// Lesson: Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`
    return juice;
}
fruitProcessor(2, 3);

// Lesson: Reviewing Functions
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Mike'));

// Lesson: Introduction to Arrays

const friend1 = 'Adam';
const friend2 = 'Brad';
const friend3 = 'Dennis';

// creating an array
const friends = ['Adam', 'Brad', 'Dennis'];
console.log(friends);

// creating with an Array function
const yrs = new Array(1978, 1979, 1980);

// retrieving elements from arrays
// arrays are zero-based
console.log(friends[0]);
// 'Adam'
console.log(friends[2]);
// 'Dennis'

// .length is an object property 
console.log(friends.length);
// use it to retrieve last element in the array
console.log(friends[friends.length - 1]);

// add elements to the array
// "change" or "mutate" the array
// can't change the entire array, though -- that's illegal
friends[1] = 'Tom';
console.log(friends);
// 'Tom' takes place of 'Brad' in the array

// array can hold values of different types at the same time
const firstName = 'Adam';
const adam = [firstName, 'Jura', 1982 - 1963, friends];
console.log(adam);
console.log(adam.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

// illegal:
calcAge(years);

console.log(calcAge(years));
// years + 10
// returns values as strings
// years - 10
// returns NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Lesson: Basic Array Operations (Methods)

// Add elements

// push method adds elements to the end of the array
const friends = ['Adam', 'Brad', 'Dennis'];
friends.push('Danny X');
console.log(friends);

// push function returns a value: the length of the new (mutated) array
const newLength = friends.push('Danny X');
console.log(friends);
console.log(newLength);

// unshift method adds elements to the beginning of the array
friends.unshift('Tom');
console.log(friends);

// Remove elements
// pop method removes last element from array
friends.pop();

// pop returns the removed element
const popped = friends.pop();
console.log(popped);
// returns 'Danny X'

// shift removes first element from array
friends.shift();
console.log(friends);

// indexOf

console.log(friends.indexOf('Brad'));
// if element is there, it will return its index
// if it isn't, it will return -1
console.log(friends.indexOf('Coach Lee'));

// ES6 method includes
console.log(friends.includes('Brad'));
console.log(friends.includes('Coach Lee'));
// method uses strict equality to test
// returns true or false

// can use includes as a conditional
if (friends.includes('Brad')) {
    console.log('You have a friend called Brad')
}

// Lesson: Introduction to Objects

// imagine an array of elements and arrays
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher', 
    ['Michael', 'Peter', 'Steven']
];

// translate the above into its own data structure with curly braces instead of square brackets and you have an object

// object literal syntax:

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

// big difference between objects and arrays is that order of elements matters a lot in arrays
// arrays should be used for more ordered data
// for situations where data is unstructured, objects should be used

// Lesson: Dot vs Bracket Notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
// dot below is an operator which will go to jonas object to retrieve lastName

console.log(jonas['lastName']);

// square brackets are good for using any expression
// wouldn't work in dot notation
const nameKey = 'Name';
console.log(joans['first' + nameKey]);
console.log(joans['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas[interestedIn]);
// using dot notation in prompt field returns undefined
// have to use brackets notation
// e.g., when term job is entered, 'teacher' is returned

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0]);

// Jonas's solution:
console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);