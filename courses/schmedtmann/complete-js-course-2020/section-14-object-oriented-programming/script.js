'use strict';


// What is Object-Oriented Programming (OOP)?

// OOP is a programming paradigm based on the concept of objects;
// We use objects to model (describe) real-word or abstract features;
// Objects may contain data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block;
// In OOP, objects are self-contained pieces/blocks of code;
// Objects are building blocks of applications, and interact with one another;
// Interactions happen through a public interface (API); methods that the code outside of the object can access and use to communicate with the object;
// OOP was developed with the goal of organizing code to make it more flexible and easier to maintain (avoid "spaghetti code").

// Functional Programming is another popular programming paradigm that we will focus on later

// Classes and Instances (Traditional OOP)

// Classes
// like a blueprint from which we can create new objects
// (below is a representation only -- JS does NOT support real classes as represented here)
// User {
//     user
//     password
//     email
// }
// 
// login(password) {
    // Login logic
// }
// 
// sendMessage(str) {
    // Sending logic
// }

// Instances
// real object we can use in our code created from a Class
// Class itself is not an object
// {
    // user = 'jonas'
    // password = 'dk23s'
    // email = 'hello@jonas.io'

    // login(password) {
        // Login logic
    // }
    // 
    // sendMessage(str) {
        // Sending logic
    // }
// }
// Instances all have different data in them but share the same functionality, like houses all built from the same blueprint

// How do we model real world data into classes?
// 4 Fundamental Principles of Object-Oriented Programming
// 1. Abstraction
// Ignoring or hiding, and therefore not getting dragged down by, details that don't matter to our implementation, allowing us to get an overview perspective of what we're implementing
// 
// example: mobile phone
// real phone
// Phone {
    // charge  
    // volume
    // voltage
    // temperature
    // 
    // homeBtn() {}
    // volumeBtn() {}
    // screen() {}
    // verifyVolt() {}
    // verifyTemp() {}
    // vibrate() {}
    // soundSpeaker() {}
    // soundEar() {}
    // frontCamOn() {}
    // frontCamOff() {}
    // rearCamOn() {}
    // rearCamOff() {}
// }

// abstracted phone
// this phone is like a black box
// Phone {
    // charge  
    // volume
    // 
    // homeBtn() {}
    // volumeBtn() {}
    // screen() {}
// }

// 2. Encapsulation
// Keeping properties and methods private inside the class so they are not accessible from outside the class. Some methods can be expose as a public interface (API).
// Why?
// By having critical properties encapsulated, external code is prevented from accidentally manipulating internal properties/state (data) and creating bugs/breaking code.
// example:
// User {
    // user
    // (private) password
    // (private) email
    // 
    // login(word) {
    // this.password === word
    // }
    // 
    // comment(text) {
        // this.checkSPAM(text)
    // }
    // (private) checkSPAM(text) {
        // verify logic
    // }
// }

// 3. Inheritance
// Making all properties and methods of a certain class available to a child class, forming a hierarchical relationship between the classes. This allows us to reuse common logic and to model real-world relationships.
// Child Class can have its own methods and properties; it may have a mix of those and a some inherited from its parent.
// example:
// Parent Class
// User {
//  user
//  password
//  email

// login(password) {
    // Login logic
    // }
// sendMessage(str) {
    // Sending logic
    // }
// }

// Child Class
// Admin {
// (inherited from Parent Class:)
//  user
//  password
//  email

//  permissions

// Inheritance:
// Child Class extends Parent Class

// (inherited from Parent Class:)
// login(password) {
    // Login logic
    // }
// sendMessage(str) {
    // Sending logic
    // }

// deleteUser(user) {
    // Deleting logic
    // }
// }
// 4. Polymorphism
// A Child Class can overwrite a method it inherited from a Parent Class. (It's more complex than that, but close enough for our purposes.)

// example:
// Parent Class
// User {
//  user
//  password
//  email

// login(password) {
    // Login logic
    // }
// sendMessage(str) {
    // Sending logic
    // }
// }

// Child Class
// Admin {
// (inherited from Parent Class:)
//  user
//  password
//  email

//  permissions

// (inherited from Parent Class:)
// login(password, key) {
    // DIFFERENT LOGIN
    // this different login method overwrites the one inherited from the parent class User above
    // }
// deleteUser(user) {
    // Deleting logic
    // }
