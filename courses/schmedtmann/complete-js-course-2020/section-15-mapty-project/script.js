'use strict';

// parent class that will take in the data common to both types of workout
class Workout {
    // date on which the object was created -- the workout date:
    date = new Date();
    // best practice to use a library to create a unique identifier for each object in an array
    // in this case, here is a quick workaround
    // fixing ID:
    id = (Date.now() + '').slice(-10);
    // in the real world, many users will mean that two or more of them could create objects at the same time
    // at that point, relying on the time to create IDs will become a really bad idea
    clicks = 0;
    move to marker create public click method
    constructor(coords, distance, duration) {
        this.coords = coords;
        // [lat, lng]
        this.distance = distance; 
        // in km
        this.duration = duration;
        // in minutes
    }
    
    _setDescription() {
        // prettier comment keeps prettier from formatting months by single lines in a column
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
    }
    // now every object gets this method
    // in each workout we can increase that number of clicks
}
// we will never directly create a workout
// instead, we will always create a running or cycling object

class Running extends Workout {
    type = 'running';
    
    constructor(coords, distance, duration, cadence){
    // should take in same data as parent class plus additional properties we want to set in running object (cadence)
        super(coords, distance, duration);
        // initializes the this kw
        this.cadence = cadence;
        // the incoming cadence
        // calling this method here instead of returning its data below:
        this.calcPace();        
        this._setDescription();
        // has to be here and in Cycling constructor rather than in Workout constructor since the needed type for 'running' or 'cycling' is only defined in each of those two child classes and not in the Workout class
        
    }

    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        // good idea to return this data in case we actually need it
        // return this.pace;
        // however, instead of relying on this return, we'll simply call the method above in the constructor
    }
}

class Cycling extends Workout {
    type = 'cycling';
    // value "type" will now be a property available on all instances
    // same as putting
    // this.type = 'cycling' in constructor

    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed() {
        // km/h
        //  convert duration from minutes to hours
        this.speed = this.distance / (this.duration / 60);
    }
}

// testing out classes
// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

/////////////////////////////////////
// APPLICATION ARCHITECTURE

// moved declarations down from top of file for easier access:
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// refactoring code to hew to project architecture:
// implementing Class App
// we want everything related to our application, including the map, right in the App class, so we're going to define the map and map event as properties of the object
// we will use a private class field
class App {
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    // both now become private instance properties that are present in all the instances created through this class
    #workouts = [];
    // using class fields specification which will become part of standard JS soon

    // event listeners should be inside the class in the constructor method, which gets called automatically when the script loads
    // we will attach the event listeners to the DOM elements in the constructor
    constructor() {
        // Get user's position
        this._getPosition();
        // event handler function will always have this kw attached to DOM element
        // here this will point to form and no longer to the App object
        // form.addEventListener('submit', this._newWorkout);

        // Get data from local storage
        this._getLocalStorage();

        // Attach event handlers:
        // fix with bind:
        form.addEventListener('submit', this._newWorkout.bind(this));
        // challenge: when type field switches from Running to Cycling, Cadence field should switch to Elev Gain
        // use DOM traversal method .closest to find closest parent element containing 'form__row' class 
        inputType.addEventListener('change', this._toggleElevationField);
        
        // starting app with a blank page, there are no workouts on which we could click 
        // where should we attach the event handler in that case?
        // event delegation -- add the handler to the parent element, in this case, containerWorkouts
        // because _moveToPopup method way below is called by the addEventListener method, this kw in here isn't the one we want it to be
        // therefore we bind it up here:
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    }
    // constructor now gets the currentPosition then adds the two event listeners to the form and the input type element

    _getPosition() {
    if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function() {
            alert('Could not get your position')
        });
    }

    _loadMap(position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const coords = [latitude, longitude];
        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
        // need to use this.#map because this is now like a property that is defined on the object itself
        // we get error cannot set property #map of undefined
        // loadMap method treated like regular function call, not a method call, since it is being called by a callback function
        // in a regular funciton all, this kw is set to undefined
        // solution is to manually bind the kw to whatever we need: (this._loadMap.bind(this))
        // this kw now points to the current object
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        // handling clicks on map
        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden')
        inputDistance.focus();
    }
    
    _hideForm() {
        // empty inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        
        form.style.display = 'none';
        // add back hidden class
        form.classList.add('hidden');
        // but this triggers slide animation
        // form needs to be immediately hidden before this step
        // set display to grid after one second
        setTimeout(() => (form.style.display = 'grid'), 1000);

    // every small piece of functionality that is in our application we now want to be its own function
    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
            inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every(imp => inp > 0);

        e.preventDefault();
    }

    // get data from form
    const type = inputType.value;
    // always comes as a string, so immediately convert that to a number:
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // two separate if statements used here instead of an if else statement
    // if else not really used much anymore -- will see more and more of in modern JS

    // if workout running, create running object
    if(type === 'running') {
        const cadence = +inputCadence.value;
        // check if data is valid
        if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        // check in block here and not above because above would require checking elevation, and only cadence or elevation can be defined at a particular moment in time
        !validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)
        )
        return alert('Inputs have to be positive numbers!');

        workout = new Running([lat, lng], distance, duration, cadence);
    }
 
    creating new workout duration data validity check
    // if workout cycling, create cycling object
    if(type === 'cycling') {
        const elevation = +inputElevation.value;

    if (!validInputs(distance, duration, cadence) || !allPositive(distance, duration))
    return alert('Inputs have to be positive numbers!')

    workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // add new object to workout array
    this.#workouts.push(workout);

    // render workout on map as a marker
    this._renderWorkoutMarker(workout);

    // render workout on list
    this._renderWorkout(workout);

    // hide form and clear input fields
    this._hideForm();

    // use the localStorage API to make workout data (the entire workouts array) persist across multiple page reloads
    // localStorage is a place in the browser where we can store data that will stay there after close the page
    // the data is linked to the URL at which we are using the application
        
    // set localStorage to all workouts
    this._setLocalStorage();
        
_renderWorkoutMarker(workout) {
    // L.marker([lat, lng]) now throws error
    // coords data has to come from the workout itself:
    L.marker(workout.coords)
    .addTo(this.#map)
    .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`
        })
    )
    .setPopupContent(`${
        workout.type === 'running' ? '🏃‍♂️' : '⏱' } ${workout.description}`)
    .openPopup();
}

_renderWorkout(workout) {
    // change const to let variable because otherwise we won't be able to add anything to the string:
    let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
                workout.type === 'running' ? '🏃‍♂️' : '⏱' }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    `;

    if (workout.type === 'running')
        html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                // round to one decimal place
                <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
            </div>
        </li>
        ` ;
    
    if (workout.type === 'cycling')
        html += `
            <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed(toFixed(1))}</span>
                <span class="workout__unit">km/h</span>
            </div>
                <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${workout.elevationGain}</span>
                <span class="workout__unit">m</span>
            </div>
        </li>
        `;
    
        form.insertAdjacentHTML('afterend', html);
    }

_moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    // closest selects entire nearest element
    // which contains id we will use to find the workout in the workouts array

    if(!workoutEl) return;
    // click outside the workout container gets a null
    // we will have to ignore that
    // therefore the above guard clause
    
    const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

    this.#map.setView(workout.coords, 
    this.#mapZoomLevel, {
        animate: true,
        pat: {
                duration: 1
        }
    });

// using the public interface
workout.click(); 
    }

// localStorage is an API that the browser provides for us to use
// localStorage is a very simple API
// it is only advised for use with small amounts of data as it is blocking, which is very bad, as it slows down applications storing large amounts of data
// doesn't need any parameters -- we'll get workouts from workout property
// a simple key-value store: key is 'workouts' and value is stringified this.#workouts
_setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }
        
_getLocalStorage(){
    const data = localStorage.getItem('workout');
            // pass in the key
    }
}

// all above is but a blueprint
// to make the application work, we need to create an object:

const app = new App();
// app._getPosition();
// so code will get executed right at the point where the application loads
// but would be a lot cleaner if we could do this inside the class
// because constructor is also executed immediately as the page loads, we can simply move getPosition into the constructor at the top



/* Project Planning

1. User Stories
Description of the application's functionality from the user's perspective. All user stories put together describe the entire application.

2. Features
That high level overview allows developers to determine the exact features that need to be implemented in order for the functionalities in the user stories to be realized.

3. Flowchart
What we're going to build: to visualize the different actions that a user can take and how the program should react to these actions, we usually put all these features into a flow chart.

4. Architecture
How we're going to build it: how we will organize our code and what JavaScript features we will use. The project's architecture holds all the code together. It provides a structure through which an application's functionality can be developed.

Development Step
implement the plan created above using JavaSript code

1. User Story 
- description of the application's functionality from the user's perspective
- common format: 
As [type of user (who?)], I want [an action (what?)] so that [a benefit (why?)]

1) As a user, I want to log my running workouts with location, distance, time, pace, and steps per minute, so I can keep a log of all my running.
- clearly tells who wants to perform what action and why
- based on this, we'll be able to plan the application's necessary features so this user story can be satisfied

2) As a user, I want to log my cycling workouts with location, distance, time, speed, and elevation gain, so I can keep a log of all my cycling.

3) As a user, I want to see all my workouts at a glance so I can easily track my progress.

4) As a user, I also want to see all my workouts on a map so I can easily check where I work out the most.

5) As a user, I want to see all my workouts when I leave the app and come back later, so that I can keep using the app over time.

User Stories (summarized)
1) Log my running workouts with location, distance, time, pace and steps per minute

2) Log my cycling workouts with location, distance, time, speed and elevation gain

3) See all my workouts at a glance

4) See my workouts on a map

5) See all my workouts when I leave the app and come back later


Features

1) (User Story 1) Map where user clicks to add new workout (best way to get location coordinates)

2) (User Story 1) Geolocation to display map at current location (more user friendly)
-  a lot friendlier than having users scroll to their current loaction on a map
- all browsers on mobile and desktop now support geolocation

3) (User Story 2) Form to input distance, time, pace, steps/minute (cadence)

4) (User Story 3) Display all workouts in a list

5) (User Story 4) Display all workouts in the map

6) (User Story 5) Store workout data in the browser with an API called local storage
- real world applications use data storage accounts
- since this is a very simple application, we'll store data in the browser
- whenever the user comes back to the page, we will read the data that was saved in a local storage and then display it both on the map and also on the list


Flowchart
- should contain the different features we're going to implement
- show how the different parts of the app will interact with one another
- how data flows across the application

1) Geolocation to display map at current location

2) Map where user click to add new workout

start with page loads
- good idea to start flowchart with events
- page load is a good event to start with because it's always the first event that occurs on any page
- page load isn't an event we're going to handle but all the code at the top level will be executed when it happens
- when page loads, we want to start by getting the user's location coordinates using the geolocation API
- after geolocation data arrives, we want to rend a map centered on the current location of the user

3) Form to input distance, time, pace, steps per minute
4) Form to input distance, time, speed, elevation gain
- render form whenever the user clicks on a certain position on a map

*** Flowchart Color Code ***
- yellow - actions
- green - when something is rendered in the user interface
- red - operations that happen asynchronously

- DO NOT get hung up on building the perfect flowchart!
- like everything in coding and programming, building a flowchart well is a matter of practice
- as in the real world, we don't come up with all the steps in the planning phase
- perfectly okay to create a rough sketch in the beginning and come up with the exact detail during implementation

5) Display workouts in a list
6) Display workouts on the map
- form rendered in Steps 3 and 4
- we'll have an event listener on that form
- whenever user submits a workout, will be rendered on the map and in the list

7) Store workout data in the browser

8) On page load, read the saved data and display
- can only happen after current location has been fetched and a map has been displayed
- meaning, the above is an async process
- red in the flowchart color code
- an operation that takes some time and, only after it's completed, can the rest of the operations that depend on it be executed

9) Move map to workout location on click
-  whenever the user clicks on a workout in the list, the map will move to that workout's location
- event handler on the list will trigger this process

Keep in mind that the flow chart has nothing to do yet with the implementation itself -- this is just how the program is going to work. 

We might even implement it in some language other than JavaScript.

Only what our program should do, not how it does it -- that's more specific and actually for the architecture.


Architecture
- just like the flow chart, we don't always have to have the perfect final architecture figured out before implementation.
- we can first do some experiments, play around with the code, and only then think about the architecture for the final project in case.
- we can do it right in the beginning, but it's not always necessary.
- to start this project, we will simply start coding, implementing the features according to the flow chart.
- as we start to need more organization and ways to manage our data, we will come back to thinking about the architecture.

*/

/*

Using the Geolocation API
- called an API because it a browser API, just like internationalization or timers or anything else that the browser gives us
- on of the modern APIs, like the ability to access a user's camera or make a user's phone vibrate

*/

// very easy to use:
// to make sure that we don't get any errors in an old browser, we can first test if navigator.geolocation exists:
if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(
        // JS will call this function in case of success:
        function(position) {
            console.log(position);
        // take positions out of object:
        // could do it like so:
        // const latitude = position.coords.latitude
        // even better is to use destructuring:
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        // console.log(latitude, longitude);
        // returns 37.0475008, -7.8381056
        // not 100% accurate, but we can work with them
        // ultimately, want to load and center the map on this position
        // Google Maps for now:
        // console.log(`https://www.google.com/maps/@${latitude},@${longitude}`); 
        
        // Leaflet starter code:
        // map is id name of HTML element where map will be displayed
        // whatever id name used in HMTL, must be passed into this function:
        // L is main function that Leaflet gives us as an entry point, kind of a namespace
        // L has a few methods:
        // - map method
        // - tile layer -- define tiles of map
        // - display markers
        // L in console shows we have access to it
        // - it is a global variable that we can access from all the other scripts
        // we've never previously worked with multiple scripts
        // need to replace coordinates in default code:

        const coords = [latitude, longitude];
        
        // remove const from map defining it as let above:
        map = L.map('map').setView(coords, 13);
        // console.log(map);
        // shows on method we are now using as an event listener
        // internals of Leaflet Library show that:
        // use the prototype chain very heavily
        // use underscore convention to make methods and properties protected
        // indicates to us that we should not manipulate those manually

        // the second value -- 13 -- is the zoom level
        // 13 is a reasonable setting to use

        // Tile Layer
        // the map we see is made up of small tiles
        // come from the URL below
        // in this case, from OpenStreetMap whih is an open source map free for everyone to use
        // Leaflet works with all other kinds of maps as well, Google Maps, for example
        // use URL to change appearance of map
        // changing to a different tile theme (.org/ becomes .fr/hot/):
        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);



        // do we attach event listener to the whole map element? then we'd have no way of knowing the GPS coordinates of whatever location the user clicked on the map
        // we can't simply use the add event listener method we have been previously
        // instead, we use something similar available in the Leaflet Library.
        // this is a method not coming from JavaScript, but from Leaflet
        // add Leaflet event listener
        // handling clicks on map
        // change mapEvent to mapE
        map.on('click', function(mapE) {
            mapEvent = mapE;
            // take the form classList and remove the class of 'hidden'
            form.classList.remove('hidden')
            // now user clicking on map can edit form appearing to left of map
            inputDistance.focus();
            // to improve user experience, places cursor in distance field

            // console.log(map);
            // event object contains latlng which are the coordinates of the point on the map that was clicked
            const { lat, lng } = mapEvent.latlng;
        });
        }, 
        // error:
        function() {
            alert('Could not get your position')
        }
    );



// two problems:
// trying to use two variables not existing in currrenty scope -- map and mapEvent
// with other.js included as a script in index.html, we should be able to access the firstName variable:
console.log(firstName);
// logs 'Jonas'
// firstName is a global variable
// any variable that is global in any script will be available to other scripts as long as it appears after that script in the index.html inclusion list
// so script.js has access to all the global variables in other.js and leaflet.js, but other.js, for example, does not have access to anything from script.js because script.js appears after other.js in the index.html inclusion list
// for example, month is not defined, for the reason that by the time this other.js script is executed, script.js has not yet been loaded. Therefore it doesn't find this month variable anywhere in the global scope.

// ----------

// if browser popup window asking permission to provide location is clicked 'block,' that will trigger the error function and display alert 'Could not get your position'
// when location permission popup is clicked 'allow,' a position object is returned:
/*
GeolocationPosition
coords: GeolocationCoordinates
accuracy: 2646
altitude: null
altitudeAccuracy: null
heading: null
latitude: 37.0475008
longitude: -7.8381056
speed: null
*/


// Project Architecture
// one of the most important aspects of any architecture is the decision as to how to store the data
// data is the most fundamental part of any application -- without data there is no application
// in this case, the data we need to store comes from the user stories:
// log my running workouts story needs to store location, distance, time, pace and steps per minute
// log my cycling workouts needs to store locaiton, distance, time, speed and elevation gain
// we will design our classes so they can create objects that will hold this kind of data -- the best way of designing the classes to fit all our user stories
// big parent class Workout
// will hold distance, duration (time), coords (location) as these values are common to both running and cycling activities
// values specific to running or cycling will be held in smaller child classes: cadence and pace for Running; elevation gain and speed for Cycling
// the same will be true for methods
// diagramming of project architecture is common to object-oriented programming
// usually, each class is represented by a box
// in its top part will be the properties
// in its bottom, the methods
// each class will have more than just the constructor method
// to structure the code we've created to handle the events so far, we will create a big class called App that will hold all these functions as methods:
// loading the page, receiving a position from the Geolocation API (not an event in the traditional sense handled by an event listener, but still an event), click on the map, toggling input between Running and Cycling, submitting a form

// Class App
// functions that will be in it as methods:
// loading the page will trigger the constructor of the Class App object
// we get the current position of the user through the Geolocation API
// as soon as we have user's position, we load the map based on it
// when we click on the map, we will trigger the Show Form method
// as we change the input, we want a method called Toggle Elevation Field
// most important one will be the event of submitting the form
// this new workout method will be the heart of the entire class, because it will create new Running or Cycling objects
// these objects will be built based on the data coming in from the form.
// as the user keeps adding Running or Cycling workouts, a new object will be created for each of the workouts
// each of them will then be stored in a Workouts Array
// this structure has everything related to building the application itself, organized into one neat block of data and functionality
// having a class that contains all the data and methods related to an application is a common thing in simple JS applications like this one
// if the application is a bit more complex, we can divide this architecture further and create one class that would only be concerned with the user interface, and one class for the business logic, logic that works only with the underlying data
// in this case, we can keep things simple, but still separate concerns in a logical way, with the application in one self-contained block and then the classes that are only concerned about the data
// we will also be able to protect all of these methods so they are nicely encapsulated and inaccessible from anywhere else in the code
// that's the reason for the underscores preceding all the method names:
// _getPosition(), _loadMap(position), _showform(), _toggleElevationField(), _newWorkout()


// Architecture vs Flowchart
// Architecture is about how we implement the project
// it contains different methods and low level details
// Flowchart is a high level overview of what we want to implement
