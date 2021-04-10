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
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 24739479284) {
        alert('Check in')
    } else {
        alert('Wrong passport!')
    }
}

checkIn(flight, jonas);
console.log(flight);
// flightNum doesn't change
console.log(jonas);
// name IS changed, to Mr. Jonas Schmedtmann
// flight is primitive type, flightNum is a copy of original value
// same as writing:
// flightNum = flight;
//  change did not get reflected in outside variable