// }

// Child Class
// Author {
// (inherited from Parent Class:)
//  user
//  password
//  email

// posts

// (inherited from Parent Class:)
// login(password) {
    // MORE DIFFERENT LOGIN
    // this more different login method overwrites the one inherited from the parent class User above
    // }
// writePost() {
    // Writing logic
    // }
// }


// OOP in JavaScript

// Prototypes

// "Classical OOP"
// Class
//  |
//  V
// Instance
// objects (instances) are instantiated from a class, which functions like a blueprint;
// behavior (method) is copied from class to all instances

// OOP in JS: Prototypes

// Prototype
// contains methods
//      ^
//      |
// Object
// can access methods
// objects are linked to a prototype object
// Prototypal inheritance:
// the prototype contains methods (behavior) that are accessible to all objects linked to that prototype;
// this inheritance differs from the other kind of inheritance:
// previous inheritance was about a class inheriting from another class
// this is an instance inheriting from a class

// Behavior (method) is delegated to the linked prototype object

// Example: Array
// const num = [1, 2, 3];
// num.map(v => v * 2);
// 
// MDN web docs
// Array.prototype.map()
// is the prototype of all array objects we create in JavaScript
// therefore, all JS arrays have access to the map method
// we can say the array delegated the behavior of mapping to its prototype

// 3 Ways of Implementing Prototypal Inheritance in JavaScript:

// 1. Constructor functions
// -- Technique to create objects from a function;
// -- This is how built-in objects like Arrays, Maps or Sets are implemented
// -- How OOP has been done since the beginning

// 2. ES6 Classes
// -- ES6 release introduced classes into JS
// -- Modern alternative to constructor function syntax
// -- "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions
// -- ES6 classes do NOT behave like classes in "classical OOP" (last lecture)

// 3. Object.create()
// -- The easiest and most straightforward way of linking an object to a prototype object

// With prototypal inheritance the 4 pillars of OOP are still valid!
// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism


// Constructor Functions and the New Operator

// constructor function for a person

// OOP convention is to capitalize first letter of constructor functions
// function expression is used here
// function declaration will also work
// arrow function will NOT work as a function constructor, as it doesn't have its own "this" keyword which we need

