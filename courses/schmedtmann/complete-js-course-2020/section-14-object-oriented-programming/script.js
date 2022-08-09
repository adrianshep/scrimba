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