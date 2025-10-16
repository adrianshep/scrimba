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
              <div class="recipe__quantity">${ing.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}}
              </div>
            </li>
    `;
    }).join('')}
*/ 
// let's think about the data here
// each array element is an object which has quantity, unit, and description
// we can say ing.quantity, ing.unit, and finally, instead of pasta, ing.description
// now we have an array in which each element wil contain this markup corresponding to an ingredient
// all we need to do now is to transform that array of strings into one big string
// we can take the result of this map which is that array and call join on it:
//    }).join('')}
// when we save this, then our eight ingredients render in HTML
// switching out the API URL in the fetch renders the other recipe
// the one thing still missing is the icons
// why is that?
// the page displayed in the browser is the HTML from the dist folder
// all the images and assets have been coming from that folder, including icons
// icons have been coming from the icon.svg file
// now, however, the icons are coming from the icons.96fe577f.svg file -- icon search, for example
// however, in our template literal, we are still writing the old path to the icons: src/img/icons.svg#icon-clock, for example
// right now, JS won't be able to find this
// in the dist folder there is no source/image folder in which there is icons.svg as that only exists in our source folder, where we are developing the application
// when we are shipping the application already, we using the data from the dist folder instead
// we need, therefore, a way to tell our JS that the icons file is no longer the former one but the latter
// we can do that with Parcel by importing the icons file
// we go to the top of our file, where like to keep all the imports
// in Parcel, we can import all kinds of assets besides JS files, including images
// if you are running Parcel 1:
// let's import what we'll call icons, but the name can be anything we want
// we need to find a path to the original icons file from where we are in controller.js
// exactly the way we browse the file tree in the terminal:
// we need to go up to the parent folder and to the source folder, the parent of js, and from there, we can go into images and then icons.svg
// import icons from '../img/icons.svg'
// if you are running Parcel 2:
// it works almost the same way
// for any static assets that aren't programming files -- images, videos, sound files -- we need to write url: then the path to the file
// import icons from 'url:../img/icons.svg'
// when logged, icons is revealed to be nothing more than the path to the new icons file:
// http://localhost:1234/icons.96fc577f.svg
// in the path, the local host is our dist folder
// in that dist folder, the 96fc577f icons file -- is the one we need
// everywhere in the rest of our code where it says "icons," we have the old path
// we want to replace it with the new path
// we select all of them using Commmand or Control+D
// if that doesn't work, you can use Control+F to find each occurrence
// we can delete them all and replace them with the new icons variable
// when we render the HTML, we see all the icons are back
// adding a loading spinner, a very common pattern seen in applications
// we will create an external function at the top of the code that will be generic so we may reuse it
// replace old icons path with new
// we add HTML to the DOM as a child of the parent element
/* 
const renderSpinner = function(parentEl) {
    const markup = `
        <div class="spinner">
            <svg>
                <use href="${icons}#icon-loader"></use>
            </svg>
        </div>
    `;
    parentEl.insertAdjacentHTML('afterbegin', markup);
}
*/
// why this is going to work:
// in the CSS, we see that the icon inside the spinner class has a rotation animation that keeps going forever
// that's the infinite attribute in the animation property
// Jonas created this rotation animation manually using key frames
// it rotates the element to 360 degrees
// before we insert the above code, we should clear the parent element
// as before, we set the inner HTML to nothing
// parentEl.innerHTML = '';
// then we render the spinner:
// renderSpinner(recipeContainer);
// for testing it in the console, the slow 3G setting will allow the spinner to appear a bit longer
// to finish this section, we will add polyfills for ES6 features to our code base
// to do that, we install some special packages called npm core-js
// we can install multiple packages at the same time by appending "regenerator-runtime":
// $ npm i core-js regenerator-runtime
// in package.json, they should show up under dependencies: core-js and regenerator-runtime
// then we import them at the top of our file below 'import icons from...'
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// 'regenerator-runtime/runtime' is for polyfilling async/await
// core-js/stable is for polyfilling everything else
// we could cherry-pick some features and only import those, but it's simpler to polyfill everything
// when we test in the console, we see that everything is working


// Listening for Load and Hashchange Events

// let's now add some event listeners to our application and simulate that we already have some search results in place
// going by our flowchart, we already implemented the loading of a recipe and the rendering of it
// now we want to hook up two event listeners so the recipe is loaded upon either of the two events happening: the user selects recipe from the results list or the page loads with recipe ID
// clicking on a recipe, its URL contains a hash symbol #
// everything that comes after the # symbol is called the hash
// whenever that hash changes, a new recipe is going to be loaded
// that changing of the hash is an event for which we can listen
// we can listen for that hash-change event, take the hash, then from there take the ID, then load the recipe with that ID
// to start, we need a way of triggering a change of the hash
// we can do that by adding a fake link in the search results in index.html:
// <a href="#alphanumericstring1">RECIPE 1</a>
// now there is a very small link on the HTML page that, when clicked, changes the hash
// we add a second one:
// <a href="#alphanumericstring2">RECIPE 2</a>
// clicking either of these changes the hash
// we can listen for that change with an event listener at the bottom of the controller.js code
// the name of the event is 'hashchange'
// window.addEventListener('hashchange');
// the function we want to run then is showRecipe
// we will remove it from just above and only run it whenever that hash changes:
// window.addEventListener('hashchange', showRecipe);
// the next step is to get the recipe ID from the hash
// regardless of which sidebar link the user clicks, the same recipe will load as the same ID is hard coded in them
// instead, we want to show the recipes corresponding to unique IDs
// we want to get the ID dynamically from the hash
// we can do that from inside the try
// the ID is window.location, the entire URL, and from there we take the hash
// try {
//  const id = window.location.hash;
// }
// if we log the id, we see:
// #5ed6604591c37cdc854bc886
// which is the ID preceded by the hash symbol
// we want to remove that first character that is the hash symbol, starting to read from the string at the first position
// we can do that with the slice method, starting at one and going all the way to the end
//  const id = window.location.hash.slice(1);
// instead of hard-coding the ID, we use:
// const res = await fetch(
//  `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
// );
// what happens if we take the entire URL, copy it, and try to open it in another tab?
// no recipe shows up at all
// we opened the page, but this time, the hash didn't change nor did we change it
// so we also want to listen for the load event, that is, the event of the entire page loading
// we add a new addEventListener by copying the original addEventListener and replacing 'hashchange' with 'load':
// window.addEventListener('load', showRecipe);
// but this would create unnecessary duplicate code
// we can do both event listens at the same time
// imagine the difficulty if you had ten events for which you wanted to listen
// instead, we can do an array which contains the two events, 'hashchange' and 'load'
// we can loop over this array and do something using forEach
// in this array, each element is an event, ev for short
// then we add window.addEventListener and then the event and then the handler function
// in the first iteration, the ev will be hashchange and, in the second, it will be load:
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));


