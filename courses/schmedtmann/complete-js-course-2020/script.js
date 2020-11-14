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