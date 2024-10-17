
// Modern JavaScript Development

// code used to be written in one or a few big scripts, which would then be sent to a browser
// currently, we divide our projects into multiple modules that can share data between themselves
// this makes our code more organized and maintainable
// a great thing about modules is that we can also include third party modules in our code
// there are thousands of open source modules which we call packages that developers share on the NPM repository
// we can use these packages for free in our own code
// for example, the React framework or jQuery, or even the Leaflet library that we used in our Mapty project
// NPM stands for Node Package Manager, originally developed together with and for Node.js
// however, NPM has established itself as the go-to depository for all kinds of packages in modern JS development
// in order to download, use and share packages, we use NPM software installed on our computer
// it's a simple command line interface allowing us to do all that
// NPM is both a repository in which packages live and a program we use on our computers to install and manage these packages
// we've written our project code, we divided it into multiple modules and we included some 3rd party modules as well -- the development step is complete
// when building a real world application, that isn't the end of the story
// our project now needs to go through a build process, where one big final JS bundle is built
// that's the final file we will deploy to our web server for production and will be sent to browsers
// "production" simply means that an application is being used by users in the real world
// a build process can be very complex; for this description, we will keep it to only two steps
// in the first step, we bundle all our modules into one big file
// this is a complex process which can eliminate unused code and compress our code as well
// this step is important for two reasons:
// first, older browsers don't support modules at all, so code in a module can't be executed by an older browser
// second, it improves performance to send fewer files to the browser and have the bundling step compress our code
// in the second step, we transpile and polyfill, which is coverting all modern JS syntax and features back to old ES5 syntax, so that even older browsers can understand our code without it breaking
// this is usually done with a tool called Babel
// after these two steps, we end up with the final JS bundle ready to be deployed on a server for production
// we don't perform these steps ourselves, but use a special tool to implement the build process for us
// the most common build tools are webpack and Parcel
// these are called JS bundlers because they take our raw code and transform it into a JS bundle
// webpack is the more popular one but it can be difficult and confusing to set up -- a lot of stuff needs to be configured manually by us in order to make it work properly
// Parcel is a zero-configuration bundler, which works right out of the box
// we don't have to write any set-up code to use it
// these development tools are also available on NPM
// we will use the Parcel JS bundler later in this section, downloading and managing our tools using NPM, just as professional developers do who write JS applications


// An Overview of Modules in JS

// a module is a reusable piece of code that encapsulates implementation details
// not always the case, but a module is usually a standalone file
// in addition to code, a module can also have imports and exports
// we can export simple values or even entire functions out of a module
// whatever we export from a module is called the public API
// this is just like classes, where we can also expose a public API for other codes to consume
// in the case of modules, this public API is consumed by importing values into a module
// just as we can export values out of modules, we can aslo import values from other modules
// these modules are then called dependencies of the importing module, because the code in the importing module cannot work without the code from the external module
// this logic is true for all modules in all programming languages, not just in JS
// modules are a pattern developers have been using in all programming languages for decaades
// we can write code without modules -- we've been doing that up to this point -- but only because our applications have been very simple
// as a code base grows bigger and bigger, however, there start to be many advantages to using modules
// first, modules make it really easy to compose software
// modules are small building blocks we can put together in order to build complex applications
// digital camera example: smaller components are assembled to create a complex, highly functioning product
// another benefit of these discrete camera modules is that each of them can be developed in isolation from one another
// one engineer can be working on the lens and another on the screen and yet another on the controller
// best thing about this is that each engineer can work on their module without understanding what the other engineers are doing or even how the entire camera finally works itself
// this makes it really easy to collaborate with a larger team
// modules make it very easy to abstract our code
// we can use modules to implement low level code, then other modules, which don't care about those low level details, can import those abstractions and use them
// in the camera example, the screen module, for instance, doesn't care about the low level implementation details of the controller module
// without knowing how it works, the screen module can import the controller and use it to control other parts of the camera -- that's the power of abstraction
// modules naturally lead to a more organized code base
// breaking up our code into separate, isolated and obstructed modules will automatically organize our code and make it easier to understand
// this alone is a huge benefit
// finally, modules allow us to easily reuse the same code in a project and even across multiple projects
// for example, if we us the module to implement several mathematical functions in a certain project, and if we then need the same functions in the next project, all we need to do is to copy that model to the new project
// in the camera example, the manufacturer could now use the exact same lens or the exact same screen in different camera models because they nicely abstracted these components into self-contained reusable modules

// modules specifically in JS
// As of ES6, JS has a native, built-in module system
// we did have modules before ES6, but we had to implement ourselves or use external libraries
// ES6 modules are modules that are actually stored in files, one module per file
// if scripts are usually also files, let's compare these two types of files to understand the huge differences between old school scripts and modern ES6 modules
// first difference, in modules, all top level variables are scoped to the module
// variables, therefore, are private to the module by default
// the only way an outside module can access a value that's inside a module is by exporting that value
// if we don't export, then no one from the outside can see the variable
// in scripts, on the other hand, all top level variables are always global
// this can lead to problems such as global namespace pollution, where multiple scripts try to declare variables in the same name and then these variables collide
// private variables are the solution to this problem, which is why ES6 modules implemented them this way
// ES6 are always executed in strict mode; no more need to manually declare strict mode
// scripts are executed in "sloppy" mode by default
// the this kw is always undefined at the top level
// in scripts, it points at the window object
// with modules, we can import and export values between them using the ES6 import and export syntax
// in regular scripts, importing and exporting values in completely impossible
// an important note about imports and exports: they can only happen at the top level, outside of any function or any if block
// also, all imports are hoisted
// no matter where in the code you're importing values, the imports statement will be moved to the top of the file
// in practice, importing values is always the first thing that happens in a module
// in order to link a module to an HTML file, we need to use the script tag with the type attribute set to "module" instead of a plain script tag
// modules always download asynchronously
// this is true for a module loaded from HTML as well as for modules loaded by importing one into another using the import syntax
// regular scripts download by default in a blocking, synchronous way
// unless we use the async or defer attributes on the script tag

// Behind the Scenes: How Modules Import Other Modules

// analyze this code example:

// import { rand } from './math.js';
// import { showDice } from './dom.js';
// const dice = rand(1, 6, 2);
// showDice(dice);

// we're importing a value called rand from the math.js module and showDice from the dom.js module
// when executing code, the first step is to parse it, meaning read it without executing it
// it's at that moment that imports are hoisted
// the whole process of importing modules happens before the code in the main module is executed
// in the example, index.js module imports the math and dom modules in a synchronous way
// that means that only after all the imported modules have been downloaded and executed will the main index.js module be executed
// this is only possible because of top level imports and exports
// that's because, if we only import and export values outside of any code that needs to be executed, then the engine can become aware of all the imports and exports during the parsing phase, while the code is still being read and before it begins to be executed
// if we were allowed to import a module inside of a function, that function would first have to be executed before the import could happen
// in which case, modules could not be imported in a synchronous way -- the importing module would have to be executed first
// why do we want modules to be loaded in a synchronous way? isn't synchronous bad?
// synchronously is the easiest way we can do things like bundling and dead code elimination, that is, deleting code that isn't necessary
// this is very important in large projects with hundreds of modules, and that includes third party modules from which we usually only want a small piece of code and not the entire contents
// by knowing all dependencies between modules before execution, bundlers like webpack and Parcel can join multiple modules together and eliminate that code
// this is why we can only import and export outside of any code that needs to be executed
// after the parsing process, HIAS figures out which modules it needs to import
// these modules are then downloaded from the server
// and the downloading itself happens in an asynchronous way
// rand and showDice may download from the math and dom modules at the same time
// it is only the importing operation itself that happens synchronously
// after a module arrives, it's also parsed and the module's exports are linked to the imports in index.js
// for example, the math module exports a function called rand and this export is then connected to the rand import in the index.js module
// this connection is a life connection
// exported values are not copied to imports
// instead, the import is a reference to the exported value, like a pointer
// when the vaule changes in the exporting module then the same value also changes in the importing module
// this is unique to ES6 modules -- other module systems don't work like this, but JS modules do
// with this, the process of importing modules is finally finished
// it's time for the importing module to be finally executed as well; index.js, in this example

// Exporting and Importing in ES6 Modules

// start with simplest scenario: import a module without importing any value
// we start with script.js, but to create a new module have to create a new file
// we will use shoppingCart.js
// for module names, the convetion is to use camelCase

// Uncaught SynTax Error: cannot use import statement outside a module
// why is this happening?
// remember from the last lecture, when we want to connect a module to the HTML file, we need to specify the type attribute
// have to add to index.html
// <script type="module" defer src="script.js"></script>

// console log in script.js:
// Exporting module     shoppingCart.js:2
// Importing module           script.js:3

// the first log is the exporting module
// only then is the importing module logged
// the code in the importing module is parsed and, before it is executed, the modules that it imports are executed first
// remember that all the importing statements are hoisted to the top of the code
// in the same vein, when we write code, we put the import statements at the top of it
// note the lack of use of strict mode here, because all modules are executed in strict mode by default
// define variables in shopping cart module
// shipping cost equals 10
// empty cart (array)
// variables declared inside of a module, like the two mentioned, are scoped to this module
// inside a module, the module itself is the top level scope
// by default, this means that all top level variables are private inside of this variabe
// unlike traditional scripts, which would put all of these variables in the global scope
// which is why we cannot do this:
// console.log(shippingCost);
// "shippingCost" is not defined
// shippingCost and cart variables are scoped to the current module; we can only use them here
// variables that are declared inside of a module, just like shippingCost and cart are in shoppingCart.js, are scoped to their module
// inside a module, the module itself is like the top level scope
// by default, this means that all top level variables are private inside of this variable
// if we want to use them here, in script.js, we will have to use exports

// in ES6, there are two types of exports, named and default

// Named Imports are the simplest way of exporting something from a module
// all we have to do is put "export" in front of anything we may want to export
// say we want to create a method here "add to cart" and it should be a function that takes a product and the quantity of it
// then pushes a new object to the cart array
// this variable is private inside its module, but if we want to export it so that we may import it into another module, all we have to do is write export before it
// this creates a named export from this module
// now we can import that variable here, we just have to write it with the exact, same name in curly braces
// now we are able to call this function as if it was defined in this same scope
// we add 5 breads to the shopping cart
// console logs "5 bread added to cart" -- it works
// that log is coming from the addToCart function that is defined in the shoppingCart module
// exports always need to happen in the top level code -- it wouldn't work if you put an if statement, for example, before export const addToCart
// you would get an unexpected token export
// can export multiple things from a module using named exports
// that is the main use case of named exports, exporting multiple things
// declare variables in shoppingCart, totalPrice and totalQuantity
// add those variable names to export's curly braces
// and import the variables here using the same names, in this case using console log
// now we can get access to these values in this main importing module
// we can change the name of the imports as well in this importing module
// rename totalPrice, for example, to price
// we can also do that in exports
// in shoppingCart we could write "totalQuantity as tq"
// in script, we then would write tq in place of totalQuantity
// we can take importing even further, importing all the exports of a module at the same time
// "import" and * (which means everything)
// and we give a name, Shopping Cart, with a capital S, a bit like a class name
// that's the convention when we import everything into an object like this
// this will create a namespace for all of the values exported from that module
// make sure the .js is in place as VS Code removes it by default
// whenever we want to use something that was exported like the addToCart function, we take it from this object
// we use Shopping Cart with addToCart to add five breads
// this module is now exporting a public API, just like a class
// it's as if this object was created from a class and now has these methods and properties, like ShoppingCart.totalPrice
// which is another named export from this module
// we are not trying to replace classes with modules, merely point out the similarities
// we can say that module exports constitute a kind of a public API because everything else stays private inside of the modules

// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// import { addToCart, price, totalQuantity } 
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);
// console.log(price, totalQuantity);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