// The MVC Architecture

// we've already implemented part of the Forkify application, but at this point it has no structure
// it's now time to address this project's architecture and software architecture in general
// why do we even need an architecture when we build software?
// first, the architecture will give our project the structure in which we can then write the code
// structure means how we organize and divide the code into different modules, classes, and functions
// all these hold our code together and give it structure
// the second reason is maintainability
// when we build a project we always need to think about the future and keep in mind that the project is never really finished
// we will always need to change things about the project in the future and we will need to maintain it
// and that only works if the project is nicely structured
// plus, we might want to add new features to the project, which brings us to the third reason, expandability
// this is the ability to easily add new features in the future, which is only possible with a good structure and a good overall architecture
// the perfect architecture is one allowing for all three of these characteristics of structure, maintainability, and expandability
// in order to achieve that perfect architecture, we can create our own from scratch, as we did in the Mapty project
// however, that only works with a really small project
// when a project grows more complex, it will be very hard to achieve a good architecture for it on our own
// instead, we can opt for a well-established architectural pattern that developers have been using for years and even decades
// exmaples are: Model View Controller, Model View Presenter, Flux, and many others
// we will do that here with the Forkify project, as it's a bit more complex than the Mapty project
// these days, in modern web development, many developers use a framework like React, Angular, Vue or Svelte to take care of the architecture for them
// in those cases, developers don't have to think a lot about architectures on their own
// this is a good idea at a certain point, especially for large scale applications
// however, it's very important that you really know JS before switching to these frameworks, including how to implement an architecture by yourself
// this will make it much easier to learn React or Vue or whatever framework you choose later
// wherever it comes from and whoever develops it, there are some components that any architecture must have:
// business logic, state, an HTTP library, application logic, and presentation logic
// business logic:
// all the code that solves the actual business problem
// the code direclty related to what the business does and what it needs
// if your business is WhatsApp, your business logic will include sending messages
// if your business is a bank, its business logic will cover how to store transactions
// if your business is a budget manager, your business logic will include calculating taxes
// business logic is the logic that solves the problem the business was created to solve in the first place
// state:
// one of the most important aspects of any web application
// this is what stores all the data about the application's front end that is running in the browser
// should store any data you might fetch from an API or data a user inputs or what page a user is currently vieiwing, and so on
// this data should be the single source of truth, which should be kept in sync with the user interface
// meaning, if some data changes in the state, the user interface should reflect that
// also true the other way around, if something changes in the UI, the state should aslo change
// storing and displaying data and keeping everything in sync is one of the most difficult tasks when building web apps
// that's why there are many state management libraries like Redux or MobX
// in this project, we'll keep things very simple and use a simple object to store our entire state
// HTTP library:
// responsible for making and receiving AJAX requests
// we've been doing that using the fetch function and we'll keep doing that here
// most real world apps need some interaction with the web, so the use of a library is optional but almost always necessary
// application logic (router):
// this is code concerned only with the implementation of the application itself
// the technical aspects of the applications which are not directly related to the underlying business problem
// for example, application logic includes handling of UI events and naviation on the page
// that's why this component is often also called a router, mapping actions to the user's navigation
// presentation logic (UI layer):
// all about the visible part of the application
// presentation logic is responsible for displaying the application state on the user interface in order to keep everything in sync
// any good architecture has a way of separating all of these components instead of mixing them all together in one big file
// model view controller
// a well-established architecture or pattern containing three parts that we're going to use in this project
// the view is for the presentation logic, the part of the app interacting with the user
// the model is all about the app's data, which is why it usually contains the state and also the business logic that manipulates the state
// it also contains the HTTP library that might get data from the web, from an API or some back end
// these two should be kept closely together
// the controller contains the application logic
// it sits between the model and the view, creating a bridge between them where they would otherwise know nothing about one another
// a significant goal of the MVC pattern is to separate business logic from application logic, which makes developing the application so much easier
// as a consequence, we need something to connect these two parts, and that is the controller
// let's take a look at a typical flow of actions and data as soon as an event happens in the user interface, like a click, for example
// to start, the controller will handle that event, because handling an event is doing something in the application, which is clearly a part of application logic
// this handling might involve updating the user interface and asking the model for some data
// we can say that the controller dispatches tasks to the model and to the view -- it controls and orchestrates this entire action and, in fact, the whole application itself
// asking the model for some data might involve an AJAX request to the web, which is exactly what the model does
// when the data arrives, the controller takes that data and sends it to the view
// the view will render that data to the user interface and finish this whole cycle
// in the diagram, dotted arrows represent data flow between different components of the architecture
// the solid arrows represent actual function calls and module imports
// we can see that it's only the controller which imports and calls functions from the model and from the view, but never the other way around
// as previously mentioned, the model and view stand alone from one another completely and don't import one another
// they don't even import the controller nor do they even know that the controller exists
// they sit and wait to get some instructions (which will come from the controller)
// let's see how this MVC architecture applies to the part of the Forkify app we've already implemented
// user selects recipe and page loads with recipe ID events are associated with the controller
// loading the recipe happens in the model
// the controller calls some function that is in the model
// the model then asynchronously gets the recipe data from the API
// once that data arrives, the controller asks for it, receives it, and sends it to the view
// the view renders the recipe on the screen
// this MVC architecture flowchart is still quite abstract because it is what we will implement, now how we will implement
// an implementation diagram of our MVC architecture, only about loading and rendering a recipe, shows:
// model and controller are implemented in a module, while recipe view is a class
// when the user click on a search result, there is a control recipes function in the controller that will handle the event
// this controller will instruct the recipe view to render a loading spinner while the user interface waits for the data to arrive
// in the meantime, the controller also calls the load recipes function in the model to fetch the recipe data from the Forkfiy API
// now the model also contains a big state object that we export from the model
// this state will also contain all sorts of data, such as the current recipe, search results, bookmarks, etc.
// as the data arrives, it will be stored in this state object
// the controller then reaches into the state object, grabs the recipe data, and finally calls the render method on the recipe view with that data


