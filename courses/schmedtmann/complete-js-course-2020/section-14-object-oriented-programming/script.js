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

    // add getter for the age property:
    get age() {
        return 2037 - this.birthYear;
    }
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
// };

jessica.calcAge();
console.log(jessica.age);
// both return 41
// getter is like any other method we set on the prototype

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
    },

    // setter
    // any setter method has to have exactly one parameter:
    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);
// returns 300

// now like a property and not a method:
account.latest = 50;
console.log(account.movements);
// returns [200, 350, 120, 300, 50]
// if we check out jessica in the console, we see:
// in the prototype, age (...) appears (three dots indicate it's only calculated after being clicked)
// once clicked, age is calculated
// age then appears looking more as a property than a method

// setters and getter can be useful for data validation
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    };
// Instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey, ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        // to avoid conflict in setting the exact same property name as the constructor function, an underscore should be added following this.
        // this.fullName should be changed to this._fullName
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    // now need to create a getter for the new _fullName property:
    get fullName() {
        return this._fullName;
    }
    // jessica.fullName in console returns "Jessica Davis"
    // jessica returns:
    // _fullName: "Jessica Davis"
    // and fullName: (...) which also computes "Jessica Davis"
    
// Static method
    static hey() {
        console.log('Hey there  👋');
        console.log(this);
    }
};

const jessica = new PersonCl('Jessica Davis', 1996);

// Uncaught RangeError: Maximum call stack size exceeded
// conflict between the setter function and the constructor function trying to set the exact same property name

const walter = new PersonCl('Walter', 1965);
// returns PersonCL {birthYear: 1965}
// walter has no name

const walter = new PersonCl('Walter White', 1965);
// returns PersonCL {_fullName: "Walter White", birthYear: 1965}
// walter.fullName returns "Walter White"

PersonCl.hey();
// this time, the this kw points to the entire class

// Static Methods
// built-in Array.from method is a good example
// converts any array-like structure into a real array
// Array.from(document.querySelectorAll('h1')) in console
// returns an array:
// [h1]
// the point is that the .from method is attached to the entire Array constructor, and NOT to the prototype property of the constructor
// CANNOT use it on an actual array:
// [1, 2, 3].from() will not work
// returns .from is not a function

// Number.parseFloat() is another example
// .parseFloat() is a method that is static on the Number constructor

// to add a static method:
Person.hey = function() {
    console.log('Hey there  👋');
    console.log(this);
    // the entire constructor function is calling the method
    // therefore, this kw is that entire constructor function
};

Person.hey();
// returns "Hey there 👋"


// Object.create
// third way of implementing prototypal inheritance/delegation
// no prototype properties involved
// no constructor function
// no new operator
// use Object.create to manually set the prototype of an object to any other object that we want

// desired prototype
// a simple object literal:
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};
// create person object with PersonProto as the prototype
const steven = Object.create(PersonProto);
console.log(steven);
// returns empty object {} with __proto__ containing calcAge() method
steven.name = 'Steven';
steven.birthYear = 2004;
steven.calcAge();
// when above sets properties on steven object, calcAge() returns 33

// Constructor Functions or Classes
// use of the new operator automatically sets the prototype of the instances to the constructor's prototype property

// Object.create
// sets the prototype of objects manually to any object we want
// the prototype chain looks exactly the same here
// but no constructor function and no prototype property need to be dealt with at all to achieve the same thing
// more straightforward and easier to understand
// however, in practice, this is the least used way to implement prototypal inheritance

console.log(steven.__proto__);
// returns exactly PersonProto:
// calcAge: f calcAge()
// __proto__: Object
console.log(steven.__proto__ === PersonProto);
// returns true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
// because init was explicitly called on sarah, this keyword will no point to sarah object (nothing to do with constructor function or ES6 classes constructor method)
sarah.calcAge();


///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;

/*
(1) Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
*/

const CarProto = {
    init(make, speed) {
        this.make = make;
        this.speed = speed;
    }
};

// // solution:
// // class CarCl {
//         constructor (make, speed) {
//             this.make = make;
//             this.speed = speed;
//         }
// }

/*

/*
(2) Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
*/

accelerate = function() {
     this.speed += 10;
     console.log(`${this.make} is going at ${this.speed} km/h`);
};

/* solution:
accelerate = () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
/*

/*
(3) Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
*/

brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

// solution:
// brake = () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// };

/*
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
*/

get speedUS() {
    return this.speed/1.6;
}

