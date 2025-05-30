
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
// all we need to say is that we want to include the Lodash library
// Parcel will then find the path to this module and import it without us having to tie up the entire parth to there
// this is a lot more useful than before and works with all kinds of assets:
// HTML, CSS, SAS files, images, and all kinds of modules
// not only ESX modules, this will work with CommonJS modules
// instead of importing an -es version of Lodash, we simply import it like this:
// import cloneDeep from 'lodash';
// just a regular version of Lodash
// Parcel is smart enough to then automatically install this package here
// that way we can use all the modules available on NPM and which still use the older module format
// the cart keeps growing and growing
// we are adding the same products over and over again -- bread, apples, pizza
// this is the observable result of hot module replacement: the state being maintained whenever we reload the page
// we first executed Parcel by entering:
// npx parcel index.html
// there is a second way to execute Parcel by using NPM script
// NPM scripts are another way of running locally installed packages in the command line
// they allow us to automate repetitive tasks
// we then don't have to write npx parcel etc. in the command line every time we want to use it
// we can simply create a script in package json:
// "scripts": {
//  "start": "parcel index.html"
// }
// we write the name of the script in double quotes
// the default here is "start"
// the script is simply "parcel index.html"
// we can't write this command directly on the command line, be we can write it in the NPM script
// in the console, we can now run this command:
// npm run start
// it's doing the same thing as before but now we have a simple command whenever we want to start Parcel whenever we want to start developing
// when we are done developing our project, it is time to build the final bundle
// a bundle that is compressed and from which dead code has been eliminated
// for that we use another Parcel command in package json scripts:
// "scripts": {
//  "start": "parcel index.html",
//  "build": "parcel build index.html"
// }
// in the command line:
// npm run build
// because this action is doing a lot more work behind the scenes, it may take some time to complete
// in the console we get a nice output with the sizes of everything
// looking in our dist folder, we see that the HTML looks different
// it is compressed now
// we can ship this script to the browser and to our users
// if we look closer at the HTML script itself, we again see that it is very different
// everything is compressed into an unreadable mess
// the compression delivers a lot more performance than the script we had before
// that is why Parcel does this for us
// we can install packages globally:
// npm i parcel -g
// the g stands for global
// this is the manner in which we installed the live server package
// because of that, we were then able to use live server in every directory on our computer
// the big difference between globally and locally installed packages, especially tools like Parcel or live server, is that we can use the global tools directly in the command line without the intermediate step of an npm script
// most of these tools, however, advise developers to install them locally so they can always be in the latest, up to date version
// Jonas recommends that too


// Configuring Babel and Polyfilling

// now that we hav activated bundling, it's time to configure Babel to transpile our modern code back to ES5 code
// this is still important even years since the new ES6 standard was released
// many users out there are stuck on Windows XP or Windows 7 computers and can't upgrade their old browsers
// we want our applications to work for everyone, so we need to keep everyone in mind
// the good news is that Parcel automatically uses Babel to transpile our code
// we can configure Babel a lot if we want to, defining exactly what browsers should be supported, but that's a lot of work which we don't want
// instead, Parcel makes some very good decisions for us by default
// we will mainly just go with these defaults
// a very broad and general overview of how Bable works from its website babeljs.io:
// Babel works with plugins and presets that can be configured
// a plugin is specific JS feature that we want to transpile (to convert)
// for example, let's say we only want to convert arrow functions back to ES5 but leave everything else in ES6, for example, const and var declarations
// usually that doesn't make sense because we want to transpile everything at the same time
// instead of using single plugins for each of these features, Babel uses preset
// a present is a bunch of plugins bundles together
// by default, Parcel is going to use the preset-env
// preset-env will automatically select with JS features should be compiled based on browser support
// this will happen automatically
// out of the box, Babel will convert all features so only browsers that are barely used anymore with market share of less than 0.25% will not be supported by transpiling with this preset
// run npm start script again:
// npm run start
// now we can look at our final script.alphanumeric.output:
// our previous one was compressed which was not helpful
// right away we can see that ES6 is no longer there:
// var instead of const
// concat method instead of template literal
// everything we used from ES6 is now gone
// something important:
// let's write some code which isn't part of this preset 
// this preset -env only includes final features that are already part of the language having passed the four stages of the AGMA process
// previously we used class fields, which at them time of recording were only at Stage Three
// let's see how we could transpile class fields as well with a simple example here
// in script.js:
// class Person {
//  greeting = 'Hey';
//  constructor(name) {
//      this.name = name;
//      console.log(`${this.greeting}, ${this.name}); 
//  }
// }
// const jonas = new Person('Jonas');
// apparently, this does work now
// searching the code for Person we can see that class has been converted to ES5 so the class kw is nowhere to be found anymore
// our entire code was converted to this
// previously, in order to make the code work, we had to include a class-properties plugin as it was still an experimental feature
// that's no longer necessary
// another experimental plugin:
// nullish-coalescing-operator
// console.log('Jonas' ?? null);
// this one works now as well
// use the ES6 find method to find products in a cart that are entered more at least twice:
// console.log(cart.find(el=>el.quantity >= 2));
// use "el.quantity >= 2" to search for the code
// when we find it, we see that the arrow function we had is gone and has been replaced by a regular function
// however, the ES6 find method is still here: it has not been converted to ES5
// same is true with other programming
// promises, for example:
// Promise.resolve('TEST').then(x => console.log(x));
// this immediately resolved promise works because our browser understands ES6
// it is also not converted to ES5
// that is because Babel can only transpile ES6 syntax: arrow functions, classes, const, spread operator, etc.
// things that have an equivalent way of writing them in ES5: the arrow function can be written in a different syntax
// Babel can write function instead of that
// it can convert const to var
// the same, however, is not true for really new features that were added to JS such as find and promise -- these cannot be transpiled
// only syntax is easy to convert and easy to compile
// however, all hope is not lost
// for these added features such as promises or all the array methods like find and a bunch of other stuff, we can polyfill them
// Babel used to do polyfilling out of the box some time ago
// recently they started recommending another library
// we now have to manually import data
// core-js is the name of the library
// and we usually only want to import a part of it called Stable
// import 'core-js/stable';
// Parcel is usually smart enough to install this automatically
// to manually install it:
// npm i core-js
// we're starting to see that these things change all the time
// even Jonas gets confused sometimes over why certain things used to work but now work differently
// the good thing is you don't have to really understand all of this
// it's more like a recipe you follow
// with time, that will become a routine and simple
// the code we had before is still there, still the same
// find and promise have not been replaced
// polyfilling recreates the find function and makes it available in this bundle so that the code can then use it
// search for Array.prototype, where all array methods are, and then Array.prototype.find
// finding it, we see that Babel uses weird create methods
// these will implement Array.prototype.find as well as find index, every filter map and also for each (even though these are not ES6 but for some reason are polyfilled here)
// polyfill is going to polyfill everything, even if we don't need it
// findIndex, every and some methods are also polyfilled, although we're not using them
// we could cherry-pick the features we do want to polyfill
// it's more work, but it can greatly reduce bundle size
// to cherry-pick:
// import 'core-js/stable/array/find'
// now only the find method appears polyfilled
// you can do the same for promise:
// import 'core-js/stable/promise';
// that's going to be a lot of work which we usually don't do
// but it is possible if you are really worried about your bundle size
// finally, there is one feature not polyfilled by core-js/stable
// we always need to install one more package:
// npm i regenerator-runtime
// and then include it in the code:
// for polyfilling async functions
// import 'regenerator-runtime/runtime';
// confusing, but it's a recipe we have to follow
// usually we include imports at the top of the file, but in this case we can leave them lower down because they will be hoisted anyway


// Writing Clean and Modern JS

// Write Readable Code
// write code so that others can understand it
// write code so that you can understand it a year later
// avoid too clever and overcomplicated solutions, code that might make you feel like very smart as a developer but also make your code very confusing and unreadable
// use descriptive variable names: what they contain
// use descriptive function names: what they do

// General
// use DRY (don't repeat yourself) principle (refactor your code)
// don't pollute global namespace; instead, encapsulate you data into functions, classes or modules
// never use var; use const, and only if you want to change a variable, let
// use strong (triple: === and !==) type checks over double, which do not perform type checks

// Functions
// Generally, functions should only do one thing
// may have to break this rule, but you should try to write small functions that only do one thing but do it really well
// Don't use more than 3 functions parameters in a function
// in line with previous guideline, as a function doing only one thing won't need many parameters
// Use default parameters whenever possible
// Generally, return same data type as received
// if you receive two or three numbers as an input to a function, then you will want to return a number as well, so it makes more sense when you consume the function later
// again, a rule you can break, but better to keep it in mind
// Use arrow functions when they make code more readable
// one great use case is in the callback functions of array methods

// Object-Oriented Programming
// Use ES6 classes in order to implement OOP in JS
// Encapsulate data that shouldn't be accessible from the outside the class so that you don't mutate it
// you will probably need to manipulate some data that's in the class, but for that you should implement a public API -- a few methods that can manipulate the data as you want it to be manipulated
// Implement method chaining where it will make sense
// it will make your methods way easier to use for you and for other developers on your team
// Do not use arrow functions as methods in regular objects as you won't get access to the this kws of those objects
// even if your'e not using the this kw in a method, by avoiding arrow methods in these situations you'll get into the habit of not committing this mistake

// Avoid Nested Code
// nested meaning writing code inside of blocks inside of other blocks -- really bad for readability
// Use early return (guard clauses) in case some condition is not met
// Use ternary (conditional) or logical operators instead of if (which creates a new code block)
// Use multiple ifs instead of if/else-if
// Avoid for and for of loops, use array methods instead such as map, filter and reduce
// Avoid callback-based asynchronous APIs

// Asynchronous Code
// Consume promises with async/await for best readability
// not using the then and catch methods, because these actually require callback functions which will introduce even more nested code
// Whenever possible, run promises in parallel using the Promise.all combinator function
// when you have two Promises that can run at the same time -- Promises that do not depend on each other -- running them in parallel will make the application a little faster for your users 
// Handle errors and promise rejections


// Let's Fix Some Bad Code: Part 1

// let's look at some bad code that doesn't follow any of the principles or guidelines above and start fixing it
// the code we're going to fix is here:

/*
var budget = [
    { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
    { value: -45, description: 'Groceries 🥑', user: 'jonas' },
    { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
    { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
    { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
    { value: -20, description: 'Candy 🍭', user: 'matilda' },
    { value: -125, description: 'Toys 🚂', user: 'matilda' },
    { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
  ];
  
  var limits = {
    jonas: 1500,
    matilda: 100,
  };
  
  var add = function (value, description, user) {
    if (!user) user = 'jonas';
    user = user.toLowerCase();
  
    var lim;
    if (limits[user]) {
      lim = limits[user];
    } else {
      lim = 0;
    }
  
    if (value <= lim) {
      budget.push({ value: -value, description: description, user: user });
    }
  };
  add(10, 'Pizza 🍕');
  add(100, 'Going to movies 🍿', 'Matilda');
  add(200, 'Stuff', 'Jay');
  console.log(budget);
  
  var check = function () {
    for (var el of budget) {
      var lim;
      if (limits[el.user]) {
        lim = limits[el.user];
      } else {
        lim = 0;
      }
  
      if (el.value < -lim) {
        el.flag = 'limit';
      }
    }
  };
  check();
  
  console.log(budget);
  
  var bigExpenses = function (limit) {
    var output = '';
    for (var el of budget) {
      if (el.value <= -limit) {
        output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
      }
    }
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
  };
  */

// open up console where Parcel is still running
// stop it with Control + C
// open up index.html and comment out the inclusion of script.js
// in its place:
// <script defer src="clean.js"> </script>
// in console run:
// live-server
// we will run Live Server over instead of Parcel because now there is nothing to bundle
// all we want is to look at our code in a very simple way
// we can close the Parcel tab which runs on Port 1234
// instead look at Port 8080 where Live Server is running
// next, we analyze the code we want to fix
// a very simple budget application which has an object called budget
// it contains a few objects, each of them an entry in the budget
// each has a value, a description, and a user who created the entry
// a negative value is an expense, for groceries for example
// a positive value is for income from salary or fee paid or proceeds from a sale
// down lower, we have a simple object which contains spending limits per user
// lower still, we have a function, "add," to add a new entry to expenses
// here we see the first of bad practices -- a function name that isn't descriptive of what it does
// to fix it, we'll rename the function "addName"
// change it by selecting a "var" and then pressing Command + D (Add Next Occurrence) to select all occurrences of "var"
// check function
// will check the budget to see if any of the expenses submitted are over the defined limit
// if an expense is, the function will flag it by adding a limit string to a new flag property on the budget entry
// addExpense checks if the new expense is below the limit
// big expenses function
// logs all big expenses
// we pass in the limit and the funciton will go through all the expenses and log the big ones in a particular way
// if we call the function using 1000 as the limit:
// bigExpenses(1000);
// the function only prints only the emoji for each expense that is 1000 or over
// fixing var kws
// select one, then Command + D to select the rest, changing them to const
// only one should not be left as a const:
//  var lim;
//  should be converted to:
// let lim;
// fixing limits name:
// isn't really meaningful
// Command + D to select all occurrences of limits and change to spendingLimits
// makes the code more readable and easily understandable, especially when we look at it in the future
// console error messages for these lines of code:
// const check = function() {
//  for (const el of budget) {
//      const lim
// here, const needs to be let 
// and here, too:
// const bigExpenses = function(limit) {
//  const output = '';
// the const output should be let output
// next, we this check:
// if (!user) user = 'jonas';
// this is like setting a default parameter
// if, according to the check, the user is not set, it should then be set to 'jonas'
// it does work: when "Pizza" is added without the third argument -- which is the user -- the user is automatically set to 'jonas'
// however, whenever possible, we should use native language features, in this case, default parameters
// remove if user check statement and for:
// const addExpense = function(value, description, user)
// set the default parameter:
// const addExpense = function(value, description, user = 'jonas')
// fixing ugly nested code:
/*
var lim;
if (limits[user]) {
    lim = limits[user];
  } else {
    lim = 0;
  }
*/
// it looks like it was written by a complete beginner
// instead of using nested code and huge if/else statement with all of the block in it, let's use a nice and declarative ternary operator
// change lim to limit for variable name, as lim isn't descriptive
// analyze first what happens here:
// the function receives a user, then we check if there is a property with the name of user in spendingLimits
// if the default argument here is jonas, then there is a spendingLimits.jonas
// in this case, the limit will be set to that value, 1500
// otherwise, if the name doesn't exist, the limit will be zero
// therefore, the expense will not be added in this check
// if jay is trying to add a new expense, the limit of jay will be zero, since jay doesn't exist as a default argument, therefore he won't be able to add any expense
// replace above let lim with:
/* 
const limit = spendingLimits[user] ? spendingLimits[user] : 0;
*/
// we check if user exists; if it does we then return it; otherwise, we just return zero
// change lim to limit:
/*
  if (value <= limit) {
      budget.push({ value: -value, description: description, user: user });
    }
*/
// the ternary works fine but we can make it even more clever
// we shouldn't write code so clever that we can't understand it
// use code here that is clever in a way that's not too bad: optional chaining
// const limit = spendingLimits?.[user] ?? 0;
// we can even use this with record? notations
// we ask for the user property, if there is one with this name (jonas, in this example), then spendingLimits?.[user] will become that value
// if not it will be undefined
// in this case, set to zero
// for this, we use the knowledge coalescing operator introduced in ES2020
// huge additions to the JS langauge that are used all the time, so a good idea to get used to writing code like this
// our result will be exactly the same
// in the case that the value is below the limit, a new object is then created and pushed to the budget array
// the value will be negative -- all the expenses are negative while the incomes are positive
// we can improve the above code where description equals description and user equals user, which isn't necessary
// with enhanced object literal syntax, we don't need to repeat that
// if the property name is the same as the variable name, we can change the above to:
// ({ value: -value, description, user });
// and the result will be the same
// this function checks all the expenses to see if any of them exceeds the spending limit:
/*
const check = function () {
    for (const entry of budget) {
        let lim;
        if (spendinglimits[entry.user]) {
          lim = spendinglimits[entry.user];
        } else {
          lim = 0;
        }
*/
// the name is not ideal, so let's call it:
// const checkExpenses = function ()
// this function loops over all of the entries in the budget which are called el for element
// change el to entry, for budget entry -- that makes more sense
// we get the spending limit from the spendingLimits object
// no user is passed in but the username is obtained from each of the budget entries
// above code is very similar to the code we replaced with the ternary
// therefore we can replace it with this ternary:
// const limit = spendingLimits?.[entry.user] ?? 0;
// we can improve this a little bit more, because this code is essentially the same as the previous ternary
// remembering the DRY principle -- we do not want to repeat ourselves -- we should refactor this code into its own getLimit function
// for simpler functions, it makes sense to use an arrow funciton
// const getLimit = user => spendingLimits?.[user] ?? 0;
// however, we can get rid of this above block of code entirely because the only thing we have in the loop is the one declaration
// the ugly braces can be removed too:
/*
const checkExpenses = function() {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
*/
// we can do the same here, taking:
// const limit = getLimit(user);
// and putting it here:
// if (value <= getLimit(user)) {
//  budget.push({ value: -value, description, user });
// the bigExpenses function logs a string to the console
// therefore, let's improve its name to:
// const logBigExpenses = function(limit)
// the limit in this function seems like it might apply spending, but it doesn't
// it's an arbitrary limit we pass in to see any expenses greater than its value
// let's rename it bigLimit
/*
const logBigExpenses = function(bigLimit)
  let output = '';
  for (const el of budget) {
    if (el.value <= -bigLimit) {
      output += el.description.slice(-2) + ' / ';
    }
  }
*/
// change above el to entry:
// for (const entry of budget) {
//  if (entry.value <= -bigLimit) {
// we can transform the below string into a template literal:
/*  
    if (entry.value <= -bigLimit) {
      output += entry.description.slice(-2) + ' / ';
      // emojis are 2 characters
    }

    // now becomes:
      output += `${entry.description.slice(-2)}
*/
// an observation: we are taking the emoji out of the string which is entry.description by getting the last two characters
// this is because emojis count as two characters
// if the (-2) were instead (-1), the console log would show a weird character instead of the emoji
// the below line is a small hack:
// output = output.slice(0, -2);
// it removes the terminal / in the console log
// we'll use it for now and fix it in a future lecture
// getting rid of the "ugly" if by transforming it into a ternary operator
// we do that by adding something to the output conditionally
// in case the entry value is less than the limit, we want to add this
// otherwise, we don't want to add anything, so, just an empty string
//     for (const entry of budget)
//      output += 
//        entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
// this looks better, is more declarative and more readable


// Declarative and Functional JavaScript Principles

// there is currently a major trend and shift towards declarative code and functional programming in JS
// there are two paradigms for writing code in programming: imperative and declarative
// whenever we write imperative code, we need to explain to the computer HOW to do certain things, every single step the computer needs to follow in order to achieve a certain result
// using the example of someone baking a cake, we would tell them exactly the step-by-step recipe they would follow in order to arrive at a baked cake in the end
// bringing it back to code, we'll use the example of trying to double the R array:
/*
const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++)
  doubled[i] = arr[i] * 2;
*/
// this is a purely imperative way of writing that:
// telling the computer to create an empty array, to create a counter starting at zero, then increasing the counter until we reach the length of the original array, then how we store the new result in each new position of the array
// we give the computer a lot of steps in order for us to achieve the result of doubling that R array
// with declarative programming, the programmer tells the computer only WHAT to do, simply describing the way the computer should achieve a certain result
// the how it should do it, however, the step by step instructions, gets abstracted away, so we do not care about them
// going back to the cake example, the declarative way of instructing someone to bake it would be to describe that cake to the person, and then they would come up with the step by step recipe on their own
/*
const arr = [2, 4, 6, 8];
const doubled = arr.map(n => n * 2);
*/
// we are simply telling the computer to map the original array onto a new one and doubling all its elements
// the detailed steps in the imperative example have been abstracted away
// more and more, this is how modern JS code is being written
// the declarative paradigm is a very popular one
// it has given rise to a sub-paradigm called functional programming
// it is a declarative paradigm
// it is based on the idea of writing software by combining multiple so-called pure functions while avoiding side effects and mutating data
// we've been using it all along without calling it out
// Side effect: modification (mutation) of any data outside of the (scope of a) function (mutating external variables, logging to console, writing to DOM, etc.)
// Pure function: function without side effects. Does not depend on external variables nor does it manipulate them. Given the same inputs, always return the same outputs.
// functional programming is about avoiding mutating data; we do this by using something called immutability
// in functional programming, state, which means data, is never modified
// in an application, we will have an object in it to keep track of all the data we need to use in the applications -- that is called state
// in functional programming, that state is never modified
// instead, we copy that object with that state, the copy is then mutated and can then be returned but the original state is never touched
// the big upside of immutability is that it makes it so much easier to keep track of how data flows through our entire application
// overall, we can write better code with fewer bugs that is more readable, which is the goal of functional programming
// functional programming is a huge paradigm that is really difficult to implement in practice
// it is nonetheless very important to know some of its principles -- side effects, pure functions, immutability, as many of the popular libraries, such as React and Redux, are built around them
// in React, for example, the state is completely immutable, so to learn it, understanding that concept is paramount to using it properly
// some principles, such as pure functions or side effects, can be easier to implement in our own code
// we can mix imperative and declarative programming in our own code -- we don't to be 100% declarative, 100% of making our code completely functional
// we can start using some of the functional programming techniques in our own code base
// for example, we can try to avoid data mutations as often as possible
// not always possible, not even really necessary, but these are mainly suggestions that will create better, cleaner and more readable code
// always prefer built-in methods or functions that don't produce side effects over the ones that do 
// this is very important for data transformations
// for these, you should use methods such as .map(), .filter(), and .reduce()
// these three methods are present in all functional programming languages
// they are very important in implementing more functional and declarative code
// finally, you can try to avoid side effects in functions you write yourself
// again, not always possible, and not always necessary either
// the application, at some point, needs to do something: display something on the DOM, log something to the console, or create some kind of a side effect
// functional programming is only a part of writing declarative code
// to write more declarative code, you should use:
// array and object destructuring whenever that's possible
// the spread operator
// the ternary operator
// and template literals
// all of these are more about telling the code what to do and not the precise steps it should follow to do so


// Let's Fix Some Bad Code Part 2

// focus on 3 big areas of functional JS:
// 1) immutability
// 2) side effects
// 3) making data transformations using pure functions such as map, filter, and reduce

// 1) immutability: in JS there's a way to make a data structure -- an array or object -- immutable
// const spendingLimits = {
//  jonas: 1500,
//  matilda: 100
// };
// becomes:
// const spendingLimits = Object.freeze ({
//  jonas: 1500,
//  matilda: 100
// });
// we call the function Object.freeze()
// into that function we pass in the object we want to make immutable
// doing so with spendingLimits means we can no longer put any new properties into it
// this works best in strict mode, so make sure to activate it on Line 1 of your script:
// 'use strict';
// what happens, then, when we try to add a new property:
// spendingLimits.jay = 200;
// with 'use strict' will result in logging of an error:
// "Uncaught TypeError: Cannot add property jay, object is not extensible"
// as an array is also an object, we can also use Object.freeze on it:
// const budget = Object.freeze([]) 
// we start running into trouble here because lower in the code we are trying to push something into the array, but that's no longer possible because we've made it immutable by using Object.freeze()
// so now this code is no longer working
// we cannot add new elements to this object now -- that was the reason for the error we saw
// however, Object.freeze() only freezes the first level of the object
// it's not a deep freeze, because we can still change objects inside of the object
// for example:
// budget[0].value = 10000;
// the value will indeed change
// what you cannot do, however, is add a completely new element:
// budget[9] = 'jonas';
// that will not work -- no new element is added to the array
// there are third-party libraries which implement a deep freeze, but we'll not use them in this example
// why does this function create this error and how do we fix it?
// right now, addExpense is trying to mutate the outside object budget
// in other words, this function has a side effect -- something outside of the function is manipulated or the function does something other than simply returning a value
// a function that produces a side effect is called an impure function
// addExpense is an impure functions as it is attempting to manipulate and mutate this budget object located outside of it
// how do we fix that?
// first, as a good practice, we should always pass all the data a function depends on into the function so that it doesn't have to reach for it into the outer scope
// second, the function should not change any of these values, mutate them
// that's the reason we made this object immutable, so we cannot by accident mutate this object
// remember that the solution is to create and return that copy of the state, of the data
// we will start here:
// const addExpense = function (value, description, user = 'jonas') {
//  user = user.toLowerCase()
// first thing, we pass in a variable called state and another called limits:
/* const addExpense = function (
    state,
    limits,
    value, 
    description, 
    user = 'jonas'
  ) {
*/
// state will be the budget object and limits will be the spending limits
// we will pass all of that into all three of the function calls:
/*
add(budget, spendingLimits, 10, 'Pizza 🍕');
add(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
add(budget, spendingLimits, 200, 'Stuff', 'Jay');
*/
// this does not fix the error but we are working in the right direction
// we should not, as per a previous lecture, pass in more than three arguments into a function
// here we have five parameters but sometimes it's not a big deal to break those rules
// we could also pass in one object of options, but let's keep it simple here
// below, we are clearly manipulating the user variable:
// user = user.toLowerCase()
// as we learned previously, we should avoid these data mutations whenever possible
// instead, let's create a new variable:
// const cleanUser = user.toLowerCase()
// this is the whole reason why 'Matilda' with the capital M still works
// without this piece of code, it wouldn't work because Matilda is uppercase while above, in the object, it is lowercase
// the uppercase would therefore not be found while searching for the lowercase
// therefore, we will always convert everything to lowercase so it then corresponds to the object keys we have above
// we now change user to cleanUser:
// if (value <= getLimit(cleanUser)) {
//  budget.push({ value: -value, description, user: cleanUser });
//  }
// };
// we want to replace this manipulating of the object by creating a new object based on the state we receive:
// budget.push ({})
// we want, instead, to return an empty array  and we use the spread operator to put all of the elements of the state in it
// return [...state]
// this effectively creates a copy of this state array
// now all we need to do is add the object which we had before:
// return [...state, { value: -value, description, user: cleanUser }];
// now, calling the addExpense function will no longer mutate the budget object
// therefore, if we want to do something with the new budget, we will need to store that somewhere
// const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
// logging newBudget1 to console shows that it works
// what happens if this: 
// if (value <= getLimit(clean User)) {}
// turns out to be false and the below code doesn't run?
// return [...state, { value: -value, description, user: cleanUser }];
// test it by making pizza very expensive -- 10000 -- and we now get undefined, which isn't good
// in this case, what should we return?
// we should return the original state, so the original budget
// in that case, addExpense will always return something: either the original budget or the one with the new expense added to it
// to clean up the code, we'll use the ternary operator as it is a lot more declarative than the old school if-else statement
// we'll move the return in front
// return value <= getLimit(cleanUser) ? 
//  [...state, { value: -value, description, user: cleanUser }] : state;
// it now updates our budget in a functional way
// the function no longer produces side effects -- it is now a pure function
// the next addExpense call is:
// addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
// should we pass budget into this one?
// we shouldn't, because this one will then act on the original budget
// the previous expense we just added won't be in there
// how we solve this is to pass in the result of the previous operation, newBudget1:
/*
const newBudget1 = addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newBudget2 = addExpense(
  newBudget1, 
  spendingLimits, 
  100, 
  'Going to movies 🍿', 
  'Matilda'
  );
*/
// in the real world, we would use something called composing and a technique called currying to create this chain of operations
// here we need all of these intermediate variables to create a new budget
// we call this once, store the result in a new variable
// for the next call, we use that previous variable
// then, again, in the next call, we use that previous variable again
// it would be nice to automatically use the previous result for the next operation
// in a real world, big, functional application, we would use composing to create one function to perform all of these operation at once

// Data Transformations
/*
const checkExpenses = function() {
  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
*/
// above, we have a for-of loop we can easily transform into a function
// it loops over all of the entries in the budget
// it loops over an array and in each iteration the current entry is one of these entry objects
// this loop will update each of the objects to contain the flag attribute whenever a value is over the limit
// this function is an impure one because it manipulates the object itself
// therefore, let's transform this function into a pure one
// we want to pass in all the data the function depends upon, in this case, Budget3, so newBudget3
// getLimit uses the spending limits from the outer scope, which is something we do not want
// let's add the limits as another parameter, limis and user
// from:
// const getLimit = user => spendingLimits?.[user] ?? 0;
// to:
// const getLimit = (limits, user) => limits?.[user] ?? 0;
// then pass in the limits here:
// return value <= getLimit(limits cleanUser) ?? [...state, { value: -value, descriptions, user: cleanUser }] : state;
// now the function no longer depends upon any external variable, it can do its work without having to look up on the scope chain
// let's do the same here:
/* 
const checkExpenses = function() {
  for (const entry of newBudget3)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};
*/
// we want to receive a state which we will call state to keep it neutral, as before
// then calling it limits once again
// we want, again, to pass in limits and then the user itself
/* 
const checkExpenses = function(state, limits) {
  for (const entry of newBudget3)
    if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
};
*/
// let's replace this entire loop:
/*
  for (const entry of newBudget3)
    if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
*/
// and instead loop over the state using one of our data transformation functions
// we to keep an array of the same size and to add a property
// we don't want to filter or reduce anything
// so it makes sense to use the map method here which will create a new object, a new array
// that's in the spirit of functional code and immutability
// not mutating the state, but creating a new one based on the original one
/* 
const checkExpenses = function(state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry, user) ? { ...entry, flag: 'limit' } : entry;
  });
};
*/
// let's create a function block above and think about what we want to do
// right now inside this callback, each entry is one of these objects
// we do not want to mutate them
// instead, when this condition is true - when the value is less than the limit - we want to copy the object and add the new property onto it
// previously, we copied the entire array and added a new object
// above, we will copy the entire entry object and add the flag property to it
// we will make the code nicely declarative by using the ternary operator
// if this condition is true, if the value is above the limit, we want to return the original object copied and add the new flag 'limit' property
// otherwise, we want to return the original entry
// to check out the result, we need to store the results in a variable
// we'll call this one finalBudget as we won't create any new budget following it
// const finalBudget = checkExpenses(newBudget3, spendingLimits);
// logging finalBudget shows that flag is set to 'limit,' so it worked 
// and, we didn't manipulate any object - we created a copy and then added the property to it
// above, you might not be used to seeing the return in the map callback function, but that's because we have the function block there
// remember, in the map function, whatever is returned from the callback will be the element in the same position of the new array
// that's why we need the return there
// we can also simplify all of this
// let's transform checkExpenses into an arrow function
// leave the two state and limits parameters in place
// we don't need the return
// we can get rid of the braces and second return as well
// we don't need the semicolon after entry
/* 
const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user) ? { ...entry, flag 'limit' } : entry
  );
*/ 
// important to note once more that we transformed this into a pure function
// it does not mutate anything because the map method returns a brand new array
// we give this function an array and it then creates a new one by mapping over the original one, which creates the array
// and in each position of the array, we either return a copy of the original entry plus the flag property
// or we simply return the original entry as it was
// our function is pure and does not create any side effect nor does it manipulate anything
// our final function:
/*
const logBigExpenses = function(bigLimit) {
  let output = '';
  for (const entry of budget)
    out +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

    output = output.slice(0, -2);
};
*/
// we have a for loop; inside it we are constantly manipulating or mutating its output variable
// that goes against the spirit of immutability
// immutability is not just for objects and arrays; it also goes for regular variaables
// in functional code, you will probably never see the let variable
// data transformation functions for arrays and also for strings
// the current code we're going to rewrite is imperative
// it says, create an empty variable
// then we manually said it should loope over all the entries in the budget array
// whenever we had a big expense, it should then add the emoji to the output variable, a string
// a better way of doing this
// output should be renamed bigExpenses, a better name
// then we want to create a string containing only the emoji
// starting with the filter, entry and the condition are going to be the same
// now we need to get the emojis that are in here out, then create a string based on the result
// we have an array of two with emojis, but now we want to create an array of two only with the emojis
// we'll use map for that
// we want entry.description, then take the last two characters as before
// then we join and have a functional version
/*
const logBigExpenses = function(bigLimit) {
  const bigExpenses = state
  .filter(entry => entry.value <= -bigLimit)
  .map(entry => entry.description.slice(-2))
  .join(' / ');
};
logBigExpenses(finalBudget, 500);
*/
// we can do this in another way
// instead of map and join, we can do it in one go using reduce
// reduce: taking all the values in an array and creating a value out of them, reducing them to just one
// in this case, what we want is our string -- that's going to be the accumulator
// then we have the current value and then the callback, and then the initial value, which going to be an empty string
// we want to return the previous string plus the current string
// we need to say .description.slice
// and add the separator
/*
const logBigExpenses = function(state, bigLimit) {
  const bigExpenses = state
  .filter(entry => entry.value <= -bigLimit)
  .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');
};
logBigExpenses(finalBudget, 500);
*/
// logging to console, this version has an initial slash before the emojis
// removing '' does not solve the problem -- it replaces the initial slash and the first emoji following it with [object Object], which is no good
// only solution seems to be to not use the reduce version
// in conclusion, the logBigExpenses function is not pure
// it's an impure function because it creates a side effect by having the console.log in it
// all console.logs, in point of fact, are impure because they do something in the console
// in this case, they create something in the console, they create input/output
// of course, any program needs to have some side effects, because otherwise what's the of the program in the first place?
// if we didn't have all of the console.logs, how would we even know that the program was running at all?
// we always need some side effects, but in functional programming we try to push these as far to the edge or the end of our program as possible
// without having them all over the place polluting our application