// Default Exports
// we use default exports when we only want to export on thing per module
// as per shoppingCart.js, there is no name involved at all
// we are simply exporting this value
// we will then import the default export, no matter what it's called and it's not called anything
// we can give it any name here that we want
// (usually not advisable to import the same module twice)
// let's add two pizzas
// and, if we want, we can have default and named exports all at the same time
// however, in practice, we usually never mix named and default exports in the same module -- it isn't desirable and helps reduce complexity
// the preferred style is to just one default export per module and then import as we did originally
// that's the reason why it's easier to import a default export
// here we don't even need to use the curly braces -- the designers intended that
// proof that imports have a live connection to exports
// start by exporting cart array from shoppingCart.js
// we are exporting cart as an empty array, but watch what happens when we add a few more items in script
// to make this work, we need to mix a default and named export
// when we log the cart, we do not see that empty object that we exported; rather, we have this array with the items we just added to the cart using the add function
// import, therefore, is not simply a copy of the value we exported here
// as we call this function that we exported from the other module, we keep pushing objects to that array
// so we are mutating that array here, in this import odule, and can see that in the console
// therefore, it is the same cart object behind the scenes with a live connection to both modules, not a copy, in which case we could not get anything into that array
// which means both modules point to the same place in memory

import add, { cart } from './shoppingCart.js';
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);


// Top-Level Await (ES2022)

// briefly return to asynchronous JS as there's been an important cahnge in ES2022
// we can now use the await kw outside of async functions in modules
// we call this top-level await
// this only works in modules; will fail in a normal script
// near top of index.html file, we have our type set to "module":
// <script type="module" defer src="script.js"></script>
// this is required to make top-level await work
// to demonstrate top-level await, let's do a simple fetch request
// a fetch function is what we do to an HTTP or AJAX request
// use an API with fake data called JSONPlaceholder
// at the URL, we can get fake data about posts, comments, albums, etc.
// await the result and then save it into a variable
// remember that we need another await to parse the data as JSON
// then we can log the data to the console
// log reveals an array of 100 posts where each of them is an object
// we see that the await kw is working outside of an async function
// before, we would have to write async function something and then the function body
// async function x() {}
// with top-level await in modules, that is no longer necessary
// while this is very useful, it's importnat to understand that this blocks the execution of the entire module now
// sometimes, this is not what we want
// demonstration by logging 'Something' afterwards and making the request a bit slower by clicking on throttling and using 3G in the network tab
// you can see it starts fetching, doing the work, and only after that logging 'Something' to the console
// so the await kw, now outside of an async function, is blocking the execution of this entire module, which we had never seen before
// although useful in some situations, many times can also be harmful, especially running a really long taks
// use this new superpower with great caution

// above illustrates how top-level await works but it's a bit too simple
// to get a bit more real, many times we have an async function that we want to return some data
// let's create a function called getLastPost -- will do the fetch request and only return the very last post
// make sure to remove 3G throttling from network tab
// network speed is pretty fast now
// now we want to return an object from this function which contains the title and the body
// to return a new object with the title and body of "data" where each is the last element in the array, we use the new ES2022 at method
// let's try to save that returned value in a variable called lastPost
// if you remember the previous section, you will remember that this won't work
// if you log lastPost, you'll see that it's actually a promise, not the object we were expecting
// calling an async function, which the function here clearly is, will always return a promise, not the actual data itself
// because at the time we are running this line of code, the data has not yet arrived, there is only that pending promise
// workaround to get the data object instead of the promise is to use a regular promise
// now when we log we get the object with the title and the text
// however, this isn't very clean, so we can use top-level for this instead
// lastPost2 will be the result of awaiting getLastPost function
// this is where top-level await can get quite useful
// there is an important implication of using top-level await:
// if one module imports a module that has a top-level await, then the importing module will wait for the imported module to finish the blocking code
// this sounds more complicated than it actually is
// as an example, let's add some blocking code to the exported shoppingCart module
// once again, to see the effect, we should throttle down the request to a slow 3G
// in the log, we see the order of events:
// the shopping cart is imported
// we start immediately fetching users
// only after the fetch is completed do we get the second logging to the console
// only after that is the code in the importing module, script.js, executed
// we can see that the code in script.js has to wait for the code in shoppigCart.js to finish
// the top-level await we have here is not only blocking execution in the exporting module, it's also blocking in the importing module
// using top-level await, so await outside of any async function, will block the entire moduel in a way we really couldn't block code execution before
// therefore, top-level await is a helpful tool but also one that needs to be used with great care

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);

    return { title: data.at(-1).title, text: data.at(-1).body };
};

// const lastPost = getLastPost();
// console.log(getLastPost);

// not very clean
// getLastPost.then(last => console.log(last));

const lastPost2 = await getLastPost;
console.log(lastPost2);


