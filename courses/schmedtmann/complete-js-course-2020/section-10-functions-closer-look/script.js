'use strict';

const bookings = [];
    // create default values ES6 way
const createBooking = function(flightNumber, numPassengers = 1, price = 199) {
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

// override defaults
createbook