// Refactoring for MVC

// we'll start by creating the necessary new files so we can split up our code between them
// inside of src and js, let's create a new file called model.js
// this will be the module within which we write our entire model
// for the view we will actually need multiple views, one for each feature
// now we're working on displaying the recipe, so this one will be called recipeView
// let's create a new folder for the view in order to not clutter our js folder
// in controller.js, we'll have one big module for all the controllers
// then one big file for all the models, for the recipe, for search, for bookmarks
// but for the views, we'll have one model for each of the different views
// one reason for this is that the views are much bigger files
// we don't want a file with 500 lines of code
// we could split up the model and the controller, but that would make this project confusing to follow
// let's start with the model
// we going to have a big state object
// inside, it will contain an object for recipes, search, and bookmarks
// starting with the recipe, there will be a function for loading it that will be called controlRecipes, which will sit between loading the recipe and rendering it using the view
// remember that the controller sits between the model and the view and acts as a kind of bridge
// in our model, let's create that state object and in it the recipe, which is also an empty object in the beginning
// then we will export this state so that we can use it in the controller
// let's also create the loadRecipe function
// we also export it so we can use it in the controller
// this function will be responsible for fetching the recipe data from our Forkify API
// this will be an async function
// grab previous code that is concerned with getting the data
// it starts with where we fetch the recipe from the API
// the code for rendering the spinner has nothing to do with the business logic so we will save it for the presentation logic where it will go into the view
// and getting the ID also isn't business logic
// it's more about the application logic, making the application work, so we'll keep it that part in place
// adjustments to getting the data code:
// we don't now which ID to fetch
// we should pass that ID into this function
// the controller will get that ID so when it calls the model and the loadRecipe funciton, the ID can pass into it from there
// recipe should now be state.recipe
// let becomes const
// log state.recipe instead of recipe
// when the state objecct is going to get updated by loadRecipe, that state is also updated in the controller which imports the state
// this will work because there is a live connection between the export and the imports
// let's now import all of that into here
// we import at the very top of controller code
// from the model we want to import everything
// we have a few named exports -- there are named and default exports, and these are named explicitly
// in our case, we can simply import everything and call model
// so here in the controller we will end up with model.state and model.loadRecipe imported from:
// import * as model from '/model.js';

// back to loading the recipe
// spinner should be outside/above:
// if (!id) return:
// renderSpinner(recipeContainer);

// let's call the actual function, model.loadRecipe and pass in the ID
// this is an async function and therefore will return a promise
// therefore, we have to await that promise before we can move to the next step in the execution of this async function
// this is the exact situation of one async funciton calling another async function
// remember, an async function will return a promise we need to handle whenever we call it
// that is, if we want to get some result out of it, or if we want to stop the execution in the function calling another async function
// 1) Loading recipe
// model.loadRecipe(id);

// add some error-handling to model as well
// try up top and all the way, catch the error and alert is as well
// remember that this loadRecipe function doesn't return anything
// therefore, we are not storing any result in a new variable
// instead, we will get access to the state.recipe that will be manipulated right here
// you can see that this loadRecipe function is clearly not a pure function
// it has the side effect of manipulating this state variable outside of it
// there are different ways of avoiding that, but they're a lot of work and it's just not worth it in this case
// we now have access to model.state.recipe
// in order to see if everything still works, let's store that recipe into the recipe variable so we can then render it using the code we already have
// so, temporarily, recipe, then we destructure it
// const { recipe } = model.state;
// when we run the Forkify app and reload, we see that it's working
// it's important to keep checking this when we are refactoring code

// now comes the recipeView
// we need to set up the view
// it will be a class called recipeView because later we will also have a parent class called View which will contain a couple of methods that all the view should inherit
// using classes makes all of this very simple to implement
// also, we want each view to have a few private methods and properties, and classes make that really easy to implement as well

