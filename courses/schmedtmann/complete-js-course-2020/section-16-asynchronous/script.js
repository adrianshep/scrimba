'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Synchronous Code

const p = document.querySelector('.p');
p.textContent = 'My name is Jonas!';
alert('Text set!');
p.style.color = 'red';

// most code is synchronous
// executed line by line in exact order we defined in our code
// each line of code always waits for previous line to finish execution
// this can create problems:
// in example, alert statement will block the rest of the code executing until OK button is clicked
// most of time, synchronous code is fine and makes perfect sense
// for example, however, imagine execution waiting for a five second timer to finish
// nothing on the page would work during those five seconds


// Asynchronous Code

const p = document.querySelector('.p');
setTimeout(function() {
    p.textContent = 'My name is Jonas!';
}, 5000);
p.style.color = 'red';

// here, the timer runs in the background
// does not prevent the main code from executing
// the callback function is asynchronous JS
// it will not be executed immediately, but only after the timer has finished running in the background -- asynchronously
// it's non-blocking -- the rest of the code can keep running normally
// in summary, asynchronous programming is about coordinating the behavior of our program over a certain period of time


// Callback Functions

// in the above example, we need a callback function to implement the asynchronous behavior
// however, that doesn't mean that callback functions automatically make code asynchronous
// for example, the Array map method accepts a callback function, but that doesn't make that code asynchronous


// Asynchronous Example

const img = document.querySelector('.dog');
img.src = 'dog.jpg';
img.addEventListener('load', function() {
    img.classList.add('fadeIn';)
});
p.style.width = '300px';

// this example is about loading an image
// first two lines run in a synchronous way, one after the other
// in the second line, we set the source attribute of the image we selected in the first line
// this operation is asynchronous -- setting the source attribute of any image is essentially loading an image in the background while the rest of the code keeps running
// if it is a huge image, we wouldn't want the entire code to wait for it to load
// once the image has finished loading, a load event will automatically be emitted by JS
// we can listen for that event in order to act upon it
// in the code, we use add event listener and provide a callback function that will be executed once the image has been loaded
// all this code is non-blocking -- execution moves on right to the next line immediately
// the callback function is finally executed when the image is completely loaded and the load event is admitted
// event listeners alone do not make code asynchronous
// an event listener listening for a click on a button is not doing any work in the background
// waiting for a click is not doing anything
// so there is no asynchronous behavior involved at all


// AJAX

// let's say we have JS application running in the browser, which is called the client
// we want this application to get some countries data from a web server
// we send an HTTP request to the server
// the server will then send back a response containing the data we requested
// the back and forth between the client and the server happens asynchronously, in the background
// when we ask a server to send us data, the server usually contains a web API
// API = Application Programming Interface
// An API is basically software that can be used by other software to allow applications to talk to one another and exchange information
// countless types: DOM API or Geolocation API
// called APIs because they are self-contained, encapsulated software that allow other software to interact with them
// we can implement a small and simple API in a class where we make some methods available as a public interface

// we're interested in 3rd party APIs, APIs that other developers make available to us most of the time for free
// imagine we're building a travel application and have a database with different destinations and tours we're offering
// we could build our own API to receive requests fomr our front end application in JS and send back the results
// that would be our own API hosted on our own server
// alone, though, that probably wouldn't be enough to build a complete application
// we could then use some 3rd party APIs:
// get data about weather at destinations, the destinations themselves, flights, currency conversion, etc.
// can even use these APIs to send emails or texts or embed Google Maps into our application
// APIs make the modern web as we know it possible

// in JS, there are multiple ways of doing AJAX calls:

// XML HTTP Request
// First Step:
// we call this function then store the result in a new variable

// create request element for multiple countries
const getCountryData = function (country) {
    // create request
    const request = new XMLHttpRequest();
    // open request
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    // send request to above URL (endpoint)
    request.send();
// in order to get the result, we can't do something like:
// data = request.send();
// because the result simply isn't there yet
// the AJAX call that we send off is being executed in the background while the rest of the code keeps running
// this is the asychronous, non-blocking behavior
    // instead, we need to register a callback on the request object for the load event
    request.addEventListener('load', function() {
        console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);

    const renderCountry = function(data, className = '') {
        const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        // countriesContainer.style.opacity = 1;
    });
};

// on the request, we will wait for the load event
// in the background, that request fetches the data
// once it is done, it will emit the load event
// using this event listener, we are waiting for that event
// as soon as the data arrives, this callback function here will be called
// this.responseText logs all the data there is about Portugal at the endpoint returned in JSON format -- a long string of text
// JSON.parse converts that string into an object
// actually an array containing one object
// destructure const data by converting it to const [data]
// same as doing:
// const data = JSON.parse(this.responseText)[0];
// build card component const html
// replace the data in the component -- flag, name, region, population, name, currency -- drawing from the API
// under population, convert data to number by placing + in front of it
// insert HTML using countriesContainer
// set style of container to opacity one which will generate an animation triggered by the transition
// test multiple country request element:
getCountryData('portugal');
getCountryData('usa');
// data requests for Portugal and USA happen nearly simultaneously
// data for them is returned asynchronously
// USA data may appear before Portugal data
// non-blocking behavior in action


// on GitHub there is a huge Public APIs repository (you can Google it) that are free to use
// we'll be using REST Countries
// needs no authentication
// any API you use should always have CORS set to yes or maybe to unknown
// CORS stands for Cross Origin Resources Sharing
// without CORS, we cannot access a third party API from our own code

// endpoint (the url we'll be using):
// https://restcountries.com/v2/name/portugal


// Request-Response Model or Client-Server Architecture
// whenever we try to access a Web server, the browser, which is the client, sends a request to the server and the server will then send back a response that contains the data or Web page we requested
// this process works the exact same way, no matter if we're accessing an entire Web page or just some data from a Web API
// https://restcountries.eu/rest/v2/alpha/PT
// http or https is the protocol to be used on this connection
// /rest/v2... is the resource that we want to access
// restcountries.eu is the domain name
// not the real address of the server we're trying to access
// just a name that's easy for us to memorize
// this means we need a way of converting the domain name to the real address of the server
// that happens through DNS -- the domain name server
// like the phone book of the internet: will match the web address of the URL to the server's real IP address -- this happens through your internet service provider
// when the real IP address has been sent back to our browser, we can finally call it
// what the real IP address looks like:
// https://104.27.142.889:443
// protocol is https
// IP address is 104.27.142.889
// port number is 443 (default for HTTPs and HTTP) -- the port we access on the server identifying a specific service running on it, like a sub-address
// nothing to do with the /rest/v2 resource we want to access

// once we have the real IP address, a TCP socket connection is established between the browser and the server and they are now finally connected
// this connection will typically be kept alive the entire time it takes to transfer all the request files of the website or the data
// TCP is Transmission Control Protocol
// IP is Internet Protocol
// they are communication protocols that define exactly how data travels across the web -- the internet's fundamental control system, setting the rules for how data moves around the internet

// making our HTTP request
// HyperText Transfer Protocol
// a communication protocol is a system of rules that allow two or more parties to communicate
// HTTP is a protocol that allows clients and web servers to communicate by sending request and response messages from client to server and back
// request message format:

//  GET /rest/v2/alpha/PT HTTP/1.1
//  Host: www.google.com
//  User-Agent: Mozilla/5.0
//  Accept-Language: en-US
// 
//  <BODY>

