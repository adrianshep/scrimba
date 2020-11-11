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