// now comes the recipeView
// we need to set up the view
// it will be a class called RecipeView because later we will also have a parent class called View which will contain a couple of methods that all the view should inherit
// using classes makes all of this very simple to implement
// also, we want each view to have a few private methods and properties, and classes make that really easy to implement as well
// one of the private properties we want each of these classes to have is the parentElement
// we want to set it equal to the recipe container
// it will make it really easy to render the spinner and to render success or error messages or to render the recipe itself
// next, we want to export something from this recipeView module
// we might export the entire class so then in the controller we'd have to import that class and create a new object out of that, a new RecipeView object
// however, in that situation it might be possible to create more than one view and we would never want that
// also, it would add unnecessary work to the controller, which we want to keep as simple as possible
// in order to avoid all that, we'll create the object here and then export it so no one from outside this class will have access to anything other than the object
// so all we do is to export default and then a new RecipeView
// we don't pass any data in and therefore doen't even need any constructor
// then we import here in controller.js and we can give it any name
// calling it recipeView makes the most sense
// then views and then recipeView.js:
// import * as model from './model.js';
// import recipeView from './views/recipeView.js';
// how do we pass any data into the recipeView?
// because we're not creating the new object ourselves, we can't pass any data in like with a constructor, because we've created the object in the RecipeView module already
// actually, that was on purpose, so we can create a method called render
// we want to call recipeView.render
// then all we do is pass in the data which will be model.state.recipe:
// recipeView.render(model.state.recipe);
// render is a very common name for methods
// in React, for example, it is also called render
// render is also a very descriptive name for what is going to happen
// if we did export the entire class, then here we would have to do:
// const recipeView = new recipeView(model.state.recipe);
// we would have to pass in the data via model.state.recipe whenever we created a new recipe
// this would be possible, but the nice render method is a lot more descriptive and cleaner for all the reasons previously stated
// this render method will now accept data and store it into the object
// let's add the public render method in recipeView
// this is part of the public API
// this receives data and will then set it to #data
// the recipeView render method and its two properties are something that all the views are going to have in common, and will be beautiful to work with
// now we'll do something with this data, which is to render it
// we want to take markup code from above, cut it, and paste it into our view
// because our render method will later be common to all views, we will not put the cut markup code there but just below it
// however, each view will render different HTML
// we will simply have a method that generates that HTML so the render method can then render it, #generateMarkup
// this will be a private method and since we're using Babel here, we can already us this syntax
// the code that's going to generate this markup variable can immediately be returned
// this is not going to do anything yet because what is the recipe in this case?
// it's nothing, as it's not defined at all
// where is the data in this case?
// it's in #data
// let's take a look at our controller start from the beginning
// the recipe is loaded here:
// await model.loadRecipe(id);
// that will then be stored in the state object
// then we take model.state.recipe, the data we just received in the above step, and that data is passed into the render method
// the render method then takes that data and stores it inside of this.#data
// this is so we can use that data all over the place inside of this object
// by the way, this is exactly what we have in the architecture diagram.
// inside of controlRecipes, the loadRecipe function is called, then the recipe data goes into the state
// then that data passes right through the controller and goes into the render method, which then, in turn, calls generateMarkup
// we've concluded that the recipe data is located in this.#data
// we will therefore copy it and then replace all the occurrences of recipe in the code
// we'll hit Command + D and replae all recipe. with this.#data.
// below the newly pasted-in code we have:
// recipeContainer.innerHTML = '';
// recipeContainer.insertAdjacentHTML('afterbegin', markup);
// which isn't supposed to be here because all the larger function does is to return an HTML string
// it'll be the render method that'll be responsible for putting the HTML onto the page
// so we'll move that code snippet up to the render method
// let's say that the markup is this.#generateMarkup
// we've got some errors here but we are still refactoring, so let's not mind about that
// now that we have our markup, we need to put it on the page
// we need to start by clearing the parentElement
// let's create a small method for that and get into the habit of abstracting some code
// we can say this.#parentElement.innerHMTL and set it to empty
// this method will be reusable for all the views that have a parentElement property like this one
// we can now call that method with this.#clear;
// we can now remove recipeContainer.innerHTML = '';
// and to finish, we can finally render that HTML to the page by swapping in this.#parentElement for recipeContainer:
// this.#parentElement.insertAdjacentHTML('afterbegin', markup);
// this is now a nice, small function:
// rename showRecipe controlRecipes
/*
const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    renderSpinner(recipeContainer);

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch(err) {
      alert(err);
    }
};

['hashchange, 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));

*/
// what we're missing is to export the renderSpinner into the view
// it has nothing to do with the controller and so it belongs in the view
// cut the renderSpinner function from the controller and paste it into recipeView
// renderSpinner is not a function but a public method
// the controller can then call this method here as it starts fetching the data
// we also now have the beauty of the parentElement already being inside of the object
// remove parentEl as input of renderSpinner function
// replace parentEl in inner and insert with this.#parentElement
// the icons variable is not defined in the recipeView module
// need to move it from the controller into recipeView
// we need to call the renderSpinner method in controlRecipes:
// remember that we no longer need to pass in parentElement
// if (!id) return;
// recipeView.renderSpinner();
// we have recipeView and then renderSpinner which we know will automatically render the spinner on the recipeView
// the same will later be the case with other views
// for example, we will have a renderSpinner on the bookmarks view
// we call these same methods on all the views and they act on whatever view for which we're calling them
// this works so nicely as an architecture because we have the parentElement and the data property in the RecipeView class in recipeView.js
// testing to see if this works reveals errors
// Parcel is letting us know about a big one, the failure to resolve the import icons url in recipeView:
// import icons from 'url:../img/icons.svg';
// it makes sense there is an error with it as it this view is now in a different folder
// we're only going on folder up, which puts us in the js folder
// we need to go into the images folder, which is one more level up, like this:
// import icons from 'url:../../img/icons.svg';
// we have a bug; in the webpage appears:
// ${(_CLASSPRIVATEFIELDGET(THIS, _DATA).TITLE)}
// results from not calling the two private methods in recipeView.js
// const markup = this.#generateMarkup();
// this.#clear();

// we should change the form of recipe quantities
// currently in decimal form: 1.5 tablespoons of X
// looks nicer if it's in standard form: 1 1/2 tablespoon
// for that, we'll use an external library which will easily do this conversion for us
// google npm fractional
// using this package, you can create new fractions based on decimal numbers and do all kinds of multiplying, dividing, even converting them to a string
// we will convert each number to a fraction and then convert them into a string
// this is how we install it via the terminal in recipeView.js:
// npm install fractional
// add to imports:
// import fractional from 'fractional';
// we see, again, that for any libraries or packages we import from npm, we don't need to specify their path
// all we have to do is write their name and then what they export:
// import (name of export) from 'name of import';
// in our case, we're exporting Fraction:
// import Fraction from 'fractional';
// because many npm packages are still using CommonJS, you'll see that the npm fractional page recommends:
// var Fraction = require('fractional').Fraction
// let's now use Fraction in recipeView.js by having it precede ing.quantity:
// <div class="recipe__quantity">${new Fraction.Fraction ing.quantity}</div>
// we use Fraction.Fraction because it is inside of Fraction where the Fraction function is located
// to make this a bit nicer, we can use destructuring right at the top of recipeView.js:
// import {Fraction} from 'fractional';
// then, as per documentation:
// <div class="recipe__quantity">${new Fraction(ing.quantity).toString}</div>
// can see that when Fraction was destructured it became the actual function
// for recipe ingredient cilantro, this error appears using Fraction:
// quantity reads "NaN NaN/NaN"
// this is because previously we had null for a value
// we need to check if the number does exist: if it does, do this; if it doesn't, put an empty string there
// <div class="recipe__quantity">${ ing.quantity ? new Fraction(ing.quantity).toString() : '' }</div>
// refactor larger function and move to bottom of code
// call it #generateMarkupIngredient
// it will then receive (ing), the ingredient
// inside the map, we can then call #generateMarkupIngredient()
// let's copy it because VS Code doesn't really understand private methods yet
// ${this.#data.ingredients.map(this.#generateMarkupIngredient).join('')}
// we've successfully refactored this part
// we're also now done refactoring the entire code we had to the model-view-controller architecture


// Helpers and Configuration Files

// many real world applications have two special modules that are completely independent of the rest of the architecture
// these are a module for project configuration
// and a module for some general helpr functions that will be useful across the entire project
// let's implement these modules in our own project