// beginning of the message is the most important part, called the start line
// it contains the HTTP method that is used in the request, the request target and the HTTP version
// there many available HTTP methods
// most important ones are:
// GET for simply requesting data
// POST for sending data
// PUT and PATCH for modifying data

// the request target
// where the server is told that we want to access the rest/v2/alpha resource
// the server figures out what to do with it
// if the target is empty -- just a slash -- then we'd be accessing the website's route, restcountries.eu in this example
// request headers, information we send about hte request itself
// many different standard headers: what browser is used to make the request, user's language, and many more
// there is also a request body containing the data we're sending, for example, coming from an HTML form

// HTTPS
// main difference between HTTPS and HTTP is that HTTPS is encrypted
// TLS or SSL are the protocols which are used to encrypt HTTPS
// besides that, the logic behind HTTP requests and responses still applies to HTTPS

// formed request now hits the server, which will work on it until it has our data or web page ready to send back

// HTTP response 
// response message looks similar to request
// has a start line, headers and a body
// HTTP response message format:
// 
// HTTP/1.1 200 OK
// 
// Date: Fri, 18 Jan 2021
// Content-Type: text/html
// Transfer-Encoding: chunked
// 
// <BODY>

// in this example, the start line has, besides the version, a status code and message
// these are used to let the client know whether the request has been successful or failed
// 200 means okay
// 404 means page not found

// TCP/IP
// how request and response data is sent across the web
// TCP and IP are the communication protocols that define how data travels across the web
// TCP
// first job: break requests and responses down into small chunks of data called packets, before they're sent
// second job: once the packets arrive at their final destination, TCP will reassemble all of them back into the original request or response
// this is necessary so that each packet can take a different route through the internet so the message arrives at its destination as quickly as possible
// that wouldn't be possible if the entire request or response were sent as a single big chunk of data
// like trying to get through a traffic jam in the biggest bus imaginable
// IP 
// sends and routes the packets through the internet
// ensures they arrive at the proper destinations using the IP address on each packet

// Asynch JS
// in previous lecture, we did a simple AJAX call to fetch data from a country's API
// we created a function to do that and called it multiple times
// those calls ran in parallel and we couldn't control which one finished first
// in this lecture, we'll create a sequence of AJAX calls so that the second one only runs after the first one has finished
// in the countries data there is a property of bordering countries
// in the case of Portugal, that property is "ESP," for Spain
// so, after the first AJAX call is completed, we will get this bordering country value
// then, based on that code, we'll render the neighboring country right beside the original

const getCountryAndNeighbour = function(country) {

    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function(){
        const [data] = JSON.parse(this. responseText);
        console.log(data);

        // Render country 1
        renderCountry(data);

        // Get neighbour country (2)
        const [neighbour] = data.borders;

        // original immediate return solution for countries with no borders property:
        // if (!neighbour) return;

        // AJAX call country 2
        // const request2 = new XMLHttpRequest();
        // request2.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
        // request2.send();

        request2.addEventListener('load', function() {
            console.log(this.responseText);

            renderCountry(data2, 'neighbour')
        });

        // searching by code and neighboring country:
        // const request = new XMLHttpRequest();
        // request.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        // request.send();

        // the firing of the second AJAX call happens inside the callback function of the first one
        // inside this callback function, we are adding a new event listener for the new request

        // });
        // };

        // use optional chaining to account for countries with no borders property (island nations, for instance):
        const [neighbour] = data.borders?.[0];
    });
};

getCountryAndNeighbour('portugal');

// Callback Hell
// with nested callbacks, doing more such requests in sequence -- the neighbor of the neighbor of the neighbor ten times over -- would be an unmanageable structure
// this happens for all asynchronous tasks, not just AJAX calls
// makes code harder to maintain, difficult to understand and reason through
// code will have more bugs and will be more difficult to add new features and functionality to it
// since ES6, we can escape callback hell via promises


// Promises and Fetch API

// old XML HTTP request function:
// const getCountryData = function (country) {
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// Fetch API
const request = fetch(https://restcountries.com/v2/name/${country});  

// for more complex AJAX calls, the fetch function can take in an object of options as well

// What Are Promises?     
// formal definition:
// an object that is used as a placeholder for the future result of an asynchronous operation
// less formal:
// a container for an asynchronously delivered value
// even less formal:
// a container for a future value
// perfect example of a future value is the response coming from an AJAX call
// when we start the AJAX call there is no value yet, but we know there will be a value in the future
// we use the promise to handle this future value

// Lottery Ticket Promise Analogy
// when you buy a lottery ticket, you're buying the promise that you'll receive an amount of moeny in the future if you guess the correct outcome
// you buy the ticket now with the prospect of winning money in the future
// and the lottery draw which determines if you get the money or not happens asynchronously
// you don't have to drop everything else you're doing and wait until the lottery draw happens
// in the event you do get the correct outcome, you will then receive your money because you have your lottery ticket, which is the promise that you bought

// Big Advantage of Using Promises
// 1. no longer need to rely on events and callback functions to handles asynchronous results
// events and callback functions can sometimes cause unpredictable results
// 2. even better, we can chain promises for a sequence of asynchronous operations instead of nesting like we did before
// and with this, we can finally escape callback hell
// promises are an ES6 feature
// they became available in JS in 2015, so are now widely used by everyone

// Life Cycle of a Promise
// since promises work with asynchronous operations, they are time sensitive -- they change over time
// promises can be in different states
// in the beginning, we say that a promise is pending
// this is before any value resulting from the asynchronous talk is available
// during this time, the asynchronous task will be doing its work in the background
// when the task finally finishes, the promise is settled
// two types of settled promises:
// 1. fulfilled promise - a promise that has successfully resulted in a value, just as we expect it
// for example, a promise used to fetch data from an API successfully gets that data with it now being available to use
// 2. rejected promise - means there has been an error during the asynchronous task
// for example, in fetching data from API, the user is offline and can't connect to the API server

// analogy of the lottery ticket
// the lottery draw is the asynchronous task which determines the result
// once the result is available, the ticket is settled
// if we guessed the correct outcome, the lottery ticket will be redeemed and we will get our money
// if didn't guess the correct outcome, the ticket gets rejected and we wasted our money

// these different states are important to understand because, when we use promises in our code, we will be able to handle the different states in order to do something as a result of either a successful promise or a rejected one

// a promise is only settled once -- from then on, that state will remain unchanged forever
// whether the promise was fulfilled or rejected, it's impossible to change that state

// the different states are relevant and useful when we use a promise to get a result
// in other words, we consume a promise

// for a promise to exist, it must first be built
// in case of the fetch API, it's the fetch function that builds the promise and returns it for us to consume
// in this case, we don't have to build the promise ourselves in order to consume it
// most of the time we will just consume promises, which is the easier and more useful part
// sometimes, we'll also need to build a promise


// Consuming Promises

// consume promise returned by the fetch function:

const getCountryData = function(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then();
};

// calling the fetch function will immediately return a promise
// in the beginning, this promise is still pending because the asynchronous task of getting the data is running in the background
// at a certain point, the promise will be settled in either a fulfilled or a rejected state
// assume the promise will be fulfilled and that we have an available value with which to work
// to handle this fulfilled state, we can use the then method that is available on all promises

const getCountryData = function(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response) {

    })
};

