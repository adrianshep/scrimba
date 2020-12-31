'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            // open 24 hours
            open: 0, 
            close: 24,
        }
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
    
})

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
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// without destructuring
const temp = main;
main = secondary;
secondary = temp;

// with destructuring
[main, secondary] = [secondary, main];

// received two return values from a function
const [starter, mainCourse] = restaurant.order[2, 0];
console.log(starter, mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log[i, j];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Lesson: Destructuring Objects
// use curly braces providing variable names that exactly match
// order DOESN'T matter in objects
// very useful for dealing with API calls, allowing for a lot less code

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// useful feature for dealing with API third party data
// undefined:
restaurant.menu
// set default values
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
// for below to be valid, it must be wrapped in parentheses
({ a, b } = obj);

// nested objects
const { fri: { open: o, close: c }} = openingHours;
console.log(open, close);

// Lesson: The Spread Operator
// the problem:
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// the solution of the spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

// logs individual elements of the array
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// spread operator doesn't create new variables
// can only use it in places where you would otherwise write values separated by commas

// Spread Operator Use Case: Copy array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

// Challenge: join 2 arrays
// my solution
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// Jonas's solution
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// spread operator works on iterables: arrays, strings, maps, sets, NOT objects

// spread operator on strings
const str = 'Jonas';
const letters = [...str, ' ', '5.'];
console.log(letters);
console.log(...str);
// same as console.log('j', 'o', etc.);