// Configuration Module
// in our JS folder we create a new file called config.js
// this file will hold all the variables that should be constants that will be reused across the project
// this configuration file (hence the name config) will allow us to easily configure our project by simply changing some of the data that is in it
// of course, we do not want to put all the variables into this file, only the ones that are responsible for defining some important data about the application itself
// for example, the API URL (currently in model.js) we will reuse in multiple places across this project, for getting search data or uploading a recipe to the server
// imagine that at some point the URL needs to be changed, as a version 3.0 may be released
// as always, we don't want to have to change that everywhere, just have a variable which contains the URL which we can then reuse
// let's cut the URL from model.js
// you might argue that we can create a variable in model.js, but then we would have all these configuration variables spread across multiple modules, so it's way easeir to have them in one central location
// we'll call the config.js one const API_URL
// we'll export it from there
// with API_URL we're using uppercase as this is a constant that will never change
// using uppercase for that kind of variable is common practice, especially in a configuration file like this
// another great candidate for being a configuration variable is going to be the API key generated from the documentation page
// for now, let's import the API URL into the model
// remember that in modle we have a named import and later we'll have more
// we could import them all at the same time as config:
// import * as config
// but this time we prefer to import them one by one with their actual name
// we do that by using curly braces and the name of the variable and then config is in the same folder:
// import { API_URL } from './config.js';
// in model.js, under loadRecipe we can now place API_URL into the fetch:
// const res = await fetch(`${API_URL}/${id}`);
// and our application should now be back to working

// Helpers Module
// a new file called helpers.js for helper functions
// this file will be a central container for functions we reuse over and over in our project
// one great candidate is a function that will get JSON and include some error handling
// this function will be very similar to what we did in the async JS section, an async function that will also do the fetching and converting to JSON all in one step
// with this, we abstract all this functionality into one nice function we can then use all over our project
// we can reuse this function for all kinds of URLs
// let's now put all of this into a try block and then catch the error
// what are we going to do with the error here?
// let's say we want to handle the error in this function, right in model.js where we will actually use the getJSON method
// so, in model.js, we will import using the exact variable name
// import { getJSON } from './helpers.js';
// let's use getJSON here:
// const data will be await getJSON and then the same URL
// there's still something missing here which is to return the data from this function
// return data;
// just as we had in the last lesson, we have one async function -- load recipe -- calling another async function, getJSON
// this data (in helpers.js), therefore, will be the resolved value of the promise that the getJSON function returns (from model.js)
// in model.js, for error handling, let's say we want not to alert but to log the error in the console
// and we want to do it in a special way so we can see which errors are our own by using emoji to make the error visible
// console.error(`${err} 💥💥💥💥`);
// remember that the error is actually occurring in the getJSON function in helpers.js and not in model.js
// this is temporary error handling we will improve dramatically in the coming lectures
// when an error occurrs in the getJSON function in helpers.js, the promise that function returns is still being fulfilled 
// it's a successful promise even if an error resulted from it being run
// to demonstrate, if you enter an invalid URL in the app, the error returned in the console will be:
// (invalid URL) 400 (Bad Request) helpers.js:5
// the log shows the actual error happening at helpers.js:11
// however, this is not where we want to handle that error
// we want to handle it in model.js
// instead of this error message:
// console.error(`${err} 💥💥💥💥`);
// which is a consequence of the first error, we'd like to get the error message inside of the model
// we do it by re-throwing the error
// we have to use throw, then take the error object we already have and and throw this new error:
// throw err;
// with this, the promise being returned from getJSON will actually reject
// when we try the invalid URL again, we get the same error message in the console we had before, but right in model.js where we want it:
// Error: Invalid _id: (invalid URL) (400) 💥💥💥💥  model.js:27
// we propagated the error down from one async function to the other by re-throwing the error in the helpers.js catch block
// this is very important to be able to do and we will come back to it in a future lesson
// to finish, let's make our getJSON asynch function in helpers.js more robust and more real world by adding a time out
// that is, setting a time beyond which the request fails
// this is important to prevent really bad internet connections keeping this fetch running forever
// we can take the starter code from the previous async JS section higher up here in controller.js
/*
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
*/
// in place, this will return a new promise which will reject after a certain number of seconds
// we will have a race between this timeout promise (taking whatever number of seconds we pass into it) and the fetch function responsible for getting the data
// whichever one completes first will win the race
// to put that into code, that works by using Promise.race which takes in two promises
// the first will be the fetch url and the second will be the time out with a ceratin number of seconds
// let's test 0.5 for the seconds
// repeated error stems from not calling Promise.race, now corrected
// to test the 0.5 seconds timeout, slow the network speed, and now the request takes too long after half a second
// what happened: after half a second passed, the promise rejected with "Request took too long!" message
// re Promice.race, remember that as soon as any of these promises in the reace rejects or fulfills, that promise will become the winner
// the rejected promise will trigger the catch block
// that error will then be throw again in helpers.js
// then it will makes its into the load recipe function in model.js and be handled down here with the four explosion emojis error message
// let's set the timeout to a more realistic value, 10 seconds
// if we insert that, it will be a "magic" number or value -- one that seems to appear out of nowhere
// someone reading the code and finding the 10 will not understand what it's doing
// this is the perfect candidate for a configuration value
// if we want to change that value at a later date we can do that through the config file:
// export const TIMEOUT_SEC = 10;
// we then import that file from config.js into helpers.js
// we create a named import and use curly braces
// we can then use the timeout second constant
// anyone who is going to read this code will now see that this is one of the configuration values because
// A) it's in uppercase
// and B) because it's now a variable, and therefore no longer a static magic number


// Publisher-Subscriber Pattern
// how we can listen for and handle events in our MVC architecture by using the Publisher-Subscriber Pattern
// analyzing the code we have so far:
// ['hashchange], 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
// we're listening for the hashchange and load events in the controller which doesn't make a lot of sense
// everything related to the DOM, to the view, should be inside the view
// imagine we were handling a click event on some DOM element -- listening for that should for sure go into the view
// dealing with the hashchange and load events has more to do with DOM manipulation or the DOM itself than with the controller
// we therefore need a way of putting this logic into a recipe view
// however, the function we use to handle these events is sitting inside of this controller module
// we have a problem here: 
// we don't want this code here but in the view:
// ['hashchange], 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
// however, in the above code, we DO need the controller function controlRecipes
// but we do NOT want to put the const controlRecipes function in view.js
// recapping previous lessons, we want to handle events in the controller because otherwise we'd have application logic in the view, which we don't want
// on the other hand, we want to listen for events in the view, because otherwise we'd need DOM elements in the controller, meaning presentation logic in the controller, which would be wrong for our MVC implementation
// event listeners should be attached to DOM elements in the view, but evens should be handled by controller functions in the controller module
// looking at the architecture diagram, we have the controlRecipes function in the controller and we have a special method in the view, the addHandlerRender
// we might think it's very easy to connect these two functions
// why not simply call the controlRecipes functions right from the view whenever an event occurs?
// that isn't possible because of the way we set up the architecture
// the view doesn't know anything about the controller
// it doesn't import the controller, so we can't call any of the functions that are in the controller from the view
// it only works the other way around and therefore it's more complex than this

// fortunately there is a good solution: the Publisher-Subscriber Design pattern
// design patterns in programming are standard solutions to certain kinds of problems
// in the P-S pattern, we have a publisher --  which is some code -- that knows when to react
// in this case, that's going to be the addHandlerRender function because it will contain the addEventListener method
// therefore, it will know when to react to the event
// on the other hand, we have a subscriber, which is code that wants to react
// this code should be executed when the event happens
// in this case, the controlRecipes function we already have in our controller
// remember, the publisher doesn't yet know the subscriber exists because the subscriber is in the controller that the view can't access
// finally, the solution to the problem:
// we can now subscribe to the publisher by passing in the subscriber function as an argument
// in practice, that means as soon as the program loads, the init function is called, which in turn immediately calls the addHandlerRender function from the view
// this is possible because the controller does import both the view and the model
// as we call addHandlerRender, we pass in controlRecipes as an argument -- we susbcribe controlRecipes to addHandlerRender
// at this point, the two functions are finally connected
// now addHandlerRender listens for events using the addEventListener method as always
// as soon as the event happens, controlRecipes function willbe called as the callback funciton of addEventListener
// in other words, as soon as the publisher publishes an event, the subscriber will get called
// this allows us to keep the handler in the controller and the listener in the view, everything nicely separated
// let's implement all of this
// cut this code from controller and create a new method with it in recipeView.js:
// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));
// since we don't know about controlRecipes, swap out handler for it
// and that's it for the function
// this isn't a private method because it needs to be part of the public API of this object so we can call it in the controller
// let's create an init function at the bottom of the code first then call it:
/* 
const init = function() {
  recipeView.addHandlerRender(controlRecipes);
};
init();
*/


// Implementing Error and Success Messages

// let's now implement real world error handling in our application
// instead of always logging errors to the console
// the error we'll work with is using a false ID that can't be found on the server
// currently, we get our error message, invalid ID, the ID itself, plus the status code in the console
// the real world way of handling an error is to display a message in the user interface so the user can know what's going on
// error handling will mean displaying an error message in the view
// up until now we have been handling the error in the model
// handling has meant logging the error to the console with small emoji
// this current strategy isn't correct and isn't happening in the correct place
// if we want to display something in the view, that code should be in the view and not in the model
// therefore, let's go back to our code in the view and implement a new method there responsible for displaying that error message
// first, we grab the HTML element code from index that has the class of error:
/*
<!-- <div class="error">
            <div>
              <svg>
                <use href="src/img/icons.svg#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>No recipes found for your query. Please try again!</p>
          </div> -->
*/
// we'll put this in the view after the spinner
// renderError() {}
// as always when we create some new markup, let's create a new markup variable
// remember, we need to replace src/img/icons.svg with the ${icons} variable
// and we want to have a custom message, not hard-coded, but passed into this method
// let's add a parameter for that
// let's clear the parent element
// we should use this combination in renderError and renderSpinner above it:
// this.#clear();
// this.#parentElement.insertAdjacentHTML('afterbegin', markup);
// the code will be the same for each method
// the abstraction of this.#clear() makes it a lot cleaner in the code

// right now, in the model, we are handling the error like this:
// console.error(`${err} 💥💥💥💥`);
// that isn't what we want, though
// we want a way of getting this error into the view
// the model and the view are only connected by the controller
// it'll be the controller that will call the recipeView
// it'll be in the catch block of controlRecipes in the controller:
/*
recipeView.render(model.state.recipe);
} catch (err) {
  console.log(err);
  recipeView.renderError();  
}
*/
// so, recipeView.renderError() and then some message
// but what is this message going to look like?
// from where are we going to get it?
// because we have the same problem as before:
// in the helpers functions, whenever we got this error:
/*
if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
    } catch(err) {
        throw err;
    }
*/
// it wasn't automatically propagated down to this async function in model.js:
// const data = await getJSON(`${API_URL}/${id}`); 
// which was actually calling the getJSON function
// we therefore had to re-throw the error in helpers.js to mark the whole promise as rejected so we could get into the model.js catch block
// now we're here again with the same problem
// if we get an error in model.js, then the whole loadRecipe promise will also not get rejected 
// and we'll never enter the recipe.render catch block in controller.js
// we will have to do the same thing as before which is to throw the error in model.js again:
/*
console.error(`${err} 💥💥💥💥`);
throw err;
*/
// with this, we'll then have access to the exact same error object
// between console.error and throw, we'll now have access to the exact same error object which we didn't previously
// we can use the same thing in controller.js as well, changing:
/*
recipeView.render(model.state.recipe);
} catch (err) {
  console.error(err);
  recipeView.renderError();
}
*/
// to (removing the console.log):
/*
recipeView.render(model.state.recipe);
} catch (err) {
  recipeView.renderError(`${err} 💥💥💥💥`);
}
*/
// here, now, our error handling is complete
// we now have a way of rendering it to the user interface and will be able to access the exact same error we got access to in the load recipe function
// however, the error message we now get is not meaningful and therefore not that useful to anyone using this application
// let's create a more meaningful one, something like, we couldn't find that recipe, please try another one
// how should we pass in that message here?
// via recipeView.renderError()?
// no, the error message should be an intrinsic property of the view itself
// cut it from controller
// in the view, under class RecipeView, we'll add another private field:
// #errorMessage = 'We could not find that recipe. Please try another one!';
// then, in the view under renderError, we'll pass in a message or, if none, set a default, which will be the above message
// in the catch portion of the code, we don't pass anything
// by doing so, we are back to having no code in our controller that is regarded as belonging to the view
// instead, the message is then by default set to the error message, which we have set as the error message for the entire object
// we now have a nice, robust error handling strategy we'll be able to use for other errors in the future
// for example, when there aren't any search results for some search terms

// let's implement a method in recipeView.js for success messages
// it will be called renderMessage and have the class of message:
/*
renderMessage(message = this.#message) {
  const markup = `
    <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
  `;
}
*/
// the icon will be different than previously: #icon-smile, rather than alert
// at the top of the code, under class RecipeView, we will add:
// #message = '';
// for now, it'll remain empty as we don't yet have or need a success message


// Implementing Search Results - Part 1

// handling the event of a user searching for recipes
// loading those search results and rendering them
// as we focus on user searches, and loading and rendering those search results, we need to implement the model, the view, and the controller binding everything together
// usually it's easiest to start with the data -- the model -- which means starting to make API calls in order to load search results
// once we have that part working, we can then render the results onscreen and also care about the actual event
// let's go to the model and start implementing the search functionality
// as before, we going to create a function that will be exported so it can be used by the controller:
/*
export const loadSearchResults = async function(query) {}
*/
// since it will be performing AJAX calls, it's going to be an async function
// because the function will be called by the controller, it'll be the controller telling the function for what it will search, passing a query-like string which can be pulled into the API calls
// we'll need a try catch block
// in the catch block we'll do the same as before, logging the error and then throwing it
// so that eventually we'll be able to use it in the controller
// let's implement the functionality
// let's go back to our documentations page where we get all recipes
// making a get request to this path
// the way we add a search paramenter is with a question mark and then search equals, in our case, pizza, and that is the search query
// we can already see the results for pizza
// this is the URL we need to call in our AJAX request
// in model, we can, as before, use the get JSON method
// that will fetch the data and convert it to JSON and create an error if something goes wrong in the process
// get JSON returns a promise
// we await that here and store it in data, as always
// then we add the URL in a template literal
// const data = await getJSON(`https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`)
// now we have to replace everything in it to make this work
// the first thing is to replace the URL with the API URL we already have in our configuration file
// API URL already includes recipes
// usually a URL also ends in a slash, so we add the slash to the URL in the config file and take it out in model
// const data = await getJSON('${API_URL}${id}');
// then ?search will be followed by our query:
// const data = await getJSON(`${API_URL}?search=${query}`)
// in model, let's call the function and see what we get:
// loadSearchResults('pizza');
// the logged data result we get is coming from model line 35
// we aren't getting back the complete recipe object in the console
// it's only some of the data so we can display it in the search results without the unneeeded elements like ingredients
// we'll want to take this data and store it into our state making changes to it first
// we will create some new objects based on the data we receive here
// in model, we start with:
// data.data.recipes
// this is the array of all the objects
// now we want to create a new array which contains the new objects where the property names are different
// let's map over this and each element is going to be a recipe:
// here we will return a new object, copying code from above: id, title, publisher, and image url
// recipe becomes rec
// this will return an array of new objects
/* 
data.data.recipes.map(rec => {
  return {
    id: rec.id,
    title: rec.title,
    publisher: rec.publisher,
    image: rec.image_url
  }
})
*/
// where should we store it?
// in model, we'll put it into our state
// the state contains all the data we need to build our application
// let's call this one search
// all the data about the application might as well include the search query itself
// let's create a new object then specify the query which we'll start as an empty string
// then the results, starting as an empty array
/*
export const state = {
  recipe: {},
  search: {
    query: '',
    results: []
  }
};
*/
// the state should contain all the data about the application
// in this case, we might not even need the query data for now, but it's a good idea to already store it in the state for the day we may need it
// for example, we might want to add some analytics in the future to find out which queries are mode the most
// first, we will set:
/* 
try {
  state.search.query = query;
*/
// then we'll store the data:
// state.search.query = data.data.recipes.map
// let's see if everything worked:
// console.log(state.search.results);
// we find that we have exactly the kind of array we had before
// the imaage URL we had before is indeed called image
// everything has the same format as before
// we want everything to have the same names throughout the entire application
// we want to call this function in the controller
// in the controller, then, we will create a new function above const init = function () that will be like a new controller
// this one will also need to be an asynchronous function
// as always, we'll add a try catch block and log the error
// here, in try, we want to call the loadSearchResults we just built with model.loadSearchResults
// here, too, we'll need to pass in the query but, for now, we'll do that manually
// we also need to await this
// but we don't store any results because, like the loadRecipe function, this one also doesn't return anything
// it only manipulates the state
/*
const controlSearchResults = async function() {
  try {
    await model.loadSearchResults('pizza')
  } catch(err) {
      console.log(err);
    }
}
*/
// we should be able to console.log the error in the controller and still get access to the results
// first, we need to call this function:
// console.log(state.search.results)
// later, we'll hook this up to an event listener
// we get status not defined because it needs to be model.state.search.results
// and now our log show 59 search results for pizza
/*
const controlSearchResults = async function() {
  try {
    await model.loadSearchResults('pizza')
    console.log(model.state.search.results);
  } catch(err) {
      console.log(err);
    }
};
controlSearchResults();
*/
// instead of only searching for pizza, we want to get our query from the input field on the website search page
// we also want to start the process of loading the search results
// we only want that to happend when the search button is clicked
// let's create a view only for the search part -- the search field, the search button -- and then another, different view to render the search results
// it's a good idea to keep every view really focused, especially as they're in different places
// this view isn't going to render anything
// instead, it will give us the content of the search input field
// getting that input data has to do with the DOM
// so it should be in a view and not in a controller, correct?
// if we want to be lazy, we could select the element we want, get the value, and then use that as our query, but this is clearly about the DOM
// in order to follow our architecture, we'll create a new view: searchView.js
// just as before, we'll create a class called SearchView
// we won't export that class but rather an instance, so an object created by that class
// without passing in any data:
// export default new SearchView();

// as before, we'll have a parent element
// we'll set that to #parentEl = document.querySelector();
// in the HTML, we have the entire form called search which has the input field and the search button -- this is the element to select, the one with the class of search, so .search
// we'll set that to #parentEl = document.querySelector('.search');
// again, this class isn't going to render anything
// all we want is to get the query and eventually to listen for the click event on the button
// let's create a method we will call from the controller called getQuery
// all this will do is return this.#parentElement -- that's going to be the search
// from there, we want to select the input field with the class search__field
// we'll select this child element using a querySelector
// then simply get the value of that
/*
 getQuery() {
  return.this.#parentEl.querySelector('.search__field').value;
 }
*/
// we could have written this exact same code here in the controller instead of in searchView
// but that wouldn't make any sense, as the controller isn't concerned about the DOM at all
// we don't want to have any DOM elements in the controller; in fact, we don't even want to know what the DOM looks like
// to get the searchView into the controller, we can add, third from the top of the code:
/*
import * as model from './model.js';
import recipeView from './views/recipeView.js;
import searchView from './views/searchView.js;
*/

