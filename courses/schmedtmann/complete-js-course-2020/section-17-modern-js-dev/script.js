
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
