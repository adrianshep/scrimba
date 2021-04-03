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
// iterable

const ordersSet = new Set([
    'Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'
]);
console.log(ordersSet);
// returns {'Pasta', 'Pizza', 'Risotto'}

// strings are also iterables
console.log(new Set('Jonas'));
// returns {'J', 'o', 'n', 'a', 's'}

console.log(ordersSet.size);
// returns 3 for Pasta, Pizza, Risotto
// note difference: called "size" and not "length" as with arrays

// .has
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// .delete
ordersSet.delete('Risotto');

// retrieving values from sets
// no way of getting values out
// no need to - if all values are unique and order doesn't matter, no point in retrieving
// use the .has method

// .clear
ordersSet.clear();

// Main use case of sets is to remove duplicates
// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
// Set(3) {"Waiter", "Chef", "Manager"}
const staffUnique = [...new Set(staff)];
// spread operator takes all elements out of iterable and writes them comma separated:
// (3) ["Waiter", "Chef", "Manager"]

// .size
console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
    );
    // returns 3 for how many unique positions there are

// as string is an interable, .size may be used to count how many letters are in a word
console.log(new Set('jonasschmedtmann').size);
// returns 11 unique values


// Lesson: Maps: Fundamentals
// in JS, a data structure used to map values to keys
// keys can have any type: objects, arrays, other maps
// to create new map, use constructor:

const rest = new Map();
// set key name and value
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
// returns:
// Map(3) {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}

// calling the set method will return the new set:
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

// to read data from map use get method, just pass in name of the key:
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// using the Booleans as map keys
cons time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// .has in maps
console.log(rest.has('categories'));

// .delete in maps
rest.delete(2);

// .size in maps
console.log(rest.size);

// .clear in maps
// rest.clear();

// using arrays and objects as map keys
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.size);

// below won't work:
console.log(rest.get[1, 2]);
// [1, 2] and [1, 2] are not the same objects in memory
// to make it work:
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(arr));

// Lesson: Maps: Iteration
// preferable method for creating map fom scratch:
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!'],
]);
console.log(question);
// above array of arrays structure exactly same as returned from calling Object.entries(openingHours)
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// for loop in Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// convert map to array
console.log([...question]);
// console.log(question.entries);
console.log([...question.keys()]);
console.log([...question.values()]);


// Lesson: Which Data Structure to Use?
// Three sources of data:
// 1. written directly in source code (e.g., status messages)
// 2. From the UI: data input from user or written in DOM (e.g., tasks in todo app)
// From external source: data fetched, for example, from web API (Application Programming Interface)(e.g., recipe objects)
// --> collection of data
// --> data structure
// --> what do we need?
// if simple list of values, then Arrays or Sets
// if key/value pairs, then Objects or Maps
// keys allows you to describe the values

// In modern JS applications, Web APIs are the most common source of data
// comes in JSON format:
// text, a long string, that can easily be converted to JS objects because it uses same formatting as JS objects and arrays
// values are described by keys; without keys, we wouldn't know what the values represent
// that's why the data is stored in an object and not an array
// creating an array of objects is very common in JS

// built-in data structures:

// Arrays vs Sets

// Arrays
// use wen you need ordered list of values (might contain duplicates)
// use when you need to manipulate data

// Sets
// use when you need to work with unique values
// use when high-performance is really important
// use to remove duplicates from arrays

// Objects vs Maps

// Objects
// traditional key/value data structure before maps were around, although considered by some to have been "abused"
// biggest advantage: easier to write and access values with . and [] operators
// use when you need objects (methods) as values
// use with JSON data

// Maps
// offer better performance
// keys can have any data type
// easy to iterate
// easy to compute size
// use when you need keys that aren't strings

// Lesson: Working With Strings - Part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// first occurrence of:
console.log(airline.indexOf('r'));
// last occurrence of:
console.log(airline.lastIndexOf('r'));
// entire word, case sensitiveive:
console.log(airline.indexOf('Portugal'));

// .slice method
// first index is where slice begins to extract
// stops extracting right before second index
// strings are primitive, therefore can't be mutated
// have to save string to value to mutate
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
// + 1 will advance to first letter after the space and then return every letter to the end of the string:
console.log(airline.lastIndexOf(' ') + 1));

// define negative begin argument for .slice
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// check seat function
const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    // checking if string has a B or E in it
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E')
    console.log('You got the middle seat');
    else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// whenever we call a method on a string, JavaScript is very smart and will convert that string primitive to a string object with the same content, a process called "boxing"
// JS calls this String function which looks more like an object:

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

// when the operation is done, the object is converted back to a regular string primitive
// all string methods return primitives, even when called on a string object

console.log(typeof new String('jonas').slice(1));

// Lesson: Working With Strings - Part 2
// Simple String Methods
// Changing Case of String

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// can also be applied directly to a string:
console.log('jonas'.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; 
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing user input emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jona.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
// below returns a string
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

// replace also creates a brand new string
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//  another solution where replaceAll isn't available
// regex
// "g" stands for global
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'A320neo';
console.log(plane.includes('A320'));
// returns true
console.log(plane.includes('Boeing'));
// returns false

// .startsWith
console.log(plane.startsWith('Airb'));

if (plane.startWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function(items) {
    // .toLowerCase makes all strings uniform for comparison
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Lesson: .split method
// Split and join
console.log('a+very+nice+string' .split('+'));
// returns ["a", "very", "nice", "string"]

console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// returns ["Jonas", "Schmedtmann"]

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
// returns Mr. Jonas SCHMEDTMANN

const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];

    for(const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        // another way of capitalizing name
        names.Upper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to Gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
// returns string of 25 total characters
console.log('Jonas'.padStart(20, '+')).padEnd(30, '+'));
// will have 25 total characters, too, same length as message

// padding used to mask credit card number
const maskCreditCard = function(number) {
    // quick way of converting a number to a string:
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));
// returns *************7384 and
// *****************4747

// Repeat method
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${'plane '.repeat}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// search "mdn string replace" takes you to MDN page of all String methods to use
// check out .concat

// Coding Challenge #4
/* 
Write a program that receives a list of variable names written in underscore_case and covert the to camelCase.

The input will come from a textarea inserted into the DOM and converstion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

HINT 1: Remember which character defines a new line in the textarea
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;const rows = text.split('\n');
    // should return an array with five rows:
    console.log(rows);

    for(const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace.(
            second[0], 
            second[0].toUpperCase()
            )}`;
        // (20) is the same as (20, ' ') -- blank spacing is the default
        console.log(`${output.padEnd(20)}${'✅`'.repeat(i + 1)}`);
    }
});



// THIS TEST DATA (pasted to textarea)
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure


// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// convert above string to:
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(';', 'h')})`.padStart(36);
};