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