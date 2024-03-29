'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatMovementDate = function(date, locale) {
  const calcDaysPassed = (date1, date2) => 
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 *24));
    
    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed);
    // returns numbers of days passed between dates

    if(daysPassed === 0) return 'Today';
    // if condition met, return stops code execution, so does not reach any lines below it
    if(daysPassed === 1) return 'Yesterday';
    if(daysPassed <= 7) return `${daysPassed} days ago`;
    
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date)
};

const formatCur = function(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
     // date strings need to be converted back into a JS object so data can be worked with:
    
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.bal, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function() {
  const tick = function() {
    const min = String(Math.trunc(time / 60)).padStart(2,0);
    const sec = String(time % 60).padStart(2, 0);
  }
  // Set time to 5 minutes

  let time = 120;

  // In each call, print the remaining time to the UI
    labelTimer.textContent = `${min}:${sec}`;

  // When 0 seconds, stop timer and log out user
  if (time === 0){
    clearInterval(timer);
    labelWelcome.textContent = 'Log in to get started';
    containerApp.style.opacity = 0;
    }

  // Decrease by 1s
  time--;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers

let currentAccount, timer;
// need timer variable to persist between different logins
// both variables need to be in the parent scope of the btnLogin function below


// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// Experimenting with internationalization API
// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   // now returns only time in hours and minutes, no date
//   day: 'numeric',
//   month: 'long',
//   // will return month name
//   // month: 'numeric', will return month as number
//   // month: '2-digit', will return single digit month number preceded by 0
//   year: 'numeric',
//   // returns 4 digit year, '2-digit' will reduce to 2 digits
//   weekday: 'long',
//   // will return weekday name spelled out, e.g., Tuesday
//   // 'short' and 'narrow' are other options
// }

// labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
// 'en-US' is English language used in the country of United States
// returns dates mm/dd/yyyy as in US, so 01/29/2022
// en-GB' is English language used in Great Britain
// returns dates dd/mm/yyyy as in UK, so 29/01/2022
// ISO Language Code Table (www.lingoes.net)
// labelDate.textContent = new Intl.DateTimeFormat('pt-PT', options).format(now); will return weekday and other text in Portuguese

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

// Create current date and time
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekday: 'long',
  // remove to keep month and weekday from appearing in locale language
};

// locale coming from the browser:
// const locale = navigator.language;
// console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(
  currentAccount.locale,
  // instead of 'en-US', 
  options
  ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function() {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// CONVERTING AND CHECKING NUMBERS

console.log(23 === 23.0);
// one data type for all numbers
// Base 10 is 0 to 9
// Binary Base 2 is 0 1
// just as in Base 10, where 3/10 = 3.3333 (to infinity)
// in Base 2, 1/10 also results in an infinite number
// which is why in Base 2, 
// 0.1 + 0.2 = 3.0000000000000004
// JavaScript tries to round behind the scenes, but some cases, like the above, escape that
// as a result, you cannot do precise scientific or financial calculations in JS, as you run into this problem:
// 0.1 + 0.2 === 0.3
// will return false, because 0.3 is really 3.0000000000000004

// Conversion
console.log(Number('23'));
console.log('23');
// easier:
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
// returns the number 30
// always indicate base in which you are working (base 10 in the example)
// for .parseInt to work, the string has to begin with a number
// console.log(Number.parseInt('e23', 10)), for example, will return NaN
// useful for where a unit from CSS must be gotten rid of

console.log(Number.parseInt('2.5rem'));
// returns 2, stopping at decimal point
console.log(Number.parseFloat('2.5rem'));
// returns 2.5
// not affected by white space

console.log(Number.isNaN(20));
// returns false, it is a number
console.log(Number.isNaN('20'));
// also returns false because it is a regular value
console.log(Number.isNaN(+'20'));
// if we try to convert the above string into a number, it returns true because it is NaN
console.log(Number.isNaN(23 / 0));
// returns false; dividing by 0 gives us infinity; infinity is also not NaN

// ultimate method to use to check if value is a number
console.log(Number.isFinite(20));
// returns true
console.log(Number.isFinite('20'));
// returns false
console.log(Number.isFinite(+'20'));
// returns false
console.log(Number.isFinite(23 / 0));
// returns false

// if using integers:
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
// both return true
console.log(Number.isInteger(23 / 0));
// returns false

// Math and Rounding

// square root
console.log(Math.sqrt(25));
// or using exponentiation:
console.log(25 ** (1 / 2));
// both return 5

// cubic root
console.log(8 ** (1 / 3));
// returns 3


// getting maximum value
console.log(Math.max(5, 8, 23, 11, 2));
// returns 23
// .max will do type coercion:
console.log(Math.max(5, 8, '23', 11, 2));
// still returns 23
// however, .max will not do parsing:
console.log(Math.max(5, 8, '23px', 11, 2));
// returns NaN


// getting minimum value
console.log(Math.min(5, 8, 23, 11, 2));
// returns 2


// constants on the Math. namespace

console.log(Math.PI);
// returns 3.141592653589793
// calculate area of a circle with radius of 10px:
console.log(Math.PI * Number.parseFloat('10px') ** 2);
// returns 314.1592653589793

// generating random numbers
// remove decimal with .trunc
// .trunc reduces upper number to one lower, so offset with + 1:
console.log(Math.trunc(Math.random() * 6) + 1);
// now generates random values between 1 and 6

// Formula for generating random integers between two values (min and max):
// .floor generalizes this function better than .trunc so that it works with positive and negative numbers
const randomInt = (min, max) => 
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10,20));