// calling the fetch function will immediately return a promise
// in the beginning, this promise is still pending because the asynchronous task of getting the data is running in the background
// at a certain point, the promise will be settled in either a fulfilled or a rejected state
// assume the promise will be fulfilled and that we have an available value with which to work
// to handle this fulfilled state, we can use the then method that is available on all promises
// into the then method, we need to pass a callback function that we want to be executed as soon as the promise is fulfilled -- as soon as the result is available
// this function will receive one argument once it's called by JS -- the resulting value of the fulfilled promise

const getCountryData = function(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(
        response
        ) {
            console.log(response);
            return response.json();
        }).then(function(data) {
            console.log(data);
            renderCountry(data[0];)
        });
};
getCountryData('portugal');

// calling the fetch function will immediately return a promise
// in the beginning, this promise is still pending because the asynchronous task of getting the data is running in the background
// at a certain point, the promise will be settled in either a fulfilled or a rejected state
// assume the promise will be fulfilled and that we have an available value with which to work
// to handle this fulfilled state, we can use the then method that is available on all promises
// into the then method, we need to pass a callback function that we want to be executed as soon as the promise is fulfilled -- as soon as the result is available
// this function will receive one argument once it's called by JS -- the resulting value of the fulfilled promise

// Response
// console log returns object of a type called "Response"
// (contains status code for the headers, among other things)
// the data is in the response body is a ReadableStream, but in order to actually be able to read it, we need to call JSON method on response
// JSON method is available on all the response objects coming from the fetch function, all the resolved values
// problem:
// the JSON function is actually asynchronous itself
// meaning, it will also return a new promise
// confusing, but that's just how it works
// need to return the new promise
// need to handle the new promise by calling a new then
// need another callback function we'll call data
// console.log of data shows that we are back to having the same data as before but this time using two promises
// the resolved value of the promise return response.json() is the data we're looking for itself
// all that's left to do is render country of data zero
// simplifying the code:

const getCountryData = function(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => response.json())
        .then(data) => renderCountry(data[0]));
};
getCountryData('portugal');

// getting rid of the console.logs, we can use arrow functions instead
// this will work because we can now implicitly return the result
// the code becomes more like a readable sentence and therefore more easily understandable
// we're still using callbacks
// promises do not get rid of callbacks, but they do get rid of callback hell


// Chaining Promises
// how to chain promises in order, for instance, to also render the neighboring country of the initial country in the function
// we already have a small chain of promises because of the JSON function: the two .thens that are called in sequence

// chaining together two sequential AJAX calls

const getCountryData = function(country) {
    // Country 1
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response => response.json())
        .then(data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if(!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        })
        .then(response => response.json())
        .then(data => renderCountry(data, 'neighbour'));
};
getCountryData('portugal');

// if there is no neighbor, then return immediately
// this isn't going to work, but never mind it for now -- will be dealt with in the error-handling section
// second AJAX call
// need to return the new promise so we'll be able to chain a new then method on the result of the this then (data) method
// the then method always returns a promise, no matter whether we actually return anything or not
// if we do return a value, that value will become the fulfilled value of the return promise
// to demonstrate, instead of:
// return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
// we instead:
//  return 23;
// });
// .then(data => alert(23));
// and 23 comes up in an alert

// call the JSON method to handle the response
// render country with data
// pass in CSS class for the neighbour
// testing with different countries:
// getCountryData('portugal');
// we get Spain
// getCountryData('germany');
// we get Austria
// promises allow us to handle complex asynchronous operations with as many steps as we want
// we have four steps in the example above, but we can extend that as much as we want
// even if we wanted the neighbor of the neighbor of the neighbor -- 10 countries, say -- we could easily get it by chaining all these promises one after another
// instead of callback hell, we have a flat chain of promises that is very easy to read and understand
// common beginner's mistake is chaining the then method directly onto a new nested promise
// fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`).then(response => response.json());
// this does work but we are then back in callback hell
// we have one callback function defined inside of another one, exactly what we're trying to avoid


// Handling Rejected Promises
// a rejected promise is one in which an error has happened
// how do we handle such rejected promises?
// the only in which the fetch promise rejects is when the user loses their internet connection
// for now, that will be the only error we will be handling
// we want to simulate that the webpage was loaded but then as the user makes their request without internet connectivity we want to see the error happening

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforehand', msg);
    // countriesContainer.style.opacity = 1;
};

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => 
        if(!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

const getCountryData = function(country) {
    // Country 1
    getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
    
    // fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    //     .then(response => {
    //         if(!response.ok)
    //             throw new Error(`Country not found (${response.status})`)

    //             return response.json();
    //         })
        .then(data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if(!neighbour) throw new Error('No neighbor found!');

            // Country 2
            return getJSON(
                `https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found');
        })
        // .then(
        //     response => response.json(),
        //     // err => alert(err)
        // )
        .then(data => renderCountry(data, 'neighbour'))
        // .catch(err => alert(err))
        .catch(err => {
            console.error(`${err} 💥💥💥`)
            renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
};

btn.addEventListener('click', function() {
    getCountryData('portugal');
})

// at top of code, we already have:
// const btn = document.querySelector('.btn-country);
// in index.html we comment out .btn-country
// select Offline under Network and click the "Where am I?" button on the webpage
// that click/request returns two errors:
// ERR_INTERNET_DISCONNECTED
// Uncaught (in promise) TypeError: Failed to fetch
// for the first time, the promise that's returned from the fetch function has been rejected
// two ways of handling rejections:
// 1. pass a second callback function into the then method
// the first callback function is always going to be called for the fulfilled, that is, successful promise
// 2. pass a second callback that will be called when the promise is rejected
// this callback function will be called with an argument which the error itself
// we will simply alert the error
// we handle the error by displaying the alert window
// and, the error we had before, ERR_INTERNET_DISCONNECTED, has disappeared
// in fact, we no longer have it as an Uncaught error because we did catch it right at:
// err => alert(err)
// handling an error is also called catching the error
// in this case, there are no more errors because the chain stops here when the error happens and it's handled
// what if the first fetch promise was fulfilled but the second fetch promise was rejected?
// can insert the error handling function after .then of the second promise, but that gets annoying
// there is a better way of handling all these errors globally in one central place
// instead of having all these callback error functions throughout, delete them
// nicer having one callback in the then and handling all the errors, no matter where they appear in the chain, right at the end of the chain by adding a catch method
// then we can use the same callback function here
// it will also be called with the error object that occurred and then we can handle
// the catch method at the end of the chain will catch any errors that occur in any place in the whole promise chain, no matter where they are
// errors propagate down the chain until they ar caught
// only if they're not caught anywhere do we then get the Uncaught error we saw earlier
// log error to console again using .error for style and using 💥💥💥 emojis to indicate we printed this
// usually, simply logging the error to the console is not enough in an application with a user interface
// let's also, then, display the error message for the user to see
// so create a renderError function outside and above the code
// use .insertAdjacentText so it doesn't create any new HTML elements
// just as we did in the render countries function, remember that we always have to set the opacity back to 1, because otherwise the container is not going to be visible
// place the render error and render country functions at the top of the file
// use renderError and print the error
// any error in JS that was created with a constructor, just like a map or set, contains the message property
// we can use that to only print the message of that error and not the whole object itself
/ testing by going Offline:
// in the HTML we get the error message:
// Something went wrong 💥💥 Failed to fetch. Try again!
// in the console we get the entire error:
// TypeError: Failed to fetch 💥💥💥
// which includes the stack trace showing us exactly where the error comes from

// Finally Method
// add .finally at the end of the function
// the callback function we defined here will always be called, regardless of whether the promise is fulfilled or rejected
// we use this method for something that needs to happen no matter the outcome of the promise
// one use case is to hide a loading spinner
// these are the rotating color wheels that spin onscreen while a web application is loading data
// the spinner is shown when an asychronous operation starts and is hidden once the operation completes
// it's hidden regardless of whether the operation was successful or not
// in our case, we always need to fade-in the countries container -- that always happens, no matter what
// so we comment-out countriesContainer.style.opacity = 1 in both 
// and place countriesContainer.style.opacity = 1 in the finally method function
// this can only work if catch itself also returns a promise

// searching for a country that doesn't exist
// getCountryData('dsfddsfsdf');
// returns console log:
// TypeError: Cannot read property 'flag' of undefined
// however, this is not reflective of the true error, which is that the API can't find any country with this name
// because this is a 404 error, the fetch promise will still get fulfilled
// there is no rejection so the catch handler cannot pick up on the real error


// Throwing Errors Manually
// because the API couldn't find any country with the entered name during the fetch, there was a request 404 error
// even though there was an obviously big problem with this request, the fetch function did not reject the case
// we will therefore have to do it manually

// checking response object:
// when ok property is set to false, the reason for it is that the status code is 404
// when ok property is set to true, that's because the status code is 200 -- okay
// we can use the fact that the response has the ok property set to false to reject the promise ourselves manually
// we can say, if response.ok is false the we throw a new error and here we can define an error message
// we can also add the status code to display as well
// analysis of what happens here:
// by using the constructor function, we create a new error
// we pass in an error message
// we us the throw keyword which immediately terminates the current function (just like return does)
// the effect of creating and throwing an error in any of these methods is that the promise will immediately reject
// the promise returned by this then handler will be a rejected one
// and that rejection will then propagate all the way down to the catch handler

// why bother handling errors?
// 1. it's the only way we can display an error message on the screen for the user
// 2. really bad practice to leave rejected promises without handling them -- don't do that, always use catch or even finally to handle

// what if there is no error in this promise?
// what if, for example, there is a nonexistent country neighbour entered in the second promise?
// the error isn't handled
// if we copy the previous code into this then handler, we get the error message we want, 400, but then we have a lot of duplicate, repetitive code

// it's a good time to create a nice helper function
// it will wrap up the fetch, the error handling, and also the converstion to JSON
// getJSON
// to make this function truly generic, we do not want to hard code the error message
// instead, we want to pass it in along with response.status
// still need to handle the occasions when a country may have no neighbor -- Australia, for example

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// Jonas's Solution

const whereAmI = function(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
        if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch (`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
        if (!res.ok)
            throw new Error(`Country not found (${res.status})`);

        return res.json();
        })
        then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.588, 13.381);
// fetch request to the URL
// use a template string because we need to pug in latitude (lat) and, after the comma, longitude (lng)
// call then method and get response (res)
// immediately return res.json()
// which will then return a new promise
// and it is this one which will get us the data, as it's going to be the resolved value of the promise
// testing:
// coordinates return "You are in Berlin, Germany"
// additional test coordinates:
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// log to console "undefined"
// where API only allows 3 requests per second, we get a 403 error
// the fetch function isn't correctly handling this error -- it isn't rejecting th promise even though this clearly is an error
// we need to do this manually with a return
// two test cases now resolve:
// "You are in Mumbai, India"
// "You are in Cape Town, South Africa"
// reloading very fast gets us uncaught promise
// error message is already the one that we want, but it shouldn't be uncaught
// we need to catch any promise rejection
// error message now reads "Problem with geocoding 403 💥"
// we could now do something more meaningful with our error handling, like displaying some kind of error message
// or logging this error in an error tracking application
// use this data to render a country


// Asynchronous Behind the Scenes: The Event Loop
// JS Runtime in the Browser Review
// JS runtime is a "container" with all the pieces necessary to execute JS code
// JS Engine
// the heart of every JS runtime is the engine
// it's where, in the call stack, the code is executed
// it's also where, in the heap, objects are stored in memory
// important to note: JS has only one thread of execution -- it can only do one thing at a time, no multitasking
// other languages, Java for instance, can execute multiple pieces of code at the same time, but not JS
// Web APIs environment
// APIs provided to the engine but not part of the JS language itself
// the DOM, timers, the fetch API, the geolocation API, etc.
// Callback Queue
// data structure that holds all the ready to be executed callback functions that are attached to an event that has occurred
// data structure that holds all the ready to be executed callback functions that are attached to an event that has occurred
// whenever the call stack is empty, the event loop takes callback from the callback queue and puts them into the call stack so they can be executed
// the event loop is the essential piece that makes asynchronous behavior possible in JS
// it's the reason we can have a non-blocking concurrency model in JS
// a concurrency model is how a language handles multiple things happening at the same time

// How does this nonblocking concurrency work?
// Why is the event loop so important?
// If the JS engine is built around the idea of single thread, but there's only one thread of execution in the engine, then how can asynchronous code be executed in a non-blocking way?
// start by selecting this image element in the code:
// el = document.querySelector('img');
// in the Call Stack:
// Execution context:
// querySelector()
// in the next line, we set the source attribute of that image to dog.jpg:
// el.src = 'dog.jpg';
// this will now start to load the image asynchronously in the background
// what is this mysterious background?
// everything related to the DOM isn't part of JS but of the web APIs
// a web API environment is where the asynchronous tasks related to the DOM will run
// the same is true for AJAX timers calls and all other asynchronous tasks
// if the image were to load in a synchronous way, it would be doing so right in the call stack and blocking the rest of the code
// JS is asynchronous so that it does not happen in the call stack
// if we want to do something after the image has finished loading then we need to listen to the load event
// so we attach an event listener to the load event of that image and pass in a callback function, as always
// el.addEventListener('load', () => {
//  el.classList.add('fadeIn');
// });
// make an AJAX call using the fetch API:
// fetch('https://someurl.com/api')
//  .then(res => console.log(res));
// as always, asynch fetch operation will happen in the web API's environment
// otherwise, we'd be blocking the call stack and creating a huge lag in our application
// finally, we use the then method on the promise returned by the fetch function
// this will also register a callback in the web API environment so we can react to the future resolved value of the promise
// with this, we've now executed all the top level code -- that is, all the code not inside any callback function -- in a synchronous way
// we have the image loading in the background and some data being fetched from an API
// let's say the image has finished loading and therefore the load event is emitted on that image
// then the callback for this event is put into the callback queue
// callback queue is an ordered list of all the callback functions that are in line to be executed
// it's like a to-do list you would write for yourself with all the taks you have to completed
// in this case, it's a list of the tasks the call stack will have to complete
// if there already were other callbacks waiting in this example, then this new callback would go all the way to the back of the queue, where it would patiently wait for its turn to run
// this has big implications:
// imagine setting a timer for five seconds
// after five seconds, that timer's callback will be put in the callback queue
// if there were already other callbacks waiting and it took one second for all of them to run, the new timer's callback would only run after six seconds rather than five
// this means that the timer's duration that you define, is not a guarantee
// the only guarantee is that the timer's callback won't run before five seconds, but very well might run after five seconds have passed -- it all depends on the state of the callback queue
// important: callback queue also contains callbacks coming from DOM events like clicks and key presses
// DOM events aren't asynchronous behavior, but they still use the callback queue to run their attached callbacks
// if a click happens on a button with an event listener the result will be like the asynchronous load event

// Event Loop
// looks into the call stack and determines whether it's empty or not (except for the global context)
// if the stack is empty -- meaning there's no code being executed -- then it will take the first callback from the callback queue and put it on the call stack to be executed
// this is called an event loop tick
/ the event loop has the critical task of coordinating between the call stack and the callbacks in the queue
// the event loop decides exactly when each callback gets executed
// the event loop orchestrates the entire JS runtime
// from all of this it becomes clear that the JS language itself has no sense of time
// that's because all that is asynchronous does not happen in the enginge
// it's the runtime that manages all the asynchronous behavior
// and the event loop determines which code will be executed next
// while the engine itself simply executes whatever code it is given
// example recap:
// the image started loading asynchrononously in the web API environment and  not in the call stack
// we used addEventListener to attach a callback function to the image load event
// this callback is our asynchronous code -- code we deferred into the future because we only want it to execute once the image has loaded
// in the meantime, the rest of the code keeps running
// the addEventListener did not put the callback directly in the callback queue
// instead, it simply registered the callback which then kept waiting in the web API environment until the load event fired off
// only then did the environment put the callback in the queue
// then, while in the queue, the callback kept waiting for the event loop to pick it up and put it on the call stack
// this happened once the callback was first in line and the call stack was empty
// all this happened so the image would not have to load in the call stack but instead in the background in a non-blocking way
// the web API environment, the callback queue, and the event loop all together make it possible for asynchronous code to be executed in a non-blocking way even wth only one thread of execution in the engine
// we still have the fetch function getting data from the AJAX call in the background
// this is happening by means of a promise
// with promises, things work in a slightly different way:
// let's say the data has finally arrived, so the fetch is done
// callbacks related to promises like the one we registered with the promises then method do not go into the callback queue
// instead, callbacks of promises have a special queue for themselves
// callbacks from promises have a special microtasks queue for themselves
// it has priority over the callback queue
// at the end of an event loop tick, after a callback has been taken from the callback queue, the event loop will check if there are any callbacks in the microtasks queue
// if there are, it will run all of them before it will run any more callbacks from the callback queue
// these callbacks from promises are called microtasks, hence the microtasks queue
// in our example, we have a microtask sitting in the microtasks queue while the call stack is empty
// therefore, the event loop will take the microtask and put it in the call stack just like it does with callbacks from the callback queue
// regardless of whether the callback queue is empty or not, the microtask will always be taken first as microtasks have priority over callbacks
// in practice, microtasks can cut in line before all other regular callbacks
// if one microtask adds a new microtask then the new microtask is also executed before any callbacks from the callback queue are
// if we keep adding more and more microtasks, then callbacks in the callback queue can never execute
// this is never really an occurrence but the possibility exists and may even be a coding interview question


// Event Loop in Practice
// extremely simple example:
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
// a timer which should call a timer function exactly after zero seconds
// meaning, after zero seconds, that callback will be put on the callback queue

// next, we'll build a promise that resolves immediately:
Promise.resolve('Resolved promise 1')
	.then(res => console.log(res));
// Promise.resolve() allows us to build a promise that is immediately resolved, one that immediately has a success value
// that fulfilled success value is going to be the one we passed in
// and then we can handle that resolved promise by logging it to the console
// just like any other promise, we can handle it with a then method and the callback function will get called with the resolved value as an argument

// in what order do we think these four messages below will be logged to the console?
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1')
	.then(res => console.log(res));
console.log('Test end');

// the first two messages that will be printed should be obvious because we already know that any top-level code -- code outside of any callback -- will run first
// so of course the first two logs will come from these two synchronous console.logs
// between the timer and the resolved promise it will be a little tricker to figure which will run first
// both will finish at the exact same time, right after zero seconds
// the timer because we told it to finish after zero seconds, and
// the promise because we told it to resolve immediately
// which one will be handled first, that is which of these two callbacks will be executed first?
// the timer appears first in the code and so its callback will be put on the callback queue first
// but that doesn't mean it will be executed first
// because the callback of the resolved promise will be put in the microtasks queue, it will have priority over the callback in the callback queue, executing first
// order in which they will finish:
// Test start, then Test end, then Promise 1, then finally, the timer
// implication of microtasks having priority over regular callback sis that if a microtask takes a long time to run then the regular callback timer will be delayed
// it will run a little bit later, just after the microtask is done with its work
// to simulate that this callback takes a long time to run, loop over a large number with an old school for loop:

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1')
	.then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
for (let i = 0; i < 1000000000; i++){
console.log(res);
})

