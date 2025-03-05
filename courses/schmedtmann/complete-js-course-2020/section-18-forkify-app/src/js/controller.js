const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////


// Forkify App

// Project Overview and Planning

// this application is all about searching for recipes and displaying them in the user interface
// enter "pizza" into search field and left sidebar appears with results
// when there are more than ten results, they get divided up into multiple pages with pagination functionality allowing you to move from page to page
// clicking on recipe in sidebar, it displays in center right of page
// cooking time, number of servings, ingredients list, the link to the recipe source page are all displayed
// number of servings desired can be increased and decreased which then revised the quantities in the ingredients list
// we can also bookmark recipes -- click on the bookmark icon and now the recipe appears in the bookmarks panel dropping down from the top nav bar
// clicking on the bookmark icon after the bookmarked recipe is displayed removes it from the bookmarks list
// if there are no bookmarks, clicking on the nav bar bookmark icon will display an alert message of that fact
// we can also add recipes
// click on add recipes button in top nav bar
// pops open a recipe window with fields for recipe data
// additionally, all recipes a user uploads themselves will only be visible to them
// such recipes will have an icon attached to them indicating the user themself created it
// also, when you search a term in the app that is related to the recipe you created, it should return that recipe at the top of the results list
// this is because each recipe is associated with a particular fixed developer API key
// we will understand that by the end of the section

// User Stories
// a description of the app's functionality from a user's perspective
// writing these, we have to put ourselves in the shoes of our users
// all the user storie put together will provide a clear picture of how the whole application is going to work
// based on these stories, we'll be able to implement our app's features
// let's say that we are now the project manager for Forkify and don't yet have the final version of the project
// the first user story could be:
// I want to search for recipes so I can find new ideas for meals
// user story format: as a (type of user), I want to (action) so that (benefit)
// second user story:
// I want to be able to update the number of servings so that I can cook a meal for a different number of people
// third user story:
// I want to be able to bookmarks recipes so that I can review them later
// fourth user story:
// I want to be able to create my own recipes so I have the all organized in the same app
// fifth user story:
// I want to be able to see my bookmarks and own recipes when I come back to the app so I can safely close the app after cooking
// we can now use these user stories to come up with the features that we'll need in the application
// first user story features:
// user wants to search for recipes:
// app should have search functionality -- an input field which will send requests to an API with the searched keywords
// app should display the results with pagination, to make it more user-friendly
// app needs to display the selected recipe with relevant data such as cooking time, servings, and ingredients
// second user story feature:
// app needs functionality that will update the ingredient quantities according to changes made by the user to the number of servings
// third user story feature:
// app needs bookmarking functionality that displays a list of all bookmarked recipes
// fourth user story features:
// app should allow the user to upload their own recipes
// app should automatically bookmark these user recipes
// app should only allow a user to see their own recipes, not those of other users
// this feature could ber implemented in a complex fashion, but we will keep it very simple by associating a user's recipes to an API key
// fifth user story features
// app should be able to store bookmark data in local storage
// app should, whenever the page loads, display all the saved bookmarks in local storage for reading
// we take the above list of unstructured features and put it into a nicely structured flowchart
// this will allow us to plan how the application will work exactly
// to start simply, we will only flowchart the first three features
// as always, we will focus on events
// the first event should be the user searching for a recipe
// when a user searches for a certain recipe, we need to asynchronously load the search results from our API and, once the results are in, we render them in our application
// however, we won't render all the search results as that would be overwhelming
// instead, we will render pagination buttons in order to hide at least part of the search results across other pages
// when a user clicks one of the pagination buttons, it will then render the search results of that page
// it will also render new pagination buttons: if we're on Page 2, the backward button will link to Page 1 search results and the forward button will link to Page 3 results
// finally, we need the logic to display the recipe
// when a user selects a recipe, we need to asynchronously load all the recipe data from the API
// once the data has arrived, we render the recipe to the user interface
// we will do the same whenever the page loads with a recipe ID in the URL
// in both cases, we will load the recipe
// these are the core, most important features of the application:
// searching for recipes, rendering those search results, and rendering the individual recipe selected
// these will take us half the next section to implement
// we will start, however, with only the third feature, the recipe display
// this will allow us to implement some functionality and also play around with the applications a little bit without thinking about the architecture and its rigid structure


// Forkify App: Building a Recipe from API

