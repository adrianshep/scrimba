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
/*
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
*/

/******************************
 * Basic operators
 */
/*
 var year, yearJohn, yearMark;
 now = 2018;
 ageJohn = 28;
 ageMark = 33;

//  Math operators
 var yearJohn = now - ageJohn;
 var yearMark = now - ageMark;

 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

//  Logical operators
 var johnOlder = ageJohn > ageMark;
 console.log(johnOlder);

//  typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/******************************
* Operator precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
// true:
var isFullAge = now - yearJohn >= fullAge; 
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
// grouping with parentheses has highest order of precedence:
var average = (ageJohn + ageMark) / 2;

// Multiple assignments
var x, y;
// below works because Assignment operator works right to left:
x = y = (3 + 5) * 4 - 6;
// 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x++;
console.log(x);