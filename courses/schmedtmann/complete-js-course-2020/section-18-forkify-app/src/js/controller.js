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