// The Module Pattern

// the pattern we used to use to implement modules in JS
// you will still see it around and it's a good application of many things we've been learning
// the purpose of the module pattern is to:
// encapsulate functionality
// have private data
// expose a public API
// the best way to achieve all that is by using a function, because they give us private data by default and allow us to return values which can become a public API
// how the module pattern is implemented:
// start by writing a function, usually an IIFE, an immediately invoked function expression
// because we don't have to call it separately
// and we can also ensure that it's only called once
// it's very important that the function is only created once because the goal is to not reuse code by running it multiple times
// its only purpose is to create a new scope and return data just once
// add variables
// can use addToCart from shoppingCart.js without the export, of course
// rename to orderStock
// add console log 'ordered from supplier'
// all of this data is private because it is inside the scope of the function
// all we have to do is return some of these in order to return a public API
// to do that, we return an object which contains things we want to make public here
// we want to add to the public API the addToCart function and also the cart array and total price and quantity
// we could have also defined all of these here, right in the object, as properties and methods, but it's a little bit cleaner to define everything outside of it and then to create an object containing everything we want to expose to the public
// however, we are not storing this returned object anywhere
// if we run this right now, then this object disappears into nothing
// we fix that by assigning the result of running this IIFE to a new variable
// we call this as before as ShoppingCart2 adding four apples and two pizzas to the cart and it works
// as the console is the global scope, we can't see anything as we are still inside of a module and everything in it is private to it
// so how does all this work?
// how are we able, for example, to have access to the cart variable and even manipulate it, eve if the IIFE retunred a long time ago?
// we executed that function only once in the beginning and then returned this object and assigned it to this variable
// the answer is closures
// closures allow a function to have access to all the variables that were present at its birth
// the cart function never loses connection to its birthplace, which all of that functions scope and it contains the cart
// so the addToCart function can still access that cart variable
// the reason this works is NOT because the cart variable is in this object, because we're not even using this.cart
// it works because the birthplace of the function contains cart
// if we add shippingCost to the function, it no longer exists elsewhere but was present in the function's birthplace, so it works
// this is how the module pattern works well, and has been for a long time for developers, long before ES6 modules existed in JS
// the problem is that if we want one module per file, like we have with ES6 modules, we would have to create different scrips and link all of them in the HTML file
// and that then creates a few more problems -- we have to be careful with the order in which we declare them in HTML
// and we would have all of the variables in a global scope
// and, finally, we couldn't bunde them together using a module bundler, and using a module bundler in very important in JS
// so the module pattern works quite well but has some limitations and that's why native modules were added to JS in ES6

const ShoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const orderStock = function (product, quantity) {
        cart.push( {product, quantity} );
        console.log(`${quantity} ${product} ordered from supplier, shipping cost is ${shippingCost}`);

        return {
            addToCart,
            cart,
            totalPrice,
            totalQuantity,
        };
    };
}());

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);


// CommonJS Modules

// besides native ES modules, there are other module systems that have been used by JS in the past
// they weren't native JS so relied on external implementations
// two examples are: AMD modules and CommonJS modules
// CommonJS modules are worth taking a look at
// they're important to us because they have been used in Node.js for nearly its entire existence
// only very recently have ES modules been implemented in Node.js
// remembert, Node.js is a way of running JS on a web server outside of a browser
// the big consequence of this is that almost all the modules in the npm repository in the beginning of this section, all these modules that we can use in our own code, still use the CommonJS module system
// the reason is that npm was originally only inteded for node which uses CommonJS
// only later did npm become the standard repository for the whole JS world
// so now we are stuck with CommonJS
// and therefore there is a lot of CommonJS still around

// let's see what this looks like: we'll pretend we want to export something from this module
// just like ES6 modules, in CommonJS, one file is one module
// and we exports something from a module using export dot and then the name of the export
// here we'll say addToCart, and then whatever we want to export after
// this is not going to work in the browser, but it would work in Node.js
// the export kw is an important object in Node.js
// if we want to import something, it would be pretty similar to ES modules
// although from here we will call a require function that isn't defined in our browser environment but is in Node.js as part of the CommonJS specification
// in summation, there are different module systems in the word of JS and Common JS is particularly important among them
// in the long run, ES6 modules will probably replace of these different module systems
// but it may be a long while before we get there

