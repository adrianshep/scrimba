'use strict';

const bookings = [];

const createBooking = function(flightNumber, numPassengers, price) {
    // create default values ES5 way
    numPassengers == numPassengers || 1;
    price = price || 199;

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