// solution:
// get speedUS() {
//     return this.speed / 1.6;
// }

/*
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
*/

set speedUS(speed) {
        this.speed = speed * 1.6;
    }
// solution:
// set speedUS(speed) {
    // this.speed = speed * 1.6;
// }

/*
(4) Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.brake();

/*
solution:
console.log(ford.speedUS);
use getter to read the method we've transformed into a property
returns 75 (miles per hour)
ford.accelerate();
returns 130 km/h
ford.accelerate();
returns 140 km/h
ford.brake();
returns 135 km/h

ford.speedUS = 50;
console.log(ford);
returns CarCl {make: "Ford", speed: 80}
50 is in miles per hour; returned 80 is in kilometers per hour
*/


// Inheritance Between "Classes": Constructor Functions

// up to this point, techniques have allowed objects to inherit methods from their prototypes 
// "real" inheritance between classes is more common
// (real classes don't exist in JS; "class" terminology just makes it easier to understand concept of inheritance)
// we'll create a new Student (child) class and make it inherit from the Person (parent) class we've been using so far
// allows Student class to have own specific methods but still use Person class methods
// in this lesson, we'll inherit between classes using constructor functions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

// child class function should follow parent class with some additional functionality
const Student = function(firstName, birthYear, course) {
    // to improve and DRY:
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    // instead:
    // Person(firstName, birthYear);
        // won't work because in a regular function call, this kw is set to undefined
        // need to manually set the this kw as well:
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
// manually set
Student.prototype = Object.create(Person.prototype);
// Student.prototype object now inherits from Person.prototype
// have to create this connection here, before adding any methods to the Student prototype object
// Object.create() will return an empty (Person.prototype) object
// any methods added to Student.prototype object before will be overwritten by Object.create() 

// Why didn't we do:
// Student.prototype = Person.prototype;
// this doesn't work at all; won't end up with prototype chain we need
// instead, we'll end up saying the Student prototype and the Person prototype should be the same object
// We don't want that; we just want Student to inherit from Person

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introducce();
// returns "My name is Mike and I study Computer Science"
mike.calcAge();
// returns 17
// how is this happening?
// when we execute mike.calcAge(), we are effectively doing a lookup of a property for a method -- JS trying to find the requested property for a method
// calcAge() method is not directly on the mike object
// it's also not in the mike object's prototype (the introduce() method is there, though)
// not finding the method in either the mike object or its protototype, JS then looks higher up the chain for it, locating it finally in the Person prototype

console.log(mike.__proto__);
// returns:
// Person {introduce: f}
//  introduce: f ()
//  __proto__: Object
    // mike.__proto__ has a prototype too

console.log(mike.__proto__.__proto__);
// returns:
// calcAge: f ()
// constructor: f (firstName birthYear)
// __proto__: Object

// we need to fix:
console.dir(Student.prototype.constructor);
// returns:
// f Person(firstName, birthYear)
// to get it to point back to Student instead:
Student.prototype.constructor = Student;

console.log(mike instanceof Student);
// returns true
console.log(mike instanceof Person);
// returns true
console.log(mike instanceof Object);
// returns true
// mike is also an instance of Object as it is also in the mike object's prototype chain


///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
*/

const EVCl = function(make, speed, charge) {
    this.make = make;
    this.speed = speed;
    this.charge = charge;
};

EVCl.prototype = Object.create(CarCl.prototype);

// solution:
// const EV = function(make, speed, charge) {
//  Car.call(this, make, speed);
//  this.charge = charge;
// }

/*
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
*/

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;

// solution:
// EV.prototype.chargeBattery = function(chargeTo) {
// this.charge = chargeTo;
// 
// const tesla = new EV('Tesla', 120, 23);
// returns:
// EV {make: "Tesla", speed: 120, charge: 23}

/*
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
*/

EV.accelerate(speed, charge) {
    this.speed = speed + 20;
    this.charge = charge * 0.99;
};
};
// solution:
// EV.prototype.accelerate = function() {
//  this.speed += 20;
//  this.charge--;
//  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
// }
// 

/*
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate(140);
tesla.brake();
tesla.chargeBattery(90);

// solution:
// const tesla = new EV('Tesla', 120, 23);
//  tesla object in console returns:
//      EV {make: "Tesla", speed: 120, charge: 23}
// tesla.chargeBattery(90);
//  tesla object in console returns:
//      EV {make: "Tesla", speed: 120, charge: 90}
// console.log(tesla);
// tesla.brake();
//  returns Tesla is going at 115 km/h
// tesla.accelerate();
//  returns Tesla is going at 135 km/h, with a charge of 89
// EV.accelerate() method overrides any parent class accelerate() methods


// Inheritance Between "Classes": ES6 Classes

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    };
// Instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey, ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    }

    get fullName() {
        return this._fullName;
    }
    
// Static method
    static hey() {
        console.log('Hey there  👋');
    }
};

// classes in JS are a layer of abstraction over constructor functions
// for inheritance between classes in ES6 we only need:
// the extend keyword
// the super function, which is basically the constructor function of the parent class

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // always needs to happen first!
        super(fullName, birthYear);
        // the call to the super enables the this kw to be accessed (although accessing the this kw isn't mandatory):
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
}
    // overriding parent class method:
    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
    }
    // logs I'm 25 years old, but as a student I feel more like 35
    // this calcAge() method "shadows" the one in the parent class
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// if we do not need any new properties and everything inside class StudentCl extends PersonCl -- constructor() {super()} etc. -- is commented out, martha entered in the console will still return: 
// StudentCl {_fullName: "Martha Jones", birthYear: 2012}
// no need to bother writing a constructor in the child class
martha.introduce();
// returns My name is Martha Jones and I study Computer Science

martha.calcAge();
// returns 25
// martha object prototype chain in console:
// introduce() method is inherited from PersonCl
// in the __proto__ of the prototype we have:
// calcAge(), greet, get and set fullName methods
// all proof that the prototype chain was set up automatically by the extends kw above



// Inheritance Between "Classes": Object.create

const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };

const steven = Object.create(PersonProto);

// we want to add another prototype in the middle of the chain, between Person and steven

const StudentProto = Object.create(PersonProto);
// add init method to StudentProto so that we don't have to manually specify the properties on any new Student object
StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

// Object.create allows for the creation of a simple prototype chain:
// Prototype [PersonProto]
// calcAge: function
//  ^ .__proto__
// Prototype [StudentProto] proto: PersonProto
//  ^ .__proto__
// Object [jay] proto: StudentProto

jay.init('Jay', 2010, 'Computer Science');
// returns My name is undefined and I study Computer Science
// name is undefined because value required is fullName and not firstName

jay.introduce();
// returns My name is undefined and I study Computer Science

jay.calcAge();
// returns 27
// jay in console shows that calcAge come from Person object __proto__

// to summarize inheritance with Object.create():
// don't worry about constructors, prototype properties and the new operator
// just objects linked to other objects, really simple and beautiful
// better than faking classes in the way they exist on Jave or C++ languages


// Another Class Example

// create a new class
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
    }
}

// how should movements be added?
/* like this: 
    class Account {
        constructor(owner, currency, pin, movements) {
            this.owner = owner;
            this.currency = currency;
            this.pin = pin;
            this.movements = movements;
        }
    }

    const acc1 = new Account('Jonas', 'EUR', 1111, []);
    console.log(acc1);
    returns Account {owner: "Jonas", currency: "EUR", pin: 1111, movements: Array(0)}

    // however, it doesn't make any sense to add an empty array to all the new accounts we want to create
    // instead, we can simply do this:
    class Account {
        constructor(owner, currency, pin, movements) {
            this.owner = owner;
            this.currency = currency;
            this.pin = pin;
            this.movements = [];
        }
    }

    const acc1 = new Account('Jonas', 'EUR', 1111);

// to add locale:
class Account {
        constructor(owner, currency, pin, movements) {
            this.owner = owner;
            this.currency = currency;
            this.pin = pin;
            this.movements = [];
            this.locale = navigator.language;

            // in fact, we can execute any code we want in this constructor:

            console.log(`Thanks for opening an account, ${owner}`);
            // when a user opens a new account, they are greeted with the above message coming right from the constructor
        }
    }
    
*/

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
// returns
// Account {owner: "Jonas", currency: "EUR", pin: 1111}
//  currency: "EUR"
//  owner: "Jonas"
//  pin: 1111
//  __proto__: Object

// what about withdrawals and deposits, that is movements?
// to deposit:
// acc1.movements.push(250);
// to withdraw:
// acc1.movements.push(-140);
// console.log(acc1);
// logs:
// movements: (2) [250, -140]

// not a good idea at all to interact with a property as above
// much better to create methods to interact with these properties to avoid bugs in future as the application grows
// especially true for important properties such as movements in the Bankist app

// better approach:

class Account {
    constructor(owner, currency, pin, movements) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        // Protected property:
        this._movements = [];
        this.locale = navigator.language;
    }
    // Public interface:
    // common to have a method called get or set instead of using a real getter or setter
    // all this will do is return this.movements which will be the correct way to get them
    // everyone can still access the movements but can't override them
    getMovements() {
        return this._movements;
    }

    deposit(val) {
        this._movements.push(val)
    }

    // can call other methods inside of a certain method:
    withdraw(val) {
        this.deposit(-val)
    }
    // this method abstracts away the fact that a withdrawal is a negative movement
    // the minus before the value of a withdrawal is something the user of the object shouldn't have to care about
    // all the user has to do is enter value itself

}

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);
// also logs:
// movements: (2) [250, -140]
// but uses the public interface instead
// these methods are the interface to our objects
// also called the API -- the application programming interface
// a lot better than having to manually manipulate those properties outside of the object

console.log(acc1.pin);
// returns 1111
// PIN is accessible from outside the account and class
// this is a very real and important security concern

// the same goes for methods:
_approveLoan(val) {
    return true;
}

requestLoan(val) {
    if(this._approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved`);
    }
}

acc1.requestLoan(1000);
// logs "Loan approved"
// and the value has been pushed into the array

// however, we are also able to do this:
acc1.approveLoan(1000);
// we should not even be allowed to access this kind of method
// this is an internal method that only the requestLoan method should be able to use
// makes the case of the need for data encapsulation and data privacy


// Encapsulation: Protected Properties and Methods

// encapsulation keeps some properties and methods private inside the class so they're not accessible from outside of it
// the rest of the methods are exposed as a public interface, which is called an API

// two reasons why we need encapsulation and data privacy:
// 1) to prevent code from outside of a class accidentally manipulating data inside the class
// this is why we implement a public interface.
// we are not supposed to manually mess with this property and therefore should encapsulate it
// 2) when we expose only a small interface -- a small API consisting only of a few public methods -- we can change all the other internal methods with more confidence. We can be sure the code doesn't rely on the private methods and won't break when we make internal changes

// in this lecture, we will fake encapsulation by use of a convention developers agree to use
// movements array will be protected by addition of an underscore preceding it
// since this is not truly private we will call this a protected property


// Encapsulation: Private Class Fields and Methods

// private class fields and methods are part of a bigger proposal for improving and JavaScript classes which is simply called Class fields
// parts of this proposal already work in Google Chrome, others don't
// in traditional OOP languages like Java and C++, properties are usually called fields
// with this new proposal, JavaScript is moving away from the idea that classes are just syntactic sugar over constructor functions
// this new class features classes that have abilities that haven't been present in constructor functions

// Four kinds of fields and methods
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there are also static versions of all of these; they are less important)

class Account {
    // 1) Public fields
    // defined on instances:
    locale = navigator.language;
    _movements = [];
    // also referenceable by the this kw

    // 2) Private fields
    // #name is the syntax that makes the field private in the new class proposal
    #movements = [];
    // Account now logs:
    // #movements: Array(3)
    #pin;
    // we are setting the pin based on the input value to the constructor 
    // we cannot define a field in the constructor
    // the field has to be created here, outside any method
    // create with # and don't set to anything

    constructor(owner, currency, pin, movements) {
        this.owner = owner;
        this.currency = currency;
        // this.pin = pin now becomes:
        this.#pin = pin;
        // Protected property:
        // this._movements = [];
        // this.locale = navigator.language;
    }

    // 3) Public methods
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    // static methods will not be available on instances, only on the class itself
    static helper() {
        console.log('Helper');
    // only works like this:
    // Account.helper();
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    // 4) Private methods
    #approveLoan(val) {
        return true;
    }
    // not currently supported by any browser
    // Google Chrome sees this as a private field and not a method, so will log the objet but will give an error if it is run with a value
}

// the public fields above will be present on all the instances that we will be creating through the class
// they are not on the prototype unlike the methods
// having _movements = [] where it is essentially the same as:
// this._movements = [];
// this.locale = navigator.language;

console.log(acc1);
console.log(acc1.#movements);
// returns:
// Uncaught SyntaxError: Private field
// '#movements' must be declared in an enclosing class
// JavaScript thinks a private class is attempting to be implemented, hence the error message
// we cannot access this variable outside here and the movement property from before no longer exists, so we get an undefined error
console.log(acc1.#pin);
// now also returns:
// Uncaught SyntaxError: Private field


// Chaining Methods
// chaining the methods of our class
// return the object itself at the end of a method that we want to be chainable
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// above results in an error message:
// Uncaught TypeError: Cannot read property 'deposit' of undefined at...
// we are trying to call a method on an account that is undefined
// we need to call deposit on an account 
// we want the result of acc1.deposit(300) to be the account
// solution: return this, since this is the current object
// returning this makes the method chainable
// makes most sense in methods that set a property
// all three of the methods above do that: all make changes to the movements array
// it becomes very useful then to make them chainable
// Uncaught TypeError goes away and "Loan approved" gets logged
// console.log(acc1.getMovements()) returns all the deposits and withdrawals we did:
// (8) [250, -140, 1000, 300, 500, -35, 25000, -4000]


// ES6 Classes Summary

// how we define a class:
class Student extends Person {
    // Public field
    university = 'University of Lisbon';
    // Private fields
    #studyHours = 0;
    #course;
    // Static public field
    static numSubjects = 10;
    
    // constructor method
    constructor(fullName, birthYear, startYear, course) {
        // super is call to parent class
        super(fullName, birthYear);
        // super kw must precede this kw
        // instance property available on each created object:
        this.startYear = startYear;

        this.#course = course;
    }

    // Public method referencing private field and private method
    introduce() {
        console.log(`I study ${this.#course} at ${this.university}`);
    }


    // referencing private field and method
    study(h) {
        this.makeCoffee();
        this.#studyHours += h;
    }

    #makeCoffee() {
        return `Here is a coffee for you`;
    }

    // getter method
    get testScore() {
        return this._testScore;
    }

    // setter method
    set testScore(score) {
        this._testScore = score < 20 ? score : 0;
    }

    // static method
    static printCurriculum() {
        console.log(`There are ${this.numSubjects} subjects`);
    }
}