// Rounding integers
// .trunc
// removes decimal and everything after it
console.log(Math.trunc(23.3));
// returns 23

// .round
// always rounds to the nearest integer
console.log(Math.round(23.3));
// returns 23
console.log(Math.round(23.9));
// returns 24

// .ceil
// always round up
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
// both return 24

// .floor
// always round down
console.log(Math.round(23.3));
console.log(Math.round(23.9));
// both return 23

// all the above methods do type coercion
// console.log(Math.round('23.9')) is the same as
// console.log(Math.round(23.9));

// Negative numbers
console.log(Math.trunc(-23.3));
// returns -23
console.log(Math.floor(-23.3));
// returns -24
// with negative numbers, .floor works in the other direction
// .floor works in more situations than .trunc does, with positive and negative numbers

// Rounding decimals
console.log((2.7).toFixed(0));
// .toFixed will always return a string, not a number
// 2.7 is returned as 3
console.log((2.7).toFixed(3));
// 2.7 is returned as 2.700, out to the 3 indicated decimal places
console.log((2.345).toFixed(2));
// 2.345 is returned as 2.35, out to the 2 indicated decimal places and the 5 rounded up
console.log(+(2.345).toFixed(2));
// also returns 2.35
// since a number is a primitive and primitives don't have methods, JS does "boxing," transforming the number into a number object, calling the method on it, then converting the result back into a primitive

// Remainder Operator
console.log(5 % 2);
// returns 1
console.log(5 / 2);
// 5 = 2 * 2 + 1

console.log(8 % 3);
// returns 2
console.log(8 / 3);
// 8 = 2 * 3 + 2

// Even or Odd
// a number is even when its remainder is 0
console.log(6 % 2);
// returns 0
// a number is odd when its remainder is 1
console.log(7 % 2);
// returns 1

const isEven = n => n % 2 === 0;
console.log(isEven(8));
// returns true
console.log(isEven(23));
// returns false
console.log(isEven(514));
// returns true

// Bankist app even or odd row coloring

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// Numeric Separators

// formatting large numbers
// diameter of our solar system
// const diameter = 287460000000
// normally we'd write it 287,460,000,000
// numeric separators are underscores _
const diameter = 287_460_000_000
console.log(diameter);
// returns 287460000000
// JS removes the separators
const price = 345_99;
console.log(price);
// returns 34599

const transferFee1 = 15_00;
// meaning $15.00
const transferFee2 = 1_500;
// meaning 1,500
// placement of underscore in above examples makes a huge difference in meaning
// JS, however, interprets both as the same, returning 1500

// restrictions on where underscores can be placed
// can only be placed between numbers
const PI = 3.14_15;
// returns 3.1415
// these return errors as they're not allowed:
// const PI = 3._1415;
// const PI = 3_.1415;
// const PI = _3.1415;
// const PI = 3.1415_;

// converting strings that contain underscores won't work
console.log(Number('230000'));
// returns 230000
console.log(Number('230_000'));
// returns NaN

console.log(parseInt('230_000'));
// returns 230 -- everything preceding underscore


// Working with BigInt
// the biggest number that can be worked with in JS is:
console.log(2 ** 53 - 1);
// JS cannot work with numbers larger than that accurately
// it is so important that it's also stored in the number namespace as:
console.log(Number.MAX_SAFE_INTEGER);
// sometimes numbers larger than above will show up and work and in other they won't

// ES2020 a new primitive was added, BigInt or Big Integer
// can be used to store numbers as large as we want
// (large numbers may come from an API, for instance)
console.log(4838430248342043823408394839483204);
// returns 4.8384302483420437e+33
console.log(4838430248342043823408394839483204n);
// returns 4838430248342043823408394839483204n
// allows JS to display very large number accurately

// Creating BigInt with BigInt function
console.log(BigInt(4838430248342043823408394839483204));
// returns a different number than 4838430248342043823408394839483204n, likely because JS still has to approximate the oversized input value first
// BigInt best used with smaller numbers:
console.log(BigInt(48384302));
// returns 48384302n


// Operations

console.log(10000n + 100000n);
// returns 20000n

console.log(362863726372637623726372637263762372637263n * 10000000n);
// returns 628637263726376237263726372637623726372630000000n

// Mixing BigInt and other types not allowed
const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * num);
// returns "Uncaught TypeError: Cannot mix BigInt and other types...""
// num has to be converted to BigInt
console.log(huge * BigInt(num));
// now the product of the huge and num can be returned

// Exceptions:

console.log(20n > 15);
// returns true
console.log(20n === 20);
// however, returns false
// makes sense as JS doesn't do type coercion for === operator
// 20 is a regular number
// while console.log(typeof 20n);
// returns bigint

console.log(20n == 20);
console.log(20n == '20');
// return true

console.log(huge + ' is REALLY big!!!')
// returns 20289830237283728378237 is REALLY big!!!
// even the bigint number isn't converted into a string

console.log(Math.sqrt(16n));
// returns TypeError: Cannot convert a BigInt value into a number

// Divisions
console.log(10 / 3);
// returns 3.3333333333333335

console.log(11n / 3n);
// returns nearest bigint, so here it's 3n
console.log(12n / 3n);
// returns 4n, cuts off everything past the decimal


// Creating Dates

// Create a date
// 1. using Date constructor
const now = new Date();
console.log(now);
// returns current date and time

// 2. giving JS a date inside a string
console.log(new Date('Jan 03 2022 08:35:40'));
// JS can parse a given date
console.log(new Date('December 24, 2015'));
// returns Thu Dec 24 2015 00:00:00 GMT+0000
console.log(new Date(account1.movementsDates[0]));
// parses "2019-11-18T21:31:17.178Z" -- Z means the coordinated UTC (Universal Time) in Greenwich without time zones or Daylight Savings
// returns Mon Nov 18 2019 21:31:17 GMT+0000 (Western European Standard Time)

// can pass various date and time element values into constructor:
console.log(new Date(2037, 10, 19, 15, 23, 5));
// returns Mon Nov 18 2037 15:23:05 GMT+0000 (Western European Standard Time)
// month value 10 becoming November means that month is zero-based in JS constructor

// JS autocorrects the date:
console.log(new Date(2037, 10, 31));
// as there aren't 31 days in November, JS returns: 
// Tue Dec 1 2037 00:00:00 GMT+0000 (Western European Standard Time)
console.log(new Date(2037, 10, 33));
// returns autocorrected:
// Tue Dec 3 2037 00:00:00 GMT+0000 (Western European Standard Time)

// can also pass into the Date constructor function the number of milliseconds that have passed since the beginning of Unix Time (January 1 1970):
console.log(new Date(0));
// returns Tue Jan 1 1970 01:00:00 GMT+0100 (Western European Standard Time)
// calculate date three days later:
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// 3 days 24 hours 60 minutes 60 seconds 1000 milliseconds (259200000 milliseconds total)
// returns Tue Jan 4 1970 01:00:00 GMT+0100 (Western European Standard Time)
// 259200000 is the number of milliseconds as of Jan 4 1970 since the beginning of Unix Time and is also the Time Stamp of Jan 4 1970 (Day 3) in Unix Time

