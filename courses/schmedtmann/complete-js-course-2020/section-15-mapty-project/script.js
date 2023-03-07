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

1) Map where user clicks to add new workout (best way to get location coordinates)

2) Geolocation to display map at current location (more user friendly)
-  a lot friendlier than having users scroll to their current loaction on a map
- all browsers on mobile and desktop now support geolocation

3) Form to input distance, time, pace, steps/minute (cadence)

*/
