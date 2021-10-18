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

const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}€</div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  // 'beforeend' would invert the order of movements, each new element would be added AFTER the previous one; that's why it has to be the other way around, 'afterbegin' 
  // using 'afterbegin,' any new child elements will appear BEFORE all the child elements that came before it

  });
};


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

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
    .filter(mov => 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
      labelSumInterest.textContent = `${interest}€`;
};

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

const updateUI = function() {
    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    calcDisplayBalance(currentAccount);
  
    // Display summary
    calcDisplaySummary(currentAccount);
}

// IMPLEMENTING LOGIN
// Event handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  // Prevent form from submitting
  e.preventDefault();
  
currentAccount = accounts.find(
  acc => acc.owner === inputLoginUsername.value);
console.log(currentAccount);
// if no element matches below condition, the find method will return an error
// to avoid that, you could check if currentAccount exists first if(currentAccount && urrentAccount.pin)
// but an easier solution is optional chaining, using currentAccount?.pin instead
if (currentAccount?.pin === Number(inputLoginPin.value)) {
  // Display UI and welcome message
  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
  containerApp.getElementsByClassName.opacity = 100;

  // Clear input fields
  // because assignment operator works right to left, can assign '' sequentially in that direction:
  inputLoginUsername = inputLoginPin.value = '';
  // this will remove focus from input:
  inputLoginPin.blur();

  // Update UI
  updateUI(currentAccount);
}
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value);
    // clear out the input fields
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
      amount > 0 && 
      receiverAcc &&
      currentAccount.balance >= amount && 
      // optional chaining to check if username exists:
      receiverAcc?.username !== currentAccount.username) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
      }
});

// loan is only granted if there is any deposit > than or = to 10% of the requested amount of loan
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';

})


btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  // challenge - my solution:
  // if(currentAccount.username && currentAccount.pin) {}
  // challenge - Jonas's solution:
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value === currentAccount.pin
      ) {
        const index = accounts.findIndex(
          acc => acc.username === currentAccount.username
        );
        // Delete account
        // because the splice method mutates the underlying array, there's no need to save the result anywhere:
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
      }
      // clear out the input fields
      // has to come AFTER if else statement to not wipe out values needed above
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  // flipping the state variable back again:
  sorted = !sorted;
});

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
// const balance = movements.reduce(function(acc, cur, i, arr) {
  // to see the snowball effect of accumulator:
  // console.log(`Iteration ${i}: ${acc}`);
  // return acc + cur
// the 0 below is initial value of accumulator
// }, 0);
// in each loop, we return the updated accumulator plus the new current value so we can keep adding to it in the next iteration

// written even more simply with an arrow function:
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

// same as above with a for loop:
// with for loop, always need to have an external variable:
let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value of movements array
// reduce can be anything: sum, product, string
// mov represents the current value
const max = movements.reduce((acc, mov) => {
  if (acc > mov)
    return acc;
  else
    return mov;
}, movements[0]);
console.log(max);

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// 1. Calculate the dog age in human years
const calcAverageHumanAge = ages.map(function(dogAge) {
  if (dogAge <= 2) {
    return humanAge = 2 * dogAge
  } else {
    return humanAge = 16 + (dogAge * 4);
  }
});

// Jonas's solution:
// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  // my solution:
  // const dogsUnderHuman18 = humanAges.filter(function(age, i, arr) {
  //   return age > 17;
  // });
  // console.log(humanAges);
  // Jonas's solution:
  const adults = humanAges.filter(age => age >= 18);
  // 3. Calculate the average human age of all adult dogs
  // my solution:
  // const numAdultDogs = adults.length;
  // const totalAdultAges = humanAges.reduce((acc, cur) => acc + cur, 0);
  // const aveAdultDogHumanAge = totalAdultAges/numAdultDogs;
  // console.log(humanAges);
  // console.log(adults);

  // Jonas's solution:
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  // another way to calculate average:
  // (2 + 3)/2 = 2.5 === 2/2 + 3/2 = 2.5
  const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0) / adults.length;

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// PIPELINE
// THE MAGIC OF CHAINING METHODS

// remarks on chaining:
// do not overuse, as it can cause performance issues if chain is long and you have huge arrays
// should try to compress as much functionality into as few methods as possible
// bad practice in JS to chain methods that mutate the original array -- splice or reverse, for instance

