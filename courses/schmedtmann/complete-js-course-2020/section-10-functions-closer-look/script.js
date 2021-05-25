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
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

book(23, 'Sarah Williams');
// cannot read property 'airline' of undefined
// because book function is no longer the book method, it's now a function, so this keyword inside of it points to undefined
// to fix, use Call Method:
// allows us to set this manually
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
// returns object with "EW23" and "Sarah Williams" in the array

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);
// returns correct booking in the array

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// in place of individual arguments, Apply Method takes an array of arguments
// Apply Method not used as much anymore.
// Instead, use spread operator with call() method:

book.call(swiss, ...flightData);


// Bind Method

// bind also allows us to manually set this keyword for any function call
// the difference: bind doesn't immediately call the function
// instead it returns a new function where the this keyword is bound

const bookEW = book.bind(eurowings);
// now we can create one booking function for each of the airlines:
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

// with the below function, the airline-flight number is set; only the passenger name is needed:
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
// The bookEW23 function is a commonly used pattern called a partial application where some of the arguments of the original function are already applied or set. 
// In this case, the airline and flight number, 'eurowings' and 23.

// Partial Application with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    
    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane();

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// returns NaN because event handler points to the button
// solution: call the method right after the function 
// better solution: use bind() as above

// Partial Application
// another big use case for the bind method in which many times we're not even interested in the this keyword, but where preset parameters are useful:

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
// we don't care about this keyword, so use null intead:
const addVAT = addTax.bind(null, 0.23);
// same as:
// addVAT = value => value + value * 0.23;
// remember order of arguments is crucial here

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge: rewrite above as one function returning another

const addTaxRate = function(rate) {
    return function (value) {
        return value + vallue * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// Coding Challenge #1
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section.
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.options.join('\n')}
                \n(Write option number)`
            )
        );

        // Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array'){
        if(type === 'array'){
            console.log(this.answers);
        } else is {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3] }, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1] });

    // [5, 2, 3]
    // [1, 5, 3, 9, 6, 1]


// Immediately Invoked Function Expressions
const runOnce = function () {
    console.log('This will never run again');
};
runOnce();
// nothing stopping us from running this again:
// runOnce();

// to run only once, wrap function in parentheses to creat a function exression, or IIFE:
(function() {
    console.log('This will never run again');
    const isPrivate = 23;
})();

console.log(isPrivate);

// IIFE as an arrow function:
(() => console.log('This will ALSO never run again'))();

// Why was IIFE invented?
// functions create scopes
// therefore, console.log of isPrivate is inaccessible, being encapsulated as it is in the function sccope
// IIFE is a pattern developers came up with to get around this


// variables declared with let or const create their own scope inside a block:

{
    const isPrivate = 23;
    var notPrivate = 46;
}
// inaccessible:
console.log(isPrivate);
// accessible:
console.log(notPrivate);


// Closures
// a closure happens automatically in certain situations
const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

// In the global execution context, only 
//      secureBooking = <f>
// is running.
// Global scope then contains secureBooking = <f>
// When secureBooking = <f> is executed, a new execution context is put on top of the stack:
//     secureBooking() EC
//      passengerCount = 0
//     Global EC
//      secureBooking = <f>

// each execution context contains its own variable environment
// when secureBooking() EC is executed, it pops off the call stack and disappear
// secureBooking() scope has access to passengerCount = 0, which is local and 
// secureBooking = <f>, which is global and comes from the parent

// doesn't need arguments to run as there's no list of parameters:

booker();
booker();
booker();
// passenger count is incremented to 1, then 2, then 3 total
// closure is what makes this possible
// booker function exists in the global scope while local scope is gone
// closure makes a function remember all the variables that existed at the function's time and place of birth
// how it works:
// secureBooking() is off of the call stack
// calling booker() puts it on top of the call stack
// its variable environment is empty as there are no arguments
// secret revealed: booker function will have access to the expired secureBooking's variable environment (passengerCount = 0) 
// a closure then, is this variable environment attached to the function
// we can say that the booker function "closed over" its parent scope, that is, its parent's variable environment and that environment stays with the function forever
// The Booker function attempts to increase the passengerCount variable. However, this variable is not in the current scope.
// so JavaScript will immediately look into the closure and see if it can find the variable there. And it does this even before looking at the scope chain.
// For example, if there was a global passengerCount variable  set to 10, it would still first use the one in the closure. So the closure basically has priority over the scope chain.