// Export
export.addToCart = function (product, quantity) {
    cart.push( {product, quantity} );
    console.log(`${quantity} ${product} ordered from supplier, shipping cost is ${shippingCost}`);
};

// Import
const { addToCart } = require('./shoppingCart.js');


// A Brief Introduction to the Command Line

// before we can use a tool like Parcel.js, we need to first learn a bit about the command line
// all the build tools available on npm only work in the command line
// the foundation of the command line: moving around in the file system, creating files and folders, copying files, etc.
// important as a web developer that you know how to do these basic things using a terminal or a command prompt
// no serious web developer can live without the command line -- it's part of the job
// on Mac, open up Terminal
// on Windows, right click on Start button and select the Command Prompt -- what the terminal is called on Windows
// if you're on Linux, you likely already know ow to use the terminal and do all this stuff
// many times as a web developer you will use a separate window like the terminal, but since we're in VS Code already and it has an integrated terminal, we will use that
// on Windows, it probably won't say bash the way it will on Unix-based systems like Mac or Linux, because the command line works a little bit differently
// most commands, however, are the same across these versions
// with any command line, you are always in a folder
// the beauty of VS Code is that, when you open a terminal, you are always in the project folder itself
// from that location in the file system, you can move up and down using commands
// first command:
// ls (in Mac/Unix-based systems; dir in Windows, which stands for "directory")
// this will then show you the contents of the current folder
// next command:
// cd - means change directory
// with it, we can up and down the file tree
// to go up the tree:
// cd ..
// shows folders and files in the next file up
// to go into one of those folders or files:
// cd section-17 (follow cd with partial folder or file name) then hit tab
// VS Code will auto-complete the name of the folder or file you want
// then ls
// which shows all the folders and files in the current folder
// clean.js index.html script.js shoppingCart.js
// to move up not one but two levels:
// cd ../..
// to clear the console so that everything disappears except for the prompt:
// clear
// or hit the command key
// to create a folder:
// mkdir foldername
// using ls command, you can then see the folder and also see it in the file system
// to create a file:
// touch (on Mac) or edit (on Windows)
// touch filename
// the files are empty when they're created
// see them with ls command
// to open live server:
// live-server
// to cancel live server:
// Ctrl + C
// to access previous commands:
// press up arrow key as many times as you want to see past commands
// and down key to see more recent commands
// can add multiple files all at once
// this is useful when you need to add multiple modules at once
// touch jonas.js bankers.js mapty.js
// to delete files, use rm on Mac and del on Windows
// rm script.js jonas.js
// to move a file to a folder, use command mv then the name of the file to be moved and then the name of the location to which it is to be moved:
// mv mapty.js ../
// the ../ represents the parent folder location
// to delete a folder:
// rmdir
// stands for remove directory
// on a Mac, this only works for empty directories
// another way to remove a directory:
// rm -R filename
// use rm again and then specify a flag (an option) which we write with a dash and then use a specific symbol or letter
// R stands for recursive
// command recursively deletes all the files and then the directory itself

/*
in terminal:

~/courses/schmedtmann/complete-js-course-2020 (master *) 
$ ls
$ cd
$ cd ..
$ cd ../..
$ clear
$ mkdir TEST
$ touch index.html
$ touch script.js
*/


// Introduction to NPM 