// structure of project files:
// index.html on its own
// all the rest of the files -- four assets -- are in the src folder
// in the src folder are images, JS, and Sass
// for JS, we have controller.js
// Sass is a better way of writing CSS
// has some nice additional features which make writing CSS for a large scale application a lot easier
// browsers don't understand Sass, so it has to be converted to CSS
// Parcel is going to do that for us
// the rest of the files are images and flowcharts and a small architecture diagram
// open up a new terminal
// we initialize a new project by writing npm init
// this command will create a package .json file
// this project should simply be called Forkify version 1.0.0
// description: Recipe application
// test command, git repository, keywords don't matter
// entry point: index.html
// author: your name
// set up Parcel in npm scripts with index.html as our entry point:
// scripts: start: "parcel index.html"
// also add our build script, the command we're going to run at the end when we're already building the application:
// scripts: build: "parcel build index.html"
// in some projects, we don't have an html file, in which case the entry point can be a JS file
// it can also be in a different folder -- we can specify all that in the Parcel command
// to run Parcel, we need to install it
// previously, we installed Parcel by writing npm install Parcel as a dev dependency like this:
// $ npm i parcel -D
// this would install the latest version of Parcel available on npm
// however, Parcel 2 is almost ready, so we want to use the beta version of it now so that the full version of Parcel 2 may be used in the future
// if Parcel 2 was already out, we would write:
// $ npm i parcel@2
// as it's just a beta version, we write @next and add it as a dev dependency:
// $ npm i parcel@next -D
// should show up in package.json as:
// devDependencies: parcel: ^2.0.0-beta.x
// wheter beta or not, for this section, Parcel needs to be 2-something
// we start Parcel by running our npm script, npm run start
// the start script in npm is a special one for which you do not need the word run:
// $ npm start
// will call our start script in package.json:
// scripts: start: parcel index.html
// start script is installing Sass, for which we get an error
// we quit the installation with control C
// then:
// $ npm install
// and this will install Sass for us
// if there is still an error with Sass here, try installing Sass using the exact same version number
// $ npm install Sass 1.26.10
// if you're still running into problems with Sass or Parcel, take a look at the FAQ in the GitHub repo
// having run npm start, we now have a modules folder containing many modules
// we also have a distribution folder
// everything is in one folder:
// our index.html, the compiled version of our controller script
// we have an actual CSS files and we can see all our images
// if we take a look at our index.html:
// it has replaced the controller.js in the source
// there is also the SCSS file
// Parcel knows it needs to compile the Sass file to CSS, so it included that file in the distribution folder and replaced the link to the actual final CSS file
// the same is true of all the images:
// Parcel copied all the images to the distribution folder and gave them a new name and replaced their source in the html
// everything we will develop will be in the source folder and only what we then see in the browser will be coming from the distribution folder
// this is the logic of having a module bundler: it takes our raw source code and compiles it into a nice package in a folder ready to ship to browsers
// (if you're using Parcel v2 (NOT beta version), please defer with type="module")

// we can think about our controller and think about making our first API call
// we can open our page by clicking the link in the console
// when we open our developer tools, we have nothing there as we don't yet have any code
// let us log something to the console to see that our Parcel setup is working

// console.log('TEST');

// in the console, we can see that it already built a new version and that TEST appears
// with everything working, let us now make our first API call
// for this project, Jonas developed his own API so that it wouldn't be dependent on any third party services:
// https://forkify-api.jonas.io
// any good API will have documentation; the above is the documentation for the Forkify API version 2
// search terms in this API are limited to those on the list, but should be enough to test the applications
// you can onlh make 100 API requests per hour in order not to overload Jonas's servers
// the API key is what we will need to upload our own recipes
// main URLs or routes of this API:
// to start, we'll focus on the simple one to get one single recipe
// the path of this part of the API is this:
// https://forkify-api.jonas.io/api/v2/recipes/:id
// if we click on the example of a single recipe API in the documentation, we see the keys and corresponding values for it
// https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886
// for now, this is the URL we will use in our code to get exactly this recipe into our application
// as always, to make an Ajax request to an API, we use the fetch function
// fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
// let's create some function around this, an async function so we can use async await
// let's call it showRecipe
// as always we use a try catch
// and if there is an error, we want to alert that error -- very simple error handling for now
// and now let's await this and store the result in the the res variable, which stand for response
// keep in mind that using the fetch function here will return a promise
// and, since we are in an async function, we can await that promise
// meaning, we will stop the code execution here, which isn't a problem as an async functions only run in the background anyway
// we are not blocking our main thread of execution here
// once we have that result, we then need to convert it to json
// we'll create a data variable and then await the response json
// the json method is available on all the response objects, and a response object is exactly what the fetch function here returns
// we can then call json on that response, which returns another promise which we have to await again
// in the end, we get our data stored to that variable
// const showRecipe = aysnc function() {
//  try {
//      const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
//         const data = await res.json();
//       } catch (err) {
//          alert (err)
//          }
// };
