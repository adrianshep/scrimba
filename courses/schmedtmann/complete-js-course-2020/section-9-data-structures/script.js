'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
};

// Lesson: Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring array from right side of assignment operator
// unpacking array, not destroying it
const [x, y, z] = arr;
console.log(x, y, z);

// skip element in the middle
const [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// without destructuring
const temp = main;
main = secondary;
secondary = temp;