// Node Package Manager is both a software on our computer and a package repository
// why we need something like NPM:
// why do need a way of managing packages or dependencies in our projects?
// before NPM, we used external libraries right in our HTML -- script tags
// this would then expose a global variable we could use
// using Mapty as an example, in its index.html file, we included leaflet.js using a script tag before our own script so that it could then use the global variable exposed by this library
// this creates some problems, at least in a big project with a big team -- it's just not manageable
// first, it doesn't make sense having the HTML loading all of JS, which is really messy
// second, many times we would download a library file directly to our computer, like a jQuery file for example, but whenever a new version would come out, we would manually have to go to the site, download the new version and change the file in our system manually, then include it again with some other name and version number
// third, before NPM, there wasn't a single repository that contained all the packages we might need, which made it worse to manage and download from all the different libraries we would need
/// we needed to manage our dependencies in a more modern and better way -- hence NPM
// start by checking if we have NPM installed:
// in terminal:
// npm -v
// will check for and return the number of the version
// anything greater than 6.x.x is good
// if you don't have it, go to nodejs.org to download and install the latest version
// in each project where we want to use NPM we start by initializing it:
// npm init
// this will then ask us a few questions (and offer default values) in order to create a package.json file:
// package name:
// version:
// description:
// entry point: (script.js)
// test command:
// git repository:
// keywords:
// author:
// license:
// for each question pressing enter key will use whatever default value is in the parenthesis
// we end up with a special file called package.json
// this is a file NPM creates for our project
// it stores the entire configuration of our project
// it will become interesting in a moment
// let's install the Leaflet library we used before, this time using NPM
// find Leaflet documentation page online
// find NPM installation instructions there
// write npm to run the NPM program, then install, then the name of the package:
// npm install leaflet
// a shorter version of the same thing is:
// npm i leaflet
// two things happen:
// in our package json file, a new field is created for dependencies
// the dependency we have now is leaflet in its x.x.x version
// we also now have a folder called node_modules
// it contains the leaflet folder
// it has some 15,000 lines of code
// this folder contains everything about the leaflet library that we need to include in our page, everything about this package
// the more packages we install, they will all get stored in the node_modules folder
// if we want to use the Leaflet library, it won't be easy without a module bundler
// that's because the library uses the Common JS module system which we can't directly import into our code
// we could only do that if later we use a module bundler, but for now we are not

// Installing and Importing Lodash
// one of the most popular JS libraries
// a collection of useful functions for arrays, objects, dates and more
//  a lot of functions that could or should be included in JS but are not
// people instead implemeneted them in Lodash and can now use them
// install:
// not looking for normal version of Lodash as that one uses Common JS and we can't use it without a module bundler
// instead, we will use a special version that is called Lodash ES
// npm i lodash-es
// Lodash will appear in our dependencies
// we now have one file for each of the methods available in Lodash -- there are a lot of them
// include the one for cloning objects -- cloneDeep.js
// look into cloneDeep.js file, which shows it uses export default cloneDeep
// as a default export we could give it any name we want -- we will still call it cloneDeep
// and then the path:
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// remember that it's very hard to copy a nested object
// let's create one here:
// we have a cart in here, in itself an array which contains some objects
// we have a user, which is also an object
const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5},
    ],
    user: { loggedIn: true },
};
const stateClone = Object.assign({}, state); 
// let's see what happens when we copy this deeply nested object using JS
// state clone and we use object assign to create a copy of an object
// so we create an empty object and then we merge it with the state
const stateClone = Object.assign({}, state); 
// console.log(stateClone);
// looks exactly the same as the state
// however, what happens when we change one of the nested objects in there?
// if we say state user logged in is set to false, we see the copy is also false
state.user.loggedIn = false;
console.log(stateClone);
// using object assign is a lot of work when we want to manually create a deep copy or clone
// we can instead use the function that Lodash gives us that someone battle-tested and implemented for us already
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
// this version of the object shows false
console.log(stateDeepClone);
// while this deep one shows true
// so this is a good solution we got from NPM for a deep clone copying problem
// we used a piece of open source software to solve a recurring problem in JS

// going back to the package json file:
// say you want to move your project to another computer or share it with another developer or even check it in a version control tool like Git
//  in all of these scenarios, you should never include the node_modules folder
// in a real project, that folder will be really, really huge
// it's possible for that folder to have tens of thousands of files in it which will slow you down
// it also doesn't make sense to send these files that are already in NPM when you can get them from there
// simulate this by deleting the node_modules folder
// now cloneDeep no longer works anymore
// there is a very easy way to get it back:
// run npm install or npm i command without any package name
// NPM will seek out the package json file, look at all the dependencies and reinstall them
// importing packages by specifying their entire path is not practical at all, however, so it's finally time to use Parcel to fix this


// Bundling with Parcel and NPM Scripts

