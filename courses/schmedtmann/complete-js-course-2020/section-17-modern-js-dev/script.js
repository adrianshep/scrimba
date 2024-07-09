
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
