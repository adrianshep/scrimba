'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


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

5) As a user, I want to see all my workouts when I leave the app, and come back later, so that I can keep using the app over time.


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

6) (User Story 5) Store workout data in the browser using local storage API
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

Keep in mind that the flow chart has nothing to do yet with the implementation itself -- this is just how the program is going to work. We might even implement it in some language other than JavaScript.

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
        },
        
        // Leaflet starter code:
        var map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
        },
            
        // error:
        function() {
            alert('Could not get your position')
        }
    )
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
