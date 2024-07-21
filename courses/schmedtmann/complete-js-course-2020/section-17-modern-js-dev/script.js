
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
// this is very important in large projects with hundreds of modules, and that includes third party modules from which we usuall only want a small piece of code and not the entire contents
// by knowing all dependencies between modules before execution, bundlers like webpack and Parcel can join multiple modules together and eliminate that code