console.log('Test end');

// to clarify, it isn't the asynchronous task itself that takes a long time -- the promise itself will be resolved immediately -- but the microtask it contains that is put in the microtasks queue, that's what will take a long time
// the zero second timer message appears on the screen after taking a lot of time
// this is proof that the zero seconds timer settings are not a guarantee
// this means you cannot do high precision things using JS timers


// Building a Simple Promise

// lottery simulation using a promise:
// a fulfilled promise means to win the lottery
// a rejected promise means to lose the lottery
// create a new promise using promise constructor
// promises are a special kind of object in JS
// takes exactly one argument which is the executor function
// as soon as the promise constructor runs, it will automatically execute the executor function we pass in
// as it does, it will pass in two other arguments: the resolve and reject functions
// to build the executor function, we will store the result in the variable lotteryPromise
// like the fetch function, which also creates a new promise
// the executor function will contain the asynchronous behavior we're trying to handle with the promise
// so the executor function should eventually produce a result value, the value that going to be the future value of the promise
// very simplified example: we win 50% of cases and lose 50%

const lotteryPromise = new Promise(function(resolve, reject) {
    if (Math.random() >= 0.5) {
        resolve('You WIN ');
    } else {
        reject('You lost your money')
    }
});

// consuming the promise we just built:
// logging the resolved value of the promise
// catching and logging any errors

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));
// every time this runs, it results in a success (lottery win) or an error (lottery loss)
// to make this example asynchronous, we will add a simple timer set to 2 seconds
// instead of just passing a string in reject, we can create a new error object
// logging results in 'Lottery draw is happening' appearing immediately each time
// 'You WIN ' or 'You lost your money' appear 2 seconds after the lottery draw console loge
// and 'You lost your money' appears as an error message, telling where the error originated

const lotteryPromise = new Promise(function(resolve, reject) {

    console.log('Lottery draw is happening');
    setTimeout(function() {
        if (Math.random() >= 0.5) {
            resolve('You WIN ');
        } else {
            reject(new Error('You lost your money'));
        }
    }, 2000)
});

// in practice, most of the time all we do is consume promises
// we usually only build promises to wrap old callback-based functions into promises
// this process is called promisifying -- to convert callback-based asynchronous behavior to promises-based
// to see this in action:
// we will promisify a set timeout function and create a wait function
// wait function will take in a number of seconds
// inside it, we will create and return the promise, encapsulating the asynchronous operation even further -- what a fetch function does
// in the case below, we don't need the reject function because it's impossible for the timer to fail, so we'll never have to mark this promise as rejected
// similar to array methods such as map which always receives three arguments even though most of the time we use but one or two of them
// in this case, we're not going to pass any resolved value into the resolve function because that isn't mandatory
// in the case of this timer, it's also not necessary
// in this case, all we want to do is make our code wait
// we want our timer to run for a certain number of seconds so we multiply the value by 1000
// can improve this by making it smaller using arrow functions

// Promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    })
}

