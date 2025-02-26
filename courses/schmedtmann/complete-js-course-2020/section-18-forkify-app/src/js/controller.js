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
