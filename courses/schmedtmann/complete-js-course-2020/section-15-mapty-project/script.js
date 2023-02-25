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

*/
