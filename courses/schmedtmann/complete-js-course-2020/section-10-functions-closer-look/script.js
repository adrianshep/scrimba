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