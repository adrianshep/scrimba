/****************************** 
Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);


// Variable naming rules
// $ or _ are only non-alpha characters allowed to start variable names:
var $3years = 3;
var _3years = 3;
*/

/******************************
 * Variable mutation and type coercion
 */

 var firstName = 'John';
 var age = 28;

//  Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'teacher';
//  isMarried = false;

// commented out isMarried will throw an undefined that is then coerced into a string along with other elements:
 console.log(firstName + ' is a ' + age + ' year old ' + job + ', Is he married? ' + isMarried);

//  Variable mutation
age = 'twenty-eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' yeard old ' + job + ', Is he married? ' + isMarried);

// prompt() receives input from user which is then assigned to lastName:
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);