// calling our wait function:
// this will create a promise that will wait for two seconds and then resolve
// receiving no resolved value in our callback function leaving it empty and simply log to the console
// we could run any code we want executed after two seconds
// but let's wait one more second by returning a new promise here that waits one second
// exactly what we did before when we chained two sequential AJAX calls using the fetch funciton
// the result of the first was that we would create a new fetch and return it -- that's what we're doing here
// all of this returns a new promise that we can then handle
// with this, we now have a nice chain of asynchronous behavior that happens in a sequence without descending into callback hell

wait(2).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
})
.then(() => console.log('I waited for 1 second'));

// achieving the same result without using multiple timers in callback hell:

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// create a fulfilled or rejected promise immediately
// static  method on the promise constructor
// for reject, the .then isn't necessary because there will be no resolved value
// create new error for reject

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));


// Promisifying the Geolocation API

// geolocation API review
// a case of an error could be when the user doesn't allow the page to get access to the current location
// JS asks us for permission and when we allow it, at some point, when JS figures out the location, we get that data back
// this is asynchronous behavior
// the code is not blocked, which we can check with a console log after the geolocation
// 'Getting position' logs first in the console because the function above it offloaded its to the background, to the web API environment of the browser, then immediately moved on the the console log in the next line
// so this is very clearly a callback-based API
// this is another great opportunity to promisify a callback-based API into a promise-based API
// first is the success callback function -- it receives the position
// when we have success, we want to resolve the promise and mark it as fulfilled
// we therefore call the resolve function and pass in that position object because it's the fulfilled value we want to get from the promise when it is successful
// previously, we passed a simple string into resolve for a value
// in this case, the future value of the promise is this much more meaningful object, the value that is the current position
// we do the same with reject, replacing the console log with it
// we can make this even simpler:
// if the function automatically calls the callback functions and passes in the position, we can do the below
// before we specified the callback manually, but all we did was to take the position and pass it down into resolve, which in the simpler version happens automatically
// resolve itself is now the callback function which will get called with the position
// and the same with reject

// navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.error(err)
// );
// console.log('Getting position');
// log this position to the console -- don't need the catch block for now

const getPosition = function() {
    return new Promise(function(resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

// getPosition().then(pos => console.log(pos));
// logs in console:
// GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1598180761035}

// in last coding challenge, we built a function which receives GPS coordinates then renders the corresponding country
// in the original code, we passed in latitude and longitude then reverse geocoded to find the country belonging to those coordinates
// now we get these coordinates via geolocation so we no longer have to pass them into that function
// start by getting the position then doing something with it
// see the latitude and longitude of this coords object
// destructure object and rename latitude and longitude to lat and lng
// chain the next promise, creating a new promise and returning it
// chain the then handler
// error message: latitude is not defined
// in destructuring, the equal sign is for setting a default value, which we're not doing here
// use : instead of = to set value
// now when run, whereAmI identifies the country the user's device is in through geolocation coordinates, then provides data about that country, including displaying its flag
// instead of a callback hell, we have a nice flat chain of promises that is easy to handle and manage
// we can promisify all kinds of asynchronous stuff in JS:
// for example, the old XM HTTP request function we used to make AJAX calls
// the image loading example

const whereAmI = function() {
    getPosition().then(pos => {
        // console.log(pos.coords);
        const {latitude: lat, longitude: lng} = pos.coords;
        
        return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    })
    .then(res => {
        if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);

        return fetch (`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
        if (!res.ok)
            throw new Error(`Country not found (${res.status})`);

        return res.json();
        })
        then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

btn.addEventListener('click', whereAmI);


///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// me:
const createImage = function(imgPath) {
	document.createElement('.img/img-1.jpg')
        return fetch()
    })

// Jonas:
// create image which will take in an image path
// return a new promise
// resolve and reject functions which are received by our executor function
// create a new image using document.createElement:
// create a new element of the type image ('img')
// set the source property to the image path that is received
// on that image, we can wait for the load event
// append image to DOM element with images class
// resolve the promise with the image element
// we should also listen for the error event
// in this case, we will reject the promise with a new error:
// image not found, because that will be the most likely error

const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img src = imgPath;

        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function() {
            reject(new Error('Image not found'));
        })
    });
};

// handle the fulfilled/successful promise
// we received the image as the resolved value
// we don't need to do anything here because the image is already being appended to the DOM
// for now, we can log a message to the console and later worry about waiting the two seconds
// set image path
// add the catch handler to log the error
// pause execution for two seconds using wait function
// return that so we can chain the next then handler to it
// wait doesn't have any resolved value so we don't specify any argument or parameter in this function
// we want to hide the first image
// however, that image is only defined in the first then function and not the second one
// we will need a global variable
// then set current image to the image and current image style display to none
// load second image and wait two seconds
// then hide second image

let currentImg;

createImage('img/img-1.jpg')
.then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
})
.then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
})
.then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
})
.then(() => {
    currentImg.style.display = 'none';
})
.catch(err => console.error(err));


// Consuming Promises with Async/Await
// since ES 2017, there's an even better and easier way to consume promises called async/await
// start by creating a special kind of function, the async function
// start with the whereAmI function then add asynch in front of the function
// the async function will keep running in the background while executing the code inside of it
// when it is done executing, the async function will automatically return a promise
// inside an async function we can have one or more await statements
// then we need a promise
// let's use our API again to search for a country
// this will return a promise, and in an async function like this one, we can use the await kw to wait for the result of this promise
// await will stop the code execution until the promise is fulfilled
// stopping code execution in an async function is not a problem because the rest of the function continues to run asynchronously in the background
// it isn't blocking the main thread of execution; it isn't blocking the call stack
// what's so special about async await is that it makes our code look like regular synchronous code, while behind the scenes everything is running asynchronously
// the value of the whole await expression is going to be the resolved value of the promise
// store that in a variable named res for response
// then take a look at that response and prove that the function is asynchronous
// call the whereAmI function first, before the console log FIRST
// even so, console log FIRST will be displayed first
// because, once the function is called, it is then loaded off into the background
// the fetch will be running in the background without blocking our main thread
// the code will move on to the next line, then, which is the console log FIRST
// previously, this was impossible, and promises had to be consumed by the then method
// it's now easier
// await and store the results directly into our data variable
// we then render the data
// now we finish the function with the geolocation and reverse geocoding
// destructure getPosition variable to get latitude and longitude from position coordinates
// we plug these latitude and longitude values into the reverse geocoding API
// it becomes a lot easier to chain promises because we don't have to return anything
// we don't have to create new then methods and we don't have to create new callback functions
// we just await and store the results in a variable
// handle JSON from geocoding response
// we can plug country data in the URL
// and we can eliminate country parameter from whereAmI async function
// no longer need to pass the country name into whereAmI
// take a moment and appreciate how beautiful the below data flow is:
// we have all of it in one nice async function that run behind the scenes until everything is finished
// we await five promises in a very easy way
// we have code that looks and feels like normal synchronous code
// Jonas: async await feature has been a huge, huge addition to the JS langauge
// remember that async await is syntactic sugar over consuming promises -- a bit like classes in JS, hiding the true nature of how things work behind the scenes

const getPosition = function() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI = async function() {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat}, ${lng}?geoit=json`);
    const dataGeo = await resGeo.json();

    
    // Country data
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
    const data = await res.jason();
    console.lag(data);
    renderCountry(data[0]);
}
whereAmI();
console.log('FIRST');


// Error Handling with Try Catch

// how error handling works with async await
// can't use the catch method because we can't really attach it anywhere
// instead, we use a try catch statement
// used in regular JS as well
// try catch has nothing to do with async await, but we can use it to catch errors in async functions
// we can wrap all our code in a try block
// JS will then try to execute this code
// simple example: 
// create a let and a const variable then accidentally reassigning the const variable which should give us an error because it isn't legal as we can't reassign a constant 
// (have to do it without the try block)
// error: assignment to constant variable
// we can now add the catch block
// it will have access to whatever error occurred in the try block
// we can now do something with this error
// let us alert the the error message
// (any error has the message property)
// "Assignment to constant variable." now shows up as alert and no longer in the console
// because of this, the script no longer dies and we can instead catch the error and handle it
// if we assign the value 3 correctly to y instead of x, then we will get no error from the try catch block
// this example is a stupid syntax error and we're not going to use try catch to find mistakes we've made in our code

// try {
//     let y = 1;
//     const x = 2;
//     // x = 3;
//     y = 3;
// } catch(err) {
//     alert(err.message);
// }

// let's use try catch for something more useful: handling real errors in async functions
// let's wrap the entire code for this function into a try block
// after that, we add the catch block, which has access to whatever errors occur in the try block
// we can then handle the errors just as we did with the catch method
// let's force an error by reloading really fast
// easiest way is to call the function multiple times
// add emoji so that we can see that we are logging the error we've created
// we do have some error handling -- we are able to add the error to the user interface
// that error isn't really meaningful, because the fetch promise doesn't reject the 404 (country not found) or 403 (too many requests to the reverse geocoding API) errors
// the solution is simple and the same as before
// we manually create an error that will be caught in the catch block
// we do that in reverse geocoding immediately after the fetch for which it will handle errors
// as before we can test for the okay property
// if ok is not set to true then we want to throw a new error
// problem getting location data
// now let's say we come back from the fetch with a weird country value 
// the second API can't find a country for that name, so here we say 'problem getting country'
// for the first promise, we do not need to throw an error manually
// in case something goes wrong with geolocation, we built the promise to automatically reject
// with the case below, we will therefore immediately get an error which will get caught up in the catch block
// the same is not true for the promise coming from fetch
// that promise only gets rejected when the user has no internet connection
// in the case of a 403 or 404 error, the fetch promise doesn't reject
// so we do that manually with both of the throw new Errors
// in catch renderCountry, we don't need all of the error message, so edit it down to emoji and the messages tied to the actual errors
// with that revision, we run it again and trigger an error from the first fetch: 'Problem getting location data'

const whereAmI = async function() {
    try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat}, ${lng}?geoit=json`);
    if(!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
    if(!resGeo.ok) throw new Error('Problem getting country');

    const data = await res.jason();
    renderError(data[0]);}

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    catch(err) {
        console.error(`${err} 💥 `);
        renderCountry(`💥 ${err.message}`);

        // Reject promise returned from async function
        throw err;
    }
};

// whereAmI();
// whereAmI();
// whereAmI();
// console.log('FIRST');

console.log(1: 'Will get location');
// whereAmI();
// const city = whereAmI();
// console.log(city);
whereAmI()
    .then(city => console.log(`2: ${city})`)
    .catch(error => (`2: ${err.message} 💥`))
    .finally(() => console.log('3: Finished getting location'));

console.log('3: Finished getting location');

(async  function() {
    try {
        const city = await whereAmI();
        console.log(`2: ${city})`)
    } catch(err) {
        console.error(`2: ${err.message} 💥`)
    }
	console.log('3: Finished getting location')
})();


// Returning Values from Async Functions

// to clarify what an asynch function is and how it works:
// to understand better what is happening here, start by adding more console logs above
// when run, we immediately get the first log and then the second
// only after that, do we get all the logs coming from the async function, because it runs in the background
// JS immediately moves on to the next line
// if this was a regular function and there was a console log in it, that would appear between one and three
// let us say we wanted to return some data from this function
// get rid of console logs
// return a string like we had before based on geocoding data for city and country
// now we want to get the data out of that string
// pretend this is a regular function in which case we would define a variable and store in it the returned value
// second item logged to the console is a promise
// remember, an async function always returns a promise -- here is proof of that
// it makes sense that we get a promise rather than a value:
// at this point in the code, JS has no way of knowing what value will be returned from this function, so therefore it returns the function
// the fulfilled value of the promise will be the string because that is the value that will return from the async function
// to get the data we want, we can use the then method on whereAmI to get the fulfilled value of the promise
// using same variable name as we did before, but that previous use of it didn't work, while here it will work
// when we run it, we successfully return a value from the function
// errors: if any error occurs in the try block, the return will never be reached because the code will immediately jump to the catch block
// create an error in country data (data.countryggggg)
// we get undefined in from lines five, four, three in console log, nothing returned from the function
// what's interesting is that the console log still worked which means that the callback function is still running, the then method was called and the promise was fulfilled and not rejected
// if we add a catch handler, we still get the error from here, but still the callback is executed
// this is why we get two undefined and not the catch block
// again, even though there was an error in the async function, the promise it returns is still fulfilled
// if we want to fix that, if we want to be able to catch that error here as well, we will have to rethrow it
// rethrowing it means to throw the error again so we can propagate it down
// with that, we will manually reject a promise that's returned from the async function
// logs to console the error message: "2: Cannot read property 'flag' of undefined" the 2 indicating its origin
// if we want to fix the 3 printing before the 2, we simply add a finally
// finally is always going to be executed
// the above works just fine
// in Jonas's opinion, doing it this way mixes the concept of async await with handling promises by using then and catch, all in the same code
// Jonas prefers always using async functions purely rather than mixing them
// it would be great if we could use await without the async function, but for now at least, that doesn't work, although there is a proposal in the work to make it happen
// we don't really want a new, complete funciton here
// instead we can use an IIFE
// immediately-invoked function expression
// we write the function, then the function body, then call it at the end
// Jonas's solution: store whereAmI promise result in city variable and log to console
// finally, for the finished getting location last part, we will place it outside the try catch block
// this will ensure that it will always be executed
// everything is now converted to async await


// Running Promises in Parallel

// imagine we want to get data about three countries at the same time but the order in which the data arrives doesn't matter
// let's implement an async function using everything we've learned to this point
// this function will take in three countries and will log their capital cities as an array
// in async function, we always need to wrap our code into a try catch block
// in real world scenario, you would do real error handling and not just log to console
// for data retrieval and conversion, let's use the getJSON function we coded at the beginning of this section
// the getJSON function encapsulates the fetch request and error handling, and also immediately converst the response to JSON
// we will store that data into the variable c1
// the result of this will be an array of one object
// use destructuring to get the first element
// duplicate this code twice to get three countries data returned
// console log capitals of each of the three countries
// test with three countries: Portugal, Canada, Tanzania
// returns "Lisbon", "Ottawa", "Dodoma"
// if we think about what we did here, it doesn't make much sense
// we ran all the Ajax calls one after another, even though the result of the second one doesn't depend on the first one, nor does the result of the third one depend on either of the first tow
// we currently load the data for each country sequentially, when we can run them in parallel, all at the same time
// if each country takes a half second of loading time, we can save one second by loading them at once, which is a lot of time when loading a website
// to do that, we use the Promise.all combinator function
// which is a helper function and static method on the Promise constructor
// it takes in an array of promises and returns a new promise, which will then run all the promises in the array at the same time
// we can then handle that promise the same way we did before
// call the result data, await it and then log the data to the console
// to create the same output as before, we have to loop over this data and take out the data that we want
// from d we want to take element 0 and from that we want the capital city
// important note: when one of these promises rejects, then the whole Promise.all rejects as well
// Promise.all short-circuits when even one promise rejects
// in summary, if you need to run multiple asynchronous operations at the same time and those operations don't depend on one another, you should always run them in parallel, just as we did using Promise.all
// also, in case you're not using async await, you can take the getJSON result and handle it with the then method
// Promise.all is called a combinator function because it allows us to combine multiple promises

const get3Countries = async function(c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`); 
        // console.log([data1.capital, data2.capital, data3.capital]);

        const data = await Promise.all([
            getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c21}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
        ]);
    console.log(data.map(d => d[0].capital));
    } catch(err) {
        console.error(err);
    }
};
get3Countries('portugal', 'canada', 'tanzania');


