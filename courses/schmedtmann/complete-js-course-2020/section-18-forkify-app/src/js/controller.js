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
// if you're using Parcel v2, remove entry point line entirely
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
// call the function and console log the response and the data
// const showRecipe = aysnc function() {
//  try {
//      const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
//         const data = await res.json();
//         console.log(res, data);
//       } catch (err) {
//          alert (err)
//          }
// };
// showRecipe();
// we already have a result:
// first is the response, this returns a response object
// but then we get the status, which is success, and the data itself
// inside of the data, we get the recipe: cooking time, the ID, the ingredients, the publisher, servings, and so forth
// we started by assuming we will have success with our call
// let's try a call with a wrong ID, one that doesn't exist on the server
// in console, we get "bad request"
// in the response, we see ok is set to false
// this is what we're going to use:
// when ok is set to false, it means that there was some kind of error in the fetch
// we can use that to create our own errors
// more from the response: is says "fail"
// also a message of invalid_id and then the ID that we provided
// the API returns a nice error message -- let's use that
// "bad request" is not a very informative error message; it's way better to use the one the API has returned to us
// that is at .message of this object
// we can say if res.ok is false -- if the response is not okay -- then we want to throw a new error
// then we can use the .message property already coming from the data, from the response of the server
// the ok property is stored in the response itself
// let's also provide the status code which is at res.status
// we already get an error alert window because of the catch error that gets thrown in the try block
// let's format the data a bit more nicely
// we want to create a new object based on this object that has better variable names
// we have, for example, these underscores which are very unusual in JS
// let's create a new recipe variable which should be data
// since we have let recipe = data.data.recipe, that is, recipe on both sides, we can use destructuring:
// let {recipe} = data.data
// we used let for the recipe variable so we can create a new recipe object based on it

// 1) Loading recipe
// const showRecipe = aysnc function() {
//  try {
//      const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886');
//         const data = await res.json();
// 
//         if(!res.ok) throw new Error(`${data.message} (${res.status})`)
// 
//         console.log(res, data);
//         let {recipe} = data.data;
//         recipe = {
//          id: recipe.id,
//          title: recipe.title,
//          publisher: recipe.publisher,
//          sourceUrl: recipe.source_url,
//          image: recipe.image_url,
//          servings: recipe.servings,
//          cookingTime: recipe.cooking_time,
//          ingredients: recipe.ingredients,
//          }
// 
// 2) Rendering recipe
/* const markup = `
            <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">1000</div>
              <div class="recipe__description">
                <span class="recipe__unit">g</span>
                pasta
              </div>
            </li>

            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">0.5</div>
              <div class="recipe__description">
                <span class="recipe__unit">cup</span>
                ricotta cheese
              </div>
            </li>
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `;
        recipeContainer.innerHTML = '';
        recipeContainer.insertAdjacentHTML('afterbegin', markup);
*/ 
//       } catch (err) {
//          alert (err)
//          }
// };
// showRecipe();

// in the console, we see our recipe, just received from the server, nicely formatted
// the path:
// https://forkify-api.jonas.io/api/v2/recipes/
// will take us to all the recipes there are for a certain search query
// https://forkify-api.jonas.io/api/v2/recipes/?search=pizza
// above route is for all pizza recipes
// the query is set to pizza after the question mark
// this is a very common format for sending variables over your URLs
// search is like a variable and pizza is the value


// Rendering the Recipe

// after loading the recipe data from our API, let's now ender it in our application
// we'll go to our HTML file to get the template for that
// we want the recipe class which is the whole gray container that will contain the rendered recipe
// Empty container has shows this message:
// Start by searching for a recipe or an ingredient. Have fun!
// there's also code for a loading spinner, for an error, and for the recipe itself
// loading the recipe was step one and now rendering it will be step two
// for now, we are doing this like a really big function
// once we start thinking about the architecture, we will then break up the code into functions and modules and classes
// for now, as always, we will start by creating a big template literal so we can replace all the data in it as we need
// we switch in the data we need:
// replace string with recipe.image, whose property is a URL pointing to the location of the image on the Forkify API server
// the recipe title we will use in place of the text string and as an alt text of the image
// then we have the clock icon, so the 45 is the cooking time -- we replace it with ${recipe.cookingTime}
// further down we have servings; the static 4 will be replaced with data coming from the recipe object, recipe.servings
// right now we have two list elements for the static ingredients example, one element for each ingredient, but we'll tackle that later
// we change recipe publisher to recipe.publisher
// with the source URL, we have the URL of the recipe itself, where it comes from -- we replace that with recipe.sourceUrl
// before we can see the result, we need to insert this HTML into our DOM
// for that, we can use the insert adjacent HTML method which we need to apply to the parent element
// that's already selected in the uppermost part of the code, the element with the class of recipe
// it's the div element called recipe container where we want to attach the HTML markup
// so recipeContainer.insertAdjacentHTML('afterbegin', markup);
// as a first child and then the markup variable we just created
// this should now render the recipe in the user interface except for the ingredients which, for now, will still be the old ones
// the recipe is displaying nicely already
// although there is still the message from the no recipes saved start of the program
// and all of the icons are missing
// we'll start with removing the message
// before we insert any new markup, we need to get rid of the markup that is already there
// let's simply use recipeContainer.innerHTML and set it to nothing:
// recipeContainer.innerHTML = '';
// now the previous markup is gone
// let's now worry about the ingredients
// we'll need to loop over the ingredients array
// for each, we should create a markup
// we take recipe.ingredients and then loop over that using an array method
// in the end, the expression we need here has to return a string of HTML
// our array method need to return something, therefore, and that means foreach is not the way to go
// instead, we will use map which returns a new array of the same length which, in the end, we'll be able to join
// ${recipe.ingredients.map()}
// now we can loop over the array by specifying a callback function
// each element is going to be called ingredient
// then we can replace a string
/* 
${recipe.ingredients.map(ing => {
    return `
        <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">1000</div>
              <div class="recipe__description">
                <span class="recipe__unit">g</span>
                pasta
              </div>
            </li>
    `
    })}
*/ 
 
