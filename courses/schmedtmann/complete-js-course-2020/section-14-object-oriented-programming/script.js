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