'use strict';

const bookings = [];
    // create default values ES6 way
    // default values can contain any expression, as in the example of price
const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers
) {
    // create default values ES5 way
    // numPassengers == numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
// numPassengers and price are undefined

// overriding the defaults
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

// with ES6 approach, we cannot skip arguments
// below, second argument will always be mapped to the second parameter
// below will not be interpreted as price being 1000, but number of passengers being 1000: 
createBooking('LH123', 1000);

// to avoid this, set the parameter to be skipped as undefined:
createBooking('LH123', undefined, 1000);


// How Passing Arguments Works: Value vs. Reference
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284
}

const checkIn = function(flightNum, passenger) {
    // not a good practice to change default here, only for illustration:
    flightNum = 'LH999';
    // same as manipulating the jonas object in the memory heap:
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 24739479284) {
        alert('Check in')
    } else {
        alert('Wrong passport!')
    }
}

checkIn(flight, jonas);
// console.log(flight);
// flightNum doesn't change
// console.log(jonas);
// name IS changed, to Mr. Jonas Schmedtmann
// flight is primitive type, flightNum is a copy of original value; what is copied is just a reference to the object in the memory heap
// is the same as doing:
// const flightNum = flight;
// const passenger = jonas;
//  change did not get reflected in outside variable

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() = * 10000000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
// now have TWO functions manipulating the SAME object -- major problem

// passing by value vs passing by reference
// C++, among other programming languages, allows for passing by reference
// JavaScript ONLY passes by value, NOT by reference
// confusion about this comes from the fact that, in JavaScript, for objects, we do in fact pass in a reference, the memory address of the object
// it is still a value, though, the value being that memory address


// First-Class vs. Higher-Order Functions

// JavaScript treats functions as first-class citizens
// This means functions are simply values
// Functions are just another "type" of object

// Store functions in variables or properties
// below, (a, b) => a + b; and function() { this.value++; } are both function values we can store wherever we like
// const add = (a, b) => a + b;
// const counter = {
    // value: 23, 
    // inc: function() { this.value++; }
// }

// Pass functions to other functions as arguments
const greet = () => console.log('Hey, Jonas');
btnClose.addEventListener('click', greet);

// Return functions FROM functions
// (example from MDN)
function magic() {
    return function calc(x) { return x * 42; };
  }
  
  var answer = magic();
  answer(1337); // 56154

// Functions are objects and therefore have methods which can be called on them
counter.inc.bind(someOtherObject);

// Higher-Order Functions

// a function that receives another functions as an argument, 
// that returns a new function,
// or both.
// This is only possible because of JavaScript's treatments of functions as first-class citizens

// Function that receives another function

const greet = () => console.log('Hey Jonas');
btnClose.addEventListener('click', greet)
// Higher-order function: addEventListener
// Callback function: greet (as argument after 'click')
// "callback" because the function will be called back when the click event happens

// Function that returns new function

function count() {
    Let counter = 0;
    return function() {
        counter++;
    };
}
// Higher-order function: function count() {}
// Returned function: function() {}

// "First-class functions" means that all functions are values; there are no first-class functions in practice
// In practice, higher-order functions are possible because JavaScript supports first-class functions


// Functions Accepting Callback Functions

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();    
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    // JavaScript is the best!
    console.log(`Transformed string: ${fn(str)}`);
    // JAVASCRIPT is the best!
    console.log(`Tranformed by: ${fn.name}`);
    // Transformed by: upperFirstWord
}

transformer('JavaScript is the best!', upperFirstWord);
// only passing in the value of upperFirstWord function, NOT calling it

transformer('JavaScript is the best!', oneWord);
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord

const high5 = function() {
    console.log('wave emoji');
}
document.body.addEventListener('click', high5);
// 'high5' is the callback function JavaScript will call as soon as we click on the addEventListener

['Jonas', 'Martha', 'Adam'].forEach(high5);
// wave emoji is called for each of the three array elements

// Why are callbacks so helpful in JavaScript?
// 1) useful to split up code into discrete functions
// 2) even more importantly, callback allows creation of a level of abstraction, hiding detail of code implementation to thing about problems on a higher, abstract level
// in example, string transformation delegated to lower-level functions, while main transformer function is only concerned with transforming the input string itself
// main transformer function is therefore the higher-order function, delegating tasks to broken-out, lower-level code


// Functions Returning Functions

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
// function greet returned a new function which we stored in new function greeterHey
greeterHey('Jonas');
greeterHey('Stefan');

greet('Hello')('Jonas');
// you can even do all the above in one go by immediately calling the function with the name

// greet function rewritten with arrow functions
// one arrow function returning another arrow function:
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');


// Call and Apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    }
    // above: 'this.' points to the lufthansa object
    // old syntax:
    // book: function() {}
};

lufthansa.book(239, 'Jonas Schmedtmann');
// Jonas Schmedtmann booke a seat on Lufthansa flight LH239
lufthansa.book(635, 'John Smith');
// John Smith booke a seat on Lufthansa flight LH635
console.log(lufthansa);
// now will return above two bookings as arrays

// Lufthansa group creates a new airline

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

book(23, 'Sarah Williams');
// cannot read property 'airline' of undefined
// because book function is no longer the book method, it's now a function, so this keyword inside of it points to undefined
// to fix:

