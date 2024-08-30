
// Modern JavaScript Development

// code used to be written in one or a few big scripts, which would then be sent to a browser
// currently, we divide our projects into multiple modules that can share data between themselves
// this makes our code more organized and maintainable
// a great thing about modules is that we can also inclue third party modules in our code
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

(function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const orderStock = function (product, quantity) {
        cart.push( {product, quantity} );
        console.log(`${quantity} ${product} ordered from supplier`);

        return {
            addToCart,
            cart,
            totalPrice,
            totalQuantity,
        };
    };
}());