// the module bundler we're going to use in this course is called Parcel
// it's super fast and easy to use and, even more importantly, it works out of the box without any configuration
// you may have heard of Webpack, which is probably the most popular bundler, especially in the world of React
// however, it's too complex to use in a course like this
// so we will learn how to use Parcel
// it's another build tool which os also on NPM
// so we will use NPM to install it
// to install, we now have a different dependency:
// npm i parcel --save-dev
// hit enter and watch it install
// dev dependency is a special category of npm packages that are only needed in the development phase of a project
// used for testing, building, and local development
// they are not required for running an application in production
// a dev dependency is like a tool we need to build our application but not one we actually include in our code
// it therefore appears in its own field in our package json file
// to use Parel, we do it in the terminal as Parcel is another command line interface
// however, we cannot run Parcel like this -- it won't work on account of the command not being found
// the command line won't work with locally installed packages, which is how Parcel was installed
// in order to use Parcel in the console, we have two options: we can use NPX or NPM scripts
// NPX is an application built into a NPM
// we can use it to run the same command we tried to run earlier, but this time it will work
// npx parcel index.html
// above is the normal command and the option we pass into Parcel is the entry point
// in this case, our entry point is index.html because that is where we include our script.js, the file we want to bundle up
// in our script.js, we are also including the cloneDeep module from Lodash
// we will also put back the code so that we are importing our shoppingCart module from before
// import add, { cart } from './shoppingCart.js';
// for this example, the goal of using Parcel is to bundle these three modules together
// run:
// npx parcel index.html
// as Parcel runs, it starts a new development server on the URL that appears in the console (http://localhost:1234)
// clicking it opens a new tab
// in addition to bundling, Parcel also does the same job as our live server
// the difference is that the live server is on port 8080 and the new one is on port 1234
// the raw IP address is 127.0.0.1; local host is the easier name
// troubleshooting errors running this command
// open new tab in console by clicking + in console tool bar
// close unneeded live server by entering control c -- we don't need it as we now have Parcel performing the same function
// if you had an error installing Parcel, you can try installing it with sudo, which will give you more permissions
// sudo npm i parcel
// if that doesn't fix it, you should reinstall exactly the same version as you're using
// read the exact version in the package json file
// if it indicates say version 1.12.4 then you can NPM install exactly that version
// npm i parcel@1.12.4
// if that still doesn't fix it, then before using this command, try uninstalling it first
// npm uninstall parcel
// then reinstall Parcel
// you should have no more errors then
// we do have one error coming from our code
// "parcelRequire is not defined"
// in index.html, we still have script type "module"
// however, Parcel creates a script
// we are no longer using a module but are back to using a regular script
// that is important because modules don't work on older browsers
// remove 'type="module"' from script at top of index.html
// save it so Parcel can rebuild the application
// now the error is gone
// what Parcel did here:
// it created a dist folder -- for distribution -- which we will send to production
// we will send the code in this folder to our final users
// it created a new index.html and a bunch of JS files
// it is script.(alphanumericstring).js
// this new script is the bundle itself
// when we examine this new script file we see that it includes some of the stuff we have in our other modules:
// 'Importing module'
// the cloneDeep function
// a lot of code created by Parcel
// in real world programming, we will not be looking at this code
// this is just to show that all of it is now there
// all the cod we had before spread across multiple modules is now all in this script, which was the goal we had
// unused code has probably not yet been removed, but we will leave that for later
// that will come in the build step
// right now we are in the development step
// in order for us to be able to check the code during development, it will not compress everything
// whenever we now save this file, it will reload, just as it did before with our live server
// in Parcel, we can activate something even better, which is called hot module replacement
// we can write in the code:
// if(module.hot) {
//     module.hot.accept()
//     }
// this code that only Parcel understands
// it won't make it into our final bundle because the browser won't understand any of it
// hot module reloading means that whenever we change one fo the modules, it will then trigger a rebuild
// but that new modified bundle with automatically get injected into the browser without triggering a whole page reload
// it will be most helpful for maintaining state on our page whenever we are testing something
/ in our Bankist application, for example, whenever we reloaded the page, we needed to log into the application again
// with Parcel, that won't happen as the page won't reload and the state will be maintained
// we first included cloneDeep from Lodash in the code like so:
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// this is quite cumbersome
// that's why in all module bundlers there is no need to specify the entire path to any module
// instead, with Parcel, we can write:
// import cloneDeep from 'lodash-es';
// Parcel will then find the path to this module and import it, which is a lot more useful than before
