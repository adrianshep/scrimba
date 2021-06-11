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

// Slice
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


// Splice
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