'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// returns new array, doesn't mutate original array arr object
console.log(arr.slice(2));
// returns ["c", "d", "e"]
console.log(arr.slice(2, 4));
// returns ["c", "d"]
// output is end parameter (4) minus the beginning one (2)
console.log(arr.slice(-2));
// returns ["d", "e"]
// negative sign means it begins slice from end of array
console.log(arr.slice(-1));
// (-1) is always the very last element in an array
console.log(arr.slice(1, -2));
// returns ["b", "c"]
// every value except last two elements

// slice method may be used to create a shallow copy of any array by calling it without any arguments:
console.log(arr.slice());
// returns ["a", "b", "c", "d", "e"]
// another way of creating a shallow copy of an array using the spread operator:
console.log([...arr]);
// the only time you HAVE TO use the slice method specifically is when you need to chain is when you want to chain multiple methods together, calling one after the other.


// SPLICE
// mutates array
console.log(arr.splice(2));
// returns ["c", "d", "e"]
console.log(arr);
// returns ["a", "b"]
// original array has been mutated

// in practice, most of the time the value the splice method returns doesn't interest us
// usually our interest using it is to delete one or more elements from an array
// a common use case is to remove the last element of an array:
arr.splice(-1);
console.log(arr);
// returns  ["a", "b", "c", "d"], all but last element
// splice second parameter is deleteCount
// the number of elements we want to delete
arr.splice(1, 2);
// returns ["a", "d"]
// first parameter says go to position 1 and, according to second parameter, and delete two elements


// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
// returns ["f", "g", "h", "i", "j"]
console.log(arr2);
// returns ["f", "g", "h", "i", "j"]
// reverse method mutates the original array

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
// returns  ["a", "b", "c", "d", "f", "g", "h", "i", "j"]
// does NOT mutate original array
// same result as:
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
// returns a - b - c - d - e - f - g - h - i - j


// LOOPING ARRAYS: FOREACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of loop, for comparison:
// for (const movement of movements) {
// adding movement number for clarity:
for (const [i, movement] of movements.entries())
  if (movement > 0) {
    // console.log(`You deposited ${movement}`);
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    // console.log(`You withdrew ${Math.abs(movement)}`);
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');

// forEach method:

movements.forEach(function(mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// the forEach method loops over the array and in each iteration it executes the callback function, passing in the current element of the array ("movement") as an argument
// when to use for of versus forEach?
// if you really need to break out of the loop, only for of will allow that, not forEach


// FOREACH WITH MAPS AND SETS

// MAPS

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Map
currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});
// returns:
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
// underscore parameter below is throwaway placeholder shorthand in JavaScript -- in this case, sets don't use key
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`);
});
// returns:
// USD: USD
// EUR: EUR
// GBP: GBP


// CREATING DOM ELEMENTS

const displayMovements = function(movements) {
  containerMovements.innerHTML = '';

  movements.forEach(funciton(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  // 'beforeend' would invert the order of movements, each new element would be added AFTER the previous one; that's why it has to be the other way around, 'afterbegin' 
  // using 'afterbegin,' any new child elements will appear BEFORE all the child elements that came before it

  });
};
displayMovements(account1.movements);


///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // return [5, 2]
  // another solution using slice only:
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  // console.log(dogs);
  // returns [5, 2, 4, 1, 15, 8, 3]

  dogs.forEach(function(dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
}
// Test Data 1:
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// Test Data 2:
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// DATA TRANSFORMATIONS: MAP, FILTER, REDUCE

// MAP
// is similar to the forEach method except that map creates a brand new array based on the original array
// the map method takes an array, loops over that array and in each iteration, it applies a callback function that we specify in our code to the current array element.
// original array: [3, 1, 4, 3, 2]
// MAP: current * 2
// returns  a brand new array [6, 2, 8, 6, 4]

// FILTER
// filters elements in the original array which satisfy a certain condition
// original array: [3, 1, 4, 3, 2]
// FILTER: current > 2
// returns  a brand new array [3, 4, 3]

// REDUCE
// reduces all array elements down to one single value
// e.g., adding all the elements together
// original array: [3, 1, 4, 3, 2]
// REDUCE: acc (accumulator) + current
// returns 13
// array has been reduces to one single value


// THE MAP METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);
// returns [220, 495, -440, 3300, -715, -143, 77, 1430]

// same as above, but using a forOf loop:
const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(move * eurToUsd);
console.log(movementsUSDfor);
// map method uses a function -- in line with the  functional programming paradigm -- to solve the problem of creating a new array 
// forOf loop simply loops over one array and manually creates a new one

// simplifying above callback function into an arrow function
const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
});
// step 1 - remove function kw and replace it with an arrow:
const movementsUSD = movements.map((mov) => {
  return mov * eurToUsd;
});
// step 2 - remove parens around mov as there is only one argument:
const movementsUSD = movements.map(mov => {
  return mov * eurToUsd;
});
// step 3 - since we have only one line of code, we can remove the {} and even the return statement:
const movementsUSD = movements.map(mov => 
mov * eurToUsd);
// remember, that we are returning mov * eurToUsd

    // two or even more return statements are acceptable within a function as long as only one is ever executed
  // if (mov > 0) {
  //   return(`Movement ${i + 1}: You deposited ${mov}`);
  // } else {
  //   return(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  // simplify above with a ternary operator:

  const movementsDescriptions = movements.map((mov, i) => 
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
  );
// there is a big difference between the above forEach and map methods:
// forEach: in each iteration we performed some action that was then visible in the console -- a side effect
// map: we returned each of the strings from the callback, adding them to a new array, then logged the entire array to the console and not the the elements one by one. Map method did not create a side effect with each iteration.


// COMPUTING USERNAMES
// const user = 'Steven Thomas Williams';
// 'Steven Thomas Williams' becomes stw
// const username = user.toLowerCase().split(' ');
// returns ["steve", "thomas", "williams"]

// looping over array, taking first letter and putting it to into a new array
// this is exactly what the map method does
// const username = user
//   .toLowerCase()
//   .split(' ')
//   // .map(function(name) {
//   //   return name[0];
//   //   // returns ["s", "t", "w"]
//   // turn .map() into arrow function:
//   .map(name => name[0])
//   .join('');

// taking above into a function:
const creatUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  return username;
}
console.log(creatUsernames('Steven Thomas Williams'));

// compute one username for each of the account holder in our accounts array
// we do not want to create a new array; we want to modify the object, the elements already existing in the accounts array

const creatUsernames = function(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
};
creatUsernames(accounts);
// to check this worked, we can log accounts objects and see new property of "username" and corresponding value for each:
console.log(accounts);

// FILTER METHOD

const deposits = movements.filter(function(mov, i, arr) {
  return mov > 0;
});
console.log(movements);
// as deposits are only those movements that have a value of zero or greater, we want to filter out those movements with a negative value
// use a boolean to filter the deposits array
console.log(deposits);

// comparison with for loop:
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);
// array methods are superior to for loops in that array methods can be chained together and for loops cannot
// Challenge:
// My solution:
const withdrawals = movements.filter(function(mov) {
  return mov < 0;
});

// Jonas's solution:
const withdrawals = movements.filter(mov => move < 0);

// REDUCE METHOD
// boils down all elements in an array to one single value
// acc = accumulator -> SNOWBALL
// cur = current value
const balance = movements.reduce(function(acc, cur, i, arr) {
  return acc + cur
// the 0 below is initial value of accumulator
}, 0);
// in each loop, we return the updated accumulator plus the new current value so we can keep adding to it in the next iteration