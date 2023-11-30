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
        countriesContainer.style.opacity = 1;
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