const Person = function(firstName, birthYear) {
    // Instance properties, available for all the instances created by this constructor function:
    this.firstName = firstName;
    this.birthYear = birthYear;

    // NEVER create a method inside of a constructor function
    // imagine adding hundreds, thousands, tens of thousands of Person objects, creating that number of copies of this function -- terrible for the performance of this code:

    // this.calcAge = function() {
        // console.log(2037 - this.birthYear);
    // };

    // instead, we will use prototypes and prototype inheritance to add methods to constructor functions
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// returns 
// Person {firstName: "Jonas", birthYear: 1991}

// constructor function is called using the "new" operator
// new Person('Jonas', 1991);
// when new Person is called, four steps are executed behind the scenes:
// 1. New {} (empty object) is created
// 2. function is called and in it the this keyword will be set to this newly created object
// 3. newly created {} object is linked to a prototype
// 4. newly created {} object is automatically returned from the constructor function

// can now use this constructor function to create as many different objects as we want
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// operator to test for instanceof
console.log(jonas instanceof Person);
// because jonas is an instance of Person, returns true

const jay = 'Jay';

console.log(jay instanceof Person);
// because jay is not an instance of Person, returns false


// Prototypes
// every function in JS has a property called prototype, including constructor functions
// every object created by a constructor function will have access to all the methods and properties we define on that constructor's prototype property

console.log(Person.prototype);
// log shows calcAge method already in there:
// {constructor: f}
// calcAge: f ()
// constructor: f (firstName, birthYear)
// __proto__: Object

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

jonas.calcAge();
// returns 46, which is correct
// we can use the calcAge method even though it doesn't appear on the jonas object itself:
// the jonas object in the console returns:
// birthYear: 1991;
// firstName: "Jonas"
// but no calcAge method, to which we have access through prototypal inheritance from the Person constructor function
// works for all objects constructed from Person function:
matilda.calcAge();
jack.calcAge();
// only one copy of the Person constructor function exists but it can be used over and over and over
// "this" keyword is set to the object that is calling the method, e.g., jonas, matilda, jack

// __proto__
console.log(jonas.__proto__);
// returns the prototype of jonas:
// calcAge: f ()
// constructor: f (firstName, birthYear)
// __proto__: Object
// the prototype of the jonas function is essentially the prototype property of the Person constructor function:
console.log(jonas.__proto__ === Person.prototype);
// returns true

// isPrototypeOf()
// use on any object to test if it is a prototype of another object
console.log(Person.prototype.isPrototypeOf(jonas));
// returns true
console.log(Person.prototype.isPrototypeOf(Person));
// returns false

Person.prototype.species = 'Homo sapiens';
console.log(jonas, matilda);
// now return:
// Person
//  ...
//  ...
// __proto__:
//  calcAge: f ()
//  species: "Homo sapiens"
//  ...
console.log(jonas.species, matilda.species);
// now return:
// Homo sapiens Homo sapiens

console.log(jonas.hasOwnProperty('firstName'));
// returns true, since jonas object has a firstName property
console.log(jonas.hasOwnProperty('species'));
// returns false, since species property is not really inside of the jonas object; jonas only has access to it because of its prototype inherited from Person constructor


// Prototypal Inheritance and the Prototype Chain
const jonas = new Person('Jonas', 1991);
jonas.calcAge();
// when above is called, JS goes looking for the calcAge()
// JS cannot find it directly in the jonas object
// if a property or method cannot be found in an object, JS will go look for it in its prototype, in this case, Person.prototype
// finding it there, JS can run the jonas.calcAge() call and return the correct result
// this is prototypal inheritance or delegation:
// the jonas object delegated the calcAge() function to its prototype

// The Prototype Chain

//  null                 
//    ^             
//    | 
// Prototype              Constructor function
// [Object.prototype] <-- [Object()]
// __proto__: null

//    ^
//    | .__proto__

// Protytype              Constructor function
// [Person.prototype] <-- [Person()]
// __proto__: Object.prototype

//    ^
//    | .__proto__

// Object
// [jonas]
// __proto__:
// Person.prototype

// since every object in JS has a prototype, Person.prototype has one, too: Object.prototype
// Person.prototype is a simple object 
// which means it's been built by the built-in object Constructor function 
// this is used when we write an object literal:
// {...} === new Object(...)
// curly braces {} are like a short cut to writing "new Object"

// prototype chain defined:
// series of links between objects linked through prototypes 
// similar to the scope chain:
// whenever JS can't find a certain variable, it looks up into the next scope in the scope chain for it
// likewise, whenever JS can't find a property or method, it looks up into the next prototype in the prototype chain for it
// Object.prototype is usually the top of the prototype chain which means that its prototype is null

// example:
jonas.hasOwnProperty('name');
// returns true
// JS starts by looking for .hasOwnProperty() method in the jonas object
// not finding it there, JS looks for it the next step up the prototype chain in Person.prototype
// not finding it there either, JS looks for it one more step up in the Object.prototype, where it's finally located


// Prototypal Inheritance on Built-in Objects

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
// returns prototype property of Object
// and, among others:
//      constructor: f Object()
//      hasOwnProperty: f hasOwnProperty()
//      isPrototypeOf: f isPrototypeOf()
// this is what allows
//      jonas.hasOwnProperty('firstName');
// to work

console.log(jonas.__proto__.__proto__.__proto);
// returns null
// Object.prototype, top of the prototype chain

console.log(Person.prototype.constructor);
// returns the function itself:
// f (firstName, birthYear) {}

// if we want to inspect that function, we hae to use:
console.dir(Person.prototype.constructor);
// constructor property now points back at Person

// Prototype of Arrays

const arr = [3, 6, 6, 5, 6, 9, 9];
// sames as new Array === []
// created by array constructor
console.log(arr.__proto__);
// returns prototype of array and all methods tied to it
// each array will inherit these from its prototype
console.log(arr.__proto__ === Array.prototype);
// returns true
// can do the same in the console:
// entering arr
//  returns its prototype property
//  clicking that returns all the array methods
//  if you look up the filter method, its name is:
//      Array.prototype.filter()
//  because the method lives in the prototype property of the array constructor
// prototypal inheritance is really a mechanism for reusing code

// Adding a new method to the prototype property of the Array constructor
// now all arrays will inherit this method
Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());
// returns [3, 6, 5, 9]