// Other Promise Combinators: race, allSettled, any

// Promise.race
// like all other combinators, receives an array of promises and also returns a promise
// the promise returned is settled as soon as one of the input promises settles
// settled mean that a value has become available, no matter whether the promise got rejected or fulfilled
// with Promise.race, the first settled promise wins the race
// create an IIFE so that we can use async await without creating a whole new named function
// use await Promise.race and store it as a response
// define an array of promises using getJSON function with three countries, Italy, Egypt and Mexico
// these three promises will race against each other
// if the winning promise is then a fulfilled promise, the fulfillment value of this whole race promise will be the fulfillment value of that winning promise
// testing shows Italy, Mexico or Egypt randomly as the result, depending on which promise got settled the fastest
// a promise that gets rejected can also win this race -- Promise.race short-circuits whenever one of the promises gets settled, either fulfilled or rejected
// a nonsense name for the country gets rejected quickly and can come in first
// Promise.race is very useful for preventing never-ending or very long-running promises
// if your user has a bad interent connection, then a fetch request in your application may take too long to be useful
// we can create a special time-out promise which automatically rejects after a certain amount of time has passed
// to demonstrate, we'll create a timeout function similar to the wait one we created earlier
// the difference is that this one will reject and not resolve
// for the resolve function, which is always the first one, we can use a throw-away variable
// after a certain amount of seconds have paaed we reject the promise with a new error message
// now we can have the Ajax call race against this timeout
// use Promise.race and, as the first promise, use getJSON with Tanzania as the country
// the second promise will then be our timeout, waiting for one second
// these two will then race one another
// if the timeout happens first, that will then abort the fetch that is happening in getJSON
// could have used async await again, but why not use the then method here also
// log the response (could have called it data) and the error to the console
// multiply sec by 1000 to go from milliseconds to seconds, but Tanzania data returns faster than that
// try 0.1 seconds instead of 1 in timeout
// this time the request took too long and generated that error message
// in the real world, you will use a larger amount of time -- more on the order of 5 seconds
// Promise.race and Promise.all are the two most important promise combinators

// Promise.race
(async function() {
    const res = await Promise.race([
        getJSON(`https://restcountries.eu/rest/v2/name/italy`),
        getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
        getJSON(`https://restcountries.eu/rest/v2/name/mexico`)
    ]);
    console.log(res[0]);
})();

const timeout = function(sec) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(newError('Request took too long!'))
        }, sec * 1000);
    })
};

Promise.race{[
    getJSON(`https://restcountries.eu/rest/v2/name/tanzania`),
    timeout(0.1);
]};
    .then(res => console.log(res[0]))
    .catch(err => console.error(err));


// Promise.allSettled

// a newer combinator from ES2020 and very simple
// it takes in an array of promises and returns an array of all the settled promises, whether rejected or not
// similar to Promise.all, but where Promise.all will short circuit as soon as one promise rejects, Promise.allSettled never short circuits
// it will return all the results of all the promises
// test shows we indeed get three results, even though one of them rejected

Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
]).then(res => console.log(res));


// Promise.any
// ES2021
// takes in an array of promises and returns the first fulfilled promise and ignores any rejected promises
// the result of Promise.any will be fulfilled promise unless all the promises reject

Promise.any([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
])
    .then(res => console.log(res))
    .catch(err => console.error(err));


///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img src = imgPath;

        img.addEventListener('load', function() {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function() {
            reject(new Error('Image not found'));
        })
    });
};

let currentImg;

// createImage('img/img-1.jpg')
// .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
// })
// .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
// })
// .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
// })
// .then(() => {
//     currentImg.style.display = 'none';
// })
// .catch(err => console.error(err));

// PART 1
const loadNPause = async function() {
    try {
        // load image 1
        let img = await createImage('img/img-1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';

        // load image 2
        img = await createImage('img/img-2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';

    } catch(err) {
        console.log(err);
    }
}
// loadNPause();

// PART 2
const loadAll = async function(imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        // console.log(imgs);
        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl);
        imgsEl.forEach(img => img.classList.add('parallel'));

    } catch(err) {
        console.error(err);
    }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

// Jonas's solution:
// our loadNPause async function doesn't have any arguments
// wrap everything in a try block
// in JS it's now allowed to use catch without the error, but you can use it for consistency
// await the promise and store the results into image
// load image to console
// we await for the pause in execution with wait(2)
// just like before, since the wait promise doesn't have any resolved value, we don't need to save anything to a variable
// instead of currentImg we can use img, because we are still in the same function and  block, and therefore scope
// previously, we defined the image in one function, then set its style in another, so we need a global variable
// next we do the same for Image 2
// we don't need the external variable, we can simply reassign img
// loadNPause()
// comment out previous logic so that it doesn't run twice
// in console, set network to Fast 3G
// we see an image loading with a wait time of two seconds
// image 1 loaded during all this time, then we had a two second waiting time
// then the next image loaded and finished in that two second waiting time
// lots of interesting information to be found here if you want to to dig deeply into it
// for Part 2 of the challenge, we need to create an async function loadAll which receives an image array imgArr
// we then need to loop over the array and create an array of images
// add try catch block
// create images array resulting from imgArr.map()
// for the callback function here, in each iteration of the array, we have one image and we want the createImage function to laod that image
// this function returns a promise, so we should await that promise, otherwise nothing will happen
// we need to make this an async function so we can use await
// as instructed, pause loadNPause and instead call loadAll with the given test array
// check out the images array in console:
// what we have are not an array of images themselves, but an array of promises
// we have an async function
// an arrow function, so an implicit return -- so this is returning something from the callback function in each iteration
// an async function aways returns a promise and not the value we want to return
// instead, the value we want to return will be returned by the async function as the fulfilled value of the promise
// in this example, we are returning three times from our async function, each one a promise
// behind the scenes, the images are already being loaded
// we need to get these image elements out of the promise
// we could take each promise out of the array and manually await it, but that would create additional work and then that wouldn't be happening in parallel
// for it to happen in parallel, we use Promise.all, which is perfect for this because it already expects an array of images
// Promise.all is perfect for this because it already expects an array of images
// we store the image elements
// now the three images load and appear in the console after some time
// that's why we need to add the parallel class later
// this worked because in the above loop, the await keyword did its job pausing the execution of the function
// only after that did Promise.all get the image elements out of the promises array
// the next step is to loop over the array and add the parallel class to it
// we don't want a new array; we want to do something with each of the elements
// img.classList.add parallel
// in the console, all the images load and display side-by-side
// they start loading all at the same time because of the loop which executes the three callback functions, one after another
