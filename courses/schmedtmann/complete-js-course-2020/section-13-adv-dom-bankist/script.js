'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// How the DOM Really Works

// allows us to make JavaScript interact with the browser
// we can write JS to create, modify and delete HTML elements
// DOM tree is generated from an HTML document, which we can then interact with programmatically
// DOM is a very complex API (Application Programming Interface) that contains a lot of methods and properties for interacting with the DOM tree

// in the DOM are different types of nodes: some are HMTL elements, some are just text
// different DOM methods and properties are organized into different types of DOM objects

// every single node in the DOM tree is of the type "node" and is represented by a JS object
// object gets access to special node methods and properties: .textContent, .childNodes, .parentNode, .cloneNode() among many others

// Node type has 4 child types:
// 1. Element
// Element type node gives each element access to many useful properties, e.g., .innerHTML, .classList, .children, .parentElement, .append(), .remove(), .insertAdjacentHTML(), .querySelector(), .closest(), .matches(), .scrollIntoView(), .setAttribute()
// Element has an HTMLElement childtype
// in turn, the HTMLElement type has one childtype for each HTML element that exists
// e.g., HTMLButtonElement, HTMLDivElement
// HTML element types have unique attributes for each: img has a source attribute, for example; anchor has an href attribute
// 2. Text
//   - if there's any text inside an element (e.g., <p>), it gets its own node of the type Text
// 3. Comment
//    - any comment (<!--comment-->) gets its own node of type Comment
// (the rule is that everything that is in the HTML has to go into the DOM as well)
// 4. Document
// use all the time in the DOM manipulation
// just another node type
// .querySelector() (also available to Element types), .createElement(), .getElementById()

// inheritance is what makes all of this work
// means that all child types have access to the methods and properties of their parent node types AND ancestor element types

// EventTarget
// DOM API needs a way for all the node types to listen to events
// special node type EventTarget
// parent of both the Node Type and the Window Node Type
// as a result, we can call .addEventListener() and .removeEventListener() on every single type of node in the API


// Selecting, Creating, and Deleting Elements

// Selecting elements

// special way of selecting the entire document 
console.log(document.documentElement);
// use documentElement
// document alone isn't the actual DOM element
console.log(document.head);
// selects only head
console.log(document.body);
// selects only body

const header = document.querySelector('.header');
// to select multiple elements:
const allSections = document.querySelectorAll('.section');
console.log(allSections);
// will return a node list

document.getElementById('section--1');
// don't need selector (#) preceding the id here; that's only for querySelector methods
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
// returns HTML collection, different than a node list
// is a "live" collection -- if the DOM changes, it too gets updated immediately
// the same does NOT happen with a node list because the variable was created while original list existed and wasn't updated

document.getElementsByClassName('btn');
// doesn't need a selector
// also returns a live HTML collection

// Creating and inserting elements

// .insertAdjacentHTML
// look back in Bankist to see this method works

const message = document.createElement('div');
// a DOM object but not to be found in DOM itself yet
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
header.append(message);
// moves element from being first child of header to being last child
// .prepend() and .append() can be used to move elements, because every DOM element is unique -- it can only exist at one place at a time

// how, then, do you insert multiple copies of the same element?
// have to copy the element:
// header.append(message.cloneNode(true))
// (true) means all the child elements will be copied also

header.before(message);
header.after(message);

// Delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', function() {
    message.remove();
    // .remove() is a recent development
    // previous method for removing elements:
    // message.parentsElement.removeChild(message);
});


// Styles, Attributes and Classes

// Styles
message.styles.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);
// can get inline style set manually, as above
// cannot get style hidden in a class or that does not exist:
console.log(message.style.color);
// nothing returned

// can get the styles this way
// "computed" means the style as it appears on the page, regardless of whether it's declared or not in the CSS or calculated by the browser
console.log(getComputedStyle(message).color);
// returns rgb(187, 187, 187)
console.log(getComputedStyle(message).height);
// returns 43.6667px

// message.style.height = getComputedStyle(message).height + 40 + 'px';
// above won't work as it's trying to add a string and a number
// instead:
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// to make changes to a property everywhere in the code:
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// in HTML, src, alt, class, id are all attributes
// in JavaScript we can access and change these
const logo = document.querySelector('.nav__logo');
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-standard
// element.property only works for standard properties expected to be on those types of elements
// if you were to add logo.designer('name') to the CSS and then run logo.designer, you'd get "undefined" as it's not a standard property
// this won't work
console.log(logo.designer);
// to read the non-standard, added value from the DOM:
console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');

console.log(logo.src);
// returns absolute version:
// http://127.0.0.1:8080/img/logo.png
console.log(logo.getAttribute('src'));
// returns relative version:
// img/logo.png

// same is true for href on links
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
// returns absolute version of link:
// http://127.0.0.1:8080/#
console.log(logo.getAttribute('href'));
// returns relative version as was written in the code manually:
// #

// Data attributes
// special attributes that start with word "data"
// under index.html, as an example:
//   <img
//      data-version-number="3.0"
//   />
// 
console.log(logo.dataset.versionNumber);
// returns 3.0
// practice is to take "version-number" and transform it to camel case: .versionNumber

// Classes
// can add multiple classes by passing in multiple values as in .add() and .remove() examples:
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); 
// .contains() is not includes as with arrays

// Don't use
// will override all existing classes
// restricts us to putting only one class on any element
logo.className = 'jonas';

// Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    // returns DOM rectangle:
    //  DOMRect {x: 0, y: 641.3373, width: , height: , top }

    console.log(e.target.getBoundingClientRect());
    // returns DOM rectangle:
    // all dimensions returned are relative to the visible viewport

    console.log('Current scroll (x/y)', window.pageXOffset, window.pageYOffset);
    // will get you the current scroll position in terms of distance from x and y of the set point

    console.log('height/width of viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);
    // returns height and width of viewport
    // these coordinates are necessary for the implementation of smooth scrolling
});
// Scrolling
window.scrollTo(
  s1coords.left + window.pageXOffset, 
  s1coords.top + window.pageYOffset
  );
// .top alone, though, is relative to the viewport
// solution is to add current scroll position to .top