// creating new object with new operator
const student = new Student('Jonas', 2020, 2037, 'Medicine');

// in this case, a child class
// a Student is a child class of the parent class Person
// because we are using the extends kw to set up inheritance between these two classes
// extends kw will also automatically set up the prototype chain for us

// a public field is very similar to a property we defined in a constructor
// available on every object or instance created by this class

// private fields are almost the same as public fields
// however, are not accessible outside of the class
// therefore, they are perfect for implementing data privacy and encapsulation

// static public fields
// like properties that are available only on the class
// like static methods, use the static kw to make any field static as well

// constructor method
// automatically called by the new operator whenever we create a new instance of the class, that is, a new object
// mandatory in a regular class; may be omitted in a child class if we want it to have the same number and names of parameters
// inside the constructor is a call to the parent class which is the super kw
// only necessary when we are writing a child class
// super kw needs to be used before we access the this kw in the constructor

// instance property
// like public fields, property is also available on each created object
// difference between the two is that instance properties are set based on the input data of the constructor and unique for each boject
// fields are for that whih is common to all the objects
// in the example, the university for all the students is the University of Lisbon, which is not unique to each object

// private field
// not accessible outside of class
// should be unique to each student in this example
// created without any value
// then redefined with the value coming into the constructor

// normal public method

// referencing a private field and a private method in the example above

// Private method
// if not working yet in your browser version, you can fake it by using the underscore convention instead of the hash

// getter method
// used to get a value out of an object by simply writing a property instead of writing a method
// writing student.testScore will run this getter method
// need to return the new property

// setter method
// we can define the test score by setting it to some value instead of calling a test score method
// remember that if you have a setter for a property already defined in the constructor, you need to create a new property with the underscore in front of it

// static method
// available only on class
// cannot access instance properties or methods, only static ones
// usually use it as a helper method for the class

// creating new object with new operator

// keep in mind:
// Classes are "syntactic sugar" over constructor functions
// Classes are not hoisted
// Classes are first-class citizens
// Class body is always executed in strict mode


// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;

// my solution:
class EVCl extends CarCl {
    #charge = 0;
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    
 
// Jonas's solution:
class EVCl extends CarCl {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = chargeTo;
    }
}

    // implement ability to chain accelerate method:
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }
    
    // update the brake method:
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }
}

// implement ability to chain chargeBattery method:
EV.prototype.chargeBattery = function(chargeTo) {
    this.#charge = chargeTo;
    return this;

3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!


DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀

const rivian = new EVCl('Rivian', 120, 23);
rivian.speed(140).accelerate(10).brake(20).chargeBattery(60);

*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get SpeedUS(){
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function() {
    this.speed +=20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}.`);
}