// however, extending the prototype of a built-in object is generally not a good idea
// next version of JS might have a method with the same name but working in a different way which will probably break your code
// on a team, members can name same method differently creating bugs

// some more built-in objects
const h1 = document.querySelector('h1');
//console.dir() returns  
// __proto__: HTMLHeadingElement
//   __proto__: HTMLElement (sames as DOM)
//     __proto__: Element
//       __proto__: Node
//         __proto__: EventTarget
//           __proto__: Object

// console.dir(a random function)
console.dir(x => x + 1);
// returns anonymous function
// __proto__: will contain methods we have used previously on functions
// this is the reason why we can call methods on functions -- they are objects and objects have prototypes
// (and, in this case, a function prototype) 


// Coding Challenge #1
/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
*/

const Car = function(make, speedKmh) {
    this.make = make;
    this.speedKmh = speedKmh;
};

// solution:
// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

/*
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
*/

Car.prototype.accelerate = function() {
    console.log(10 + this.speedKmh);
};

// solution:
// Car.prototype.accelerate = function() {
//      this.speed += 10;
//      console.log(`${this.make} is going at ${this.speed} km/h`);
// };

/*
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
*/

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speedKmh} km/h`);
};

// solution:
// Car.prototype.brake = function() {
    // this.speed -= 5;
    // console.log(`${this.make} is going at ${this.speed} km/h`);
// };

/*
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
*/

const bmw = new Car('BMW', 120);

/*

solution:
const bmw = new Car('BMW', 120);

/*
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

const mercedes = new Car('Mercedes', 95);

/*

solution:
const mercedes = new Car('Mercedes', 95);

*/

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();

/*
solution:
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
*/

/*
GOOD LUCK 😀
*/


// ES6 Classes

// behind the scenes, classes are still functions:
// class expression
// const PersonCl = class {}

// class declaration 
// (Jonas prefers)
class PersonCl {
    constructor(firstName, birthYear) {
    // first thing we need to do is add a constructor method
    // works in a pretty similar way to a constructor function
    // constructor is a method of this class
    // needs to be called "constructor"
    // just as before, the "this" kw will be set to the newly created empty object:
        this.firstName = firstName;
        this.birthYear = birthYear;
    };

    // methods are simply written in here:
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    // methods written in the class outside of the constructor are on the prototype of the object and not on the object itself
    // prototypal inheritance, just as before

    // can do the same with greet method up here as with the PersonCl.prototype below:
    greet() {
        console.log(`Hey, ${this.firstName}`);
    }
    // also returns Hey, Jessica
};

// use "new" operator
const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
// returns just as before:
// PersonCl {firstName: "Jessica", birthYear: 1996}
//  birthYear: 1996
//  firstName: "Jessica"
//  __proto__:
//  calcAge: f calcAge()
//  constructor: class PersonCl
//  __proto__: Object

// another proof:
console.log(jessica.__proto__ === PersonCl.prototype);
// returns true
// PersonCl acts just like any other function constructor
// with class declaration we don't have to manually mess with the prototype property
// much neater syntactically

// adding a method manually via the prototype
// PersonCl.prototype.greet = function() {
    // console.log(`Hey, ${this.firstName}`);
};
jessica.greet();
// returns Hey, Jessica

// important to keep in mind about classes
// 1. Classes are NOT hoisted
//   - even if they are class declarations they are not hoisted, whereas function declarations are hoisted
// 2. Classes are first-class citizens:
//  - can be passed into functions and can be returned from functions (because classes are really just a special type of function)
// 3. Classes are executed in strict mode (even if strict not activated for the script)

// better to use constructor functions or classes?
// understand about constructor functions:
// they are not old or deprecated syntax
// so it's 100% fine to keep using them
// more a question of personal preference
// some say that classes should never be used by anyone as they hide the true nature of JS
// Jonas: okay to use classes, so long as you understand the prototype and prototypal inheritance
// you want to be comfortable writing your code and for Jonas that means understanding what it is your code does
// Jonas likes that classes organize code into blocks tied together 
// with constructor functions, Jonas feels the code is messier and, as it grows, can get out of hand


// Setters and Getters
// assessor properties
// set and get a value

const account = {
    owner: 'jonas',
    movements: [200, 350, 120, 300],

    // getter
    get latest() {
        return this.movements.slice(-1).pop();
    }
};

console.log(account.latest);
// returns 300