// then we can get that query by saying searchView.getQuery();
// of course, there may be no query, in which case, let's add aanother guard clause
// if no query, return immediately: 
// if(!query) return;
/*
const controlSearchResults = async function() {
  try {
    const query = searchView.getQuery();
    if(!query) return;

    await model.loadSearchResults('pizza')
    console.log(model.state.search.results);
  } catch(err) {
      console.log(err);
    }
};
controlSearchResults();
*/
// because the controller function runs right in the beginning when the application loads, before there is a search value, there can be no result
// in order to make this work, we need to listen for the event of clicking the search button or submitting the search form
// only on those events do we want to call this controller function
// in order to do that, we'll once again use the publisher subscriber pattern, which we did here:
// recipeView.addHandlerRender(controlRecipes);
// we will listen for the event in searchView and then pass the controller function -- the handler function -- into the method we'll build here
// so this addHandler, a search method, is going to be the publisher and the search results function is going to be the subscriber
// we'll take our parent element and add the event listener to it
// we won't be listening to the submit button but the entire form for the submit event
// this will then work no matter if the user clicks the submit button or hits enter while typing the query
// we can't call the handler immediately as we need to first prevent the default action -- otherwise, the page is going to reload
// so, e.preventDefault();
// only after that can we call the handler function
/*
  getQuery() {
    return.this.#parentEl.querySelector('.search__field').value;
  }

  addHandlerSearch(){
    this.#parentEl.addEventListener('submit', function(e) {
      e.preventDefault();
      handler();
    });
  }
*/
// all we have to do now is call this method in pass in that function
// let's do that at the beginning:
/*
const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
*/
// in the HTML search field, if we try 'pizza', we get 59 data as search results, the exact same ones we had previously
// if we try 'avocado', we get 39 search results all with 'avocado' in the title
// after we submit the search, we should clear out the search field
// let's add another small method for that in the view, below getQuery()
// this encapsulates it nicely inside of searchView
// for simplicity, as it's barely one line of code, it could be in the controller,but we want to keep everything separated
// that will make it so much easier and better to add features in the future
// then we set getQuery() to empty:
/*
  clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }
*/

// add comment to code to make it easier to understand in the future:
/*
const controlSearchResults = async function() {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if(!query) return;

    // 2) Load search results
    await model.loadSearchResults(query)

    // 3) Render results
    console.log(model.state.search.results);
  } catch(err) {
      console.log(err);
    }
};
// right now our rendering is only a console.log
// but in 1) when we get a search query, we can immediately also clear it afterwards
// or, in fact, in order to keep this controller even simpler, we can do that right in the getQuery method in searchView.js
// we can make this clearInput method private, so we're not going to use it outside
/* 
  #clearInput() {
      this.#parentEl.querySelector('search__field').value = '';
  }
*/
// call the clear input method
// first, we need to store the query
/*
  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }
*/
// in the HTML page search field, we enter "pasta"
// the field is then cleared
// and in the console we then get 45 results about pasta, so it works fine
// in the next section, we will implement a second view that will render all the search results in the HTML page sidebar


// Implementing Search Results - Part 2

// let's now render the search results by creating a new view
// we want to create a resultsView
// this will contain a render we can call with the search results -- that's the data that will be taken in 
// we also want to have a render method which will render the data to our user interface
// we'll create the resultsView.js
// and, within it, the class Results View
// this view will be similar to recipeView.js
// we'll have a parentElement, data, messages
// we'll need the same render method, renderSpinner
// we'll need to display the spinner while the data is being fetched, in this case, the search results
// we might also need to render an error
// it's time to create a parent class
// this will allow us to reuse all current methods on all view, that is, on all objects created through all the view classes
// therefore, in views, create View.js
// in View, let's create a new class called View and immediately export it
// let's make it a default export
// we'll be exporting the class itself because we're not going to create any instances of this view -- we'll only use it as a parent class of all the other child views
// in recipeView, let's import that parent class at the very top:
// import View from './View.js';
// don't even need the .js at the end, but nice to keep it there for consistency
// from recipeView to View, we can copy everything that should be common to all the views of that parent class
// one thing that needs to be changed:
// with Parcel and Babel, inheritance between truly private fields and methods doesn't reallly work yet
// it was nice to use the native JS way of protected methods and properties, but we can't really use it anymoe
// might be possible in the future, but for now, we have to go back to protected fields and methods:
// swap out ".#" for "._"
// and change method names from # to _, from truly private to only protected using the underscore convention
// we'll be extracting the View class elements from the RecipeView class
// we'll need all the render methods
// everything except methods for generating the markup because that will be unique for every single view
// also the handler will be unique to each view
// after creating View, rendering a spinner, for example, will be really easy
// all the view will have that method and be able to call it thanks to the parentElement property in each view
// it will know too which element it should attach the spinner because the parentElement will be unique to every single view
// move searchView renders to View
// now in recipeView need to extend RecipeView:
// class Recipe View extends View
// as icons is not defined in View, we'll have to:
// import icons from 'url:../../img/icons.svg';

// without any code yet in the resultsView, we'll already be able to add a spinner to the search results
// first, we need to import the View
// import View from './View.js';
// ResultsView is just another child class of View:
// parentElement should be the results element in the index, an unordered list
/* 
class ResultsView extends View {
  _parentEl = document.querySelector('.results');
}
*/
// then, in resultsView.js, we have to export default as before and a new instance of this view
// this way, there can only be one ResultsView
// export default new ResultsView();
// then, here in the controller, we can immediately import that without having to create the instance manually:
// import resultsView from './views/resultsView.js';
// now we should be able to display the spinner
// let'd do that at the very beginning:
/*
const controlSearchResults = async function()  
  try {
  resultsView.renderSpinner();
  }
*/
// parentEl is incorrect; should be parentElement spelled out, so to correct:
/* 
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
}
*/
