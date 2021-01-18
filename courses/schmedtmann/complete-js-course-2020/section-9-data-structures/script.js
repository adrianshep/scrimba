'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [`day-${2 + 4}`]: {
        // open 24 hours
        open: 0, 
        close: 24,
    }
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is our delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
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
// this won't work:
console.log(`${...str} Schmedtmann`);
// multiple values separated by comma are only expected with arguments going into a function or when building an array

const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
prompt('Ingredient 2?'),
prompt('Ingredient 3?')
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects (since ES2018)
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giuseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Lesson: Rest Patterns and Parameters
// same syntax (...)
// but opposite of spread operator

// spread operator, because it's on the right side of the =
const arr = [1, 2, ...[3, 4]];

// REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
// result:
// 1 2 [3, 4, 5]
console.log(a, b, others);

const [pizza, , risott, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions
const add = function() {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
    }
}
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// will log: mushrooms ["onion," "olives", "spinach"]
restaurant.orderPizza('mushrooms');
// will log: mushrooms []

// Lesson: Short Circuiting (&& and ||)
// Use ANY data type, return ANY data type, short-circuiting
// if first operand is truthy, second operand won't even be looked at
console.log(3 || 'Jonas');
// returns 3
console.log('' || 'Jonas');
// returns 'Jonas,' the truthy value
console.log(true || 0);
console.log(undefined || null);
// undefined is falsey, so null is returned, even though null is falsey

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// because 'Hello' is first truthy value, it triggers the short circuit, as the OR statement will be true no matter what value(s) follow(s)

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// shorter method by short circuit
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// won't work when value is 0, due to falsy

// short circuiting with AND operator

console.log(0 && 'Jonas');
// result is 0; doesn't evaluate second operand
console.log(7 && 'Jonas');
// result is 'Jonas'; as first value is truthy, last value is then returned

console.log('Hello' && 23 && null 'jonas');
// null is falsy and stops the evaluation; null is therefore the returned value

// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach')
}

// simpler way:
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// if first value doesn't exist, it short circuits the rest


// Lesson: Nullish Coalescing Operator (??)
// restaurant.numGuests = 0;
// JS will interpret 0 as falsy and got to the value of 10 as the value of guests
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish values: null and undefined (NOT 0 or '') 
// as interpreted by ??, 0 is not a nullish value but a falsy one and will short circuit the evaluation returning the correct 0 guests rather than 10
const guestCorrect = restaurant.numGuests ?? 10; 
console.log(guestCorrect);


// Lesson: For-Of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);
// moves over entire array and gives access to each item without worrying about counters and conditions
// can still use continue and break keywords

for (const [i, el] of menu.entries()) {
    console.log(`S{i + 1}: ${el}`);
}

// console.log([...menu.entries()]);


// Lesson: Enhanced Object Literals


// Lesson: Optional Chaining (?.)
// below checking can get out of hand

if (restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

// with optional chaining, undefined rather than error shows up, which is preferable
// operation of trying to read open only happens if restaurant.openingHours.mon exists; if it doesn't exist, result will be undefined immediately
console.log(restaurant.openingHours.mon?.open);
// can have multiple optional chainings
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days) {
    console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
// we can check if a method exists before we call it
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// orderRisotto doesn't exist
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
    {name: 'Jonas', email: 'hello@jonas.io'}];

console.log(users[0]?.name ?? 'User array empty');

// above is easier than old approach below
if (users.length > 0) console.log(users[0].name); else console.log('user array empty');


// Lesson: Looping Objects: Keys, Values, Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
    openStr += `${day}, `;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Property ENTRIES (NAMES & VALUES)
// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}


// Lesson: Sets
// ES6 introduced Sets and Maps
// set is a collection of unique values (no duplicates)
// order of elements in set is irrelevant

const ordersSet = new Set([
    'Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'
]);
console.log(ordersSet);
// returns 'Pasta', 'Pizza', 'Risotto'