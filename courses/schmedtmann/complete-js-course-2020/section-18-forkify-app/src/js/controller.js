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