// Working with Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
// returns Thu Nov 19 2037 15:23:00 GMT+0000 (Western European Standard Time)
console.log(future.getFullYear());
// returns 2037
// don't mistake with .getYear(); only use .getFullYear();
console.log(future.getMonth());
// returns 10 -- zero-based, so 10 is Month 11, November
console.log(future.getDate());
// returns 19
console.log(future.getDay());
// returns 4, for the 4th day of the week, Thursday
console.log(future.getHours());
// returns 15
console.log(future.getMinutes());
// returns 23
console.log(future.getSeconds());
// returns 0
// to get a nicely formatted international standard string:
console.log(future.toISOString());
// returns 2037-11-19T15:23:00.000Z
// get time stamp for the date:
console.log(future.getTime());
// returns 2142256980000, the milliseconds between the date and dawn of Unix Time
// can also reverse this process, using lapsed milliseconds to arrive at date
console.log(new Date(2142256980000));

// for time stamp of this exact moment:
console.log(new Date.now());
// returns current Unix Time stamp in milliseconds

// Set versions of methods
future.setFullYear(2040);
console.log(future);
// returns Mon Nov 19 2040 15:23:00 GMT+0000 (Western European Standard Time)
// set version for each get method above
// all have autocorrect


// Adding Dates to Bankist App


// Operations with Dates
// calculating dates
const future = new Date(2037, 10, 19, 15, 23);
// convert to a number, a time stamp in milliseconds:
console.log(Number(future));
// or
console.log(+future);
// returns 2142256980000

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 *24);
// using Math.abs will allow the date values to be entered in any order and still produce the same result

const days1 = calcDaysPassed(
  new Date(2037, 3, 14), 
  new Date(2037, 3, 24));
console.log(days1);
// returns 10, regardless of order of dates
// new Date(2037, 3, 14, 10, 8));
// returns 10.422 as hours and minutes were added

// Internationalizing Numbers (Intl)

const num = 3884764.23;

const options = {
  // style offers three options:s
  style: 'unit',
  // style: 'percent',
  // returns values with percentage sign styled as per locale country
  // style: 'currency',
  // then have to define, as currency is NOT set by the locale:
  // currency: 'EUR', for Euro
  unit: 'mile-per-hour',
  // unit: 'celsius',
  // returns values in degrees Celsius
  // useGrouping: false, returns value without separators (commas, periods, etc.)
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
// returns US format: 3,884,764.23
// with options, returns 3,884,764.23 mph
console.log('Great Britain: ', new Intl.NumberFormat('en-GB', options).format(num));
// returns UK format: 3,884,764.23
// with options, returns 3,884,764.23 mph
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
// returns European format: 3.884.764,23
// with options, returns 
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
// returns Arabic format with Arabic numbers and letters

// getting locale from browser:
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
  );


  // Timers: setTimeout and setInterval

// setTimeout

// asynchronous JS
  setTimeout(() => console.log('Here is your pizza 🍕 '), 3000);
  // to call this function after 3 seconds, pass in 3000 milliseconds
  // after 3 seconds, 🍕 is logged to the console
  // to prove code execution continues while 3 seconds is counting down:
  console.log('Waiting...');
  // will log to console right away, before the 3 seconds are up, preceding that log
  // all the arguments passed after the delay are passed to the function:
  setTimeout(
    (ingredient1, ingredient2) => console.log(`Here is your pizza with ${ingredient1} and ${ingredient2} 🍕 `), 
    3000,
    'olives',
    'spinach'
  );
  console.log('Waiting...');

  // cancelling a setTimeout
  const ingredients = ['olives', 'spinach'];
  const pizzaTimer = setTimeout(
    (ingredient1, ingredient2) => console.log(`Here is your pizza with ${ingredient1} and ${ingredient2} 🍕 `), 
    3000,
    ...ingredients
    // spread operator will place ingredients elements here comma-separated
  );
  console.log('Waiting...');

  if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)

// setInterval
// if we want to run a function over and over again

setInterval(function() {
  const now = new Date();
  console.log(now);
}, 1000);
// every second (1000 milliseconds), a new date and time stamp is being logged to the console