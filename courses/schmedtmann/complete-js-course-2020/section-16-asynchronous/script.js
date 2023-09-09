'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Synchronous Code
const p = document.querySelector('.p');
p.textContent = 'My name is Jonas!';
alert('Text set!');
p.computedStyleMap.color = 'red';

// most code is synchronous
// executed line by line in exact order we defined in our code
// each line of code always waits for previous line to finish execution
// this can create problems:
// in example, alert statement will block the rest of the code executing until OK button is clicked
// most of time, synchronous code is fine and makes perfect sense

///////////////////////////////////////