const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0) 
  .map((mov, i, arr) => {
    // arr is the result of the previous operation -- .filter -- so logging it will show what happened as a result of movements.filter
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
// can keep chaining methods as long as they return new arrays
// .filter and .map return arrays, so methods can be chained after them, but .reduce returns a value and therefore no method can be after it
console.log(totalDepositsUSD);


///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// my solution:
// const calcAverageHumanAge = ages
//   .filter(const humanAges = ages
//     .map(age => age <= 2 ? 2 * age : 16 + age * 4);)
//     .reduce()

// Jonas's solution:
const calcAverageHumanAge = age => ages
  .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
  .filter(age => age >= 18)
  .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);


// FIND METHOD
// a withdrawal is a negative movement:
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
// find method only returns first element that matches the condition
// find only returns the element itself and not the array it's in

console.log(accounts);
// this array contains four objects each of which is an account
// this is a common data structure
// using find we can find an object in the array based on a property of that object

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// usually, goal of find method is to find one element
// therefore, conditional uses strict equality operator (===), assuming that account owner names are unique, to return the only matching element in the array

// FINDINDEX METHOD

// SOME 

// EVERY
// only returns true if all of the elements in the array satisfy the condition we pass in
console.log(movements.every(mov => mov > 0));
// returns false because not all movements are deposits
console.log(account4.movements.every(mov => mov > 0));
// returns true because all movements in Account 4 are deposits
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
// can write the function we need separately and pass it in as a callback:
// reuse it for other methods requiring callbacks with a true/false condition
const deposit = mov => mov > 0;
// if function above needs changing, you only do it in one place; better for the DRY principle
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

console.log(movements);
console.log(movements.includes(-130));
// .includes() can only really test for EQUALITY
// only whether that value exists in the array

// to test if there's any positive movement in the array, use .some()
// test for a CONDITION
const anyDeposits = movements.some(move => mov > 0);
console.log(anyDeposits);

// FLAT

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
// returns flattened arr [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep =  [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr.flat());
// returns flattened arr [[1, 2], 3, 4, [5, 6], 7, 8]
// only one level of arrays flattened

const arrDeep =  [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr.flat(2));
// setting depth to 2 returns arrDeep flattened two levels deep: [1, 2, 3, 4, 5, 6, 7, 8]

// creating single array out of arrays in accounts individual account objects
const accountMovements = accounts.map(acc => acc.movements);
// creates a nested structure of arrays containing all the movements:
console.log(accountMovements);
// flatten
const allMovements = accountMovements.flat();
console.log(allMovements);
// adding up all the values for the account balance:
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// use chaining to beautify it:
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);


// FLATMAP

// mapping then flattening the result as above is a common operation
// only goes to one level to flatten
// still have to use .flat() to go additional levels lower
const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flatMap()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);


// SORTING ARRAYS

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
// returns ['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owners);
// now returns ['Adam', 'Jonas', 'Martha', 'Zach']
// sort mutates the array, so you have to be very careful using it

// Numbers
console.log(movements);
// returns [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movements.sort());
// returns [-130, -400, -650, 1300, 200, 3000, 450, 70]
// sort returns numbers by strings rules, alphabetically, so it doesn't work
// sort of numbers therefore requires a callback function
// a is current value, b is the following value
// a and b are consecutive numbers in the array
// in callback function, if we return < 0, value a will be sorted before value b; if we return a positive value, then value a will be sorted after value b

// return < 0, A, B (keep the present order)
// return > 0, B, A (reverse the present order)

// Ascending order
// movements.sort((a, b) => {
//   if (a > b)
//     // number only has to be greater than 0
//     return 1;
//   if (b > a)
//     // number only has to be lesser than 0
//     return -1;
// });

// simplifying the code
movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => {
  if (a > b)
    // number only has to be greater than 0
    return 1;
  if (b > a)
    // number only has to be lesser than 0
    return -1;
});

console.log(movements);
// now returns [-650, -400, -130, 70, 200, 450, 1300, 3000], all values in array in ascending order

// Descending order
movements.sort((a, b) => {
  if (a > b)
    // number only has to be greater than 0
    return 1;
  if (b > a)
    // number only has to be lesser than 0
    return -1;
});

// simplifying the code
movements.sort((a, b) => b - a);
console.log(movements);

// DON'T use .sort() for arrays with mixed elements of strings and numbers


// MORE WAYS OF CREATING AND FILLING ARRAYS

// Manual ways:
// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// creates [empty x 7]
// an array with seven empty elements containing nothing
// this array function creates a new empty argument with the passed-in length
// Array() constructor function has a special particularity to it:
// cannot really use the arrays it creates for much of anything:
// cannot, for example, call the map method on its arrays to fill them up

// one method we can call on this array:
// FILL
// x.fill(1);
// console.log(x);
// returns an array of seven 1s:
// [1, 1, 1, 1, 1, 1, 1]

x.fill(1, 3, 5);
// mutates the original array
// similar to .slice() method
// 1 is the value with which to fill the array
// 3 is the start index for filling
// 5 is the final index, like in .slice(), it is not included in the array
console.log(x);
// returns [empty x 3, 1, 1, empty x 2]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.fill(23, 2, 6);
console.log(arr);
// returns [1, 2, 23, 23, 23, 23, 7]

// Array.from
// to programatically recreate [1, 1, 1, 1, 1, 1, 1]
// callback arrow function returns 1 in each iteration
const y = Array.from({ length: 7 }, () => 1);
console.log(y);
// returns [1, 1, 1, 1, 1, 1, 1]

// to programatically recreate cont arr = [1, 2, 3, 4, 5, 6, 7
// cur can be replace by _ (underscore), a throwaway variable -- don't need the value, but need to define something as the first parameter
// const z = Array.com({ length: 7 }, (cur, i) => i + 1);
const z = Array.com({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Array.from() created to turns array-like structures into arrays
// strings, maps, sets are all iterables in JS that can be turned into real arrays through Array.from()


