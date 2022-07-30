'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window



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




// Button scrolling
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

// Scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset, 
//   s1coords.top + window.pageYOffset
//   );
// .top alone, though, is relative to the viewport
// solution is to add current scroll position to .top

// to make the above animation nice and smooth, pass in an object instead of just one argument
// old school way, manually calculating all the values:
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

// more modern and simpler way:
// only works in modern browsers
  section1.scrollIntoView({behavior: 'smooth'});
});

////////////////////////////////////////////////
// Page navigation

document.querySelectorAll('.nav__link').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    // because we DON'T want the absolute URL, we don't write this.href
    // as we want "#section--1", we grab it with this.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
// .querySelectorAll returns node list
// can now use forEach to attach event handler to every element in the node list

// however, above is incredibly inefficient and not at all holding to DRY philosophy
// the better solution is:

// Event Delegation
// uses the fact that events bubble up
// put the event listener on a common parent of all the elements in which we're interested
// in the bankist app, that common parent will be the <ul class="nav__links"> element
// we can catch the event in that common parent element and handle it there, because we know where the event originated by looking at the event.target property

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('nav__links').addEventListener('click', function(e) {
  // console.log(e.target);
  // returns <a class="nav__link"> as event-originating element
  e.preventDefault();

  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    // console.log('LINK');
    // returns 'LINK' if target class contains 'nav__link'
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// bad practice for adding event listeners:
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));
// isn't scalable -- consider having to add hundreds or thousands of event listeners

// better practice is to use event delegation instead
// for which we need to attach the event handler on the common parent element of all the elements in shich we're interested

tabsContainer.addEventListener('click', function(e) {
  // bad matching strategy:
  // const clicked = e.target;
  // console.log(clicked);
  // click can return the btn element we want, but can also return a span element we don't want as it is inside the btn element
  // another bad matching strategy:
  // const clicked = e.target.parentElement;
  // click on span element will return btn (parent) element, but click on btn element will return its parent, operations tab-container
  // what is needed is a way of selecting a parent element that is always a tab:
  const clicked = e.target.closest('.operations__tab');
  console.log('clicked');
  // clicking on btn or the span returns the same parent element:
  // <button class="button operations__tab operations__tab--1 operations__tab--active" data-tab="1">
  // clicking in tabs container but not on any element inside it returns null
  // result of .closest() method when no matching parent element is to be found

  // Guard clause
  if (!clicked) return;

  // Remove active classes for tab and tab content areas
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // clears all tabs and tabs content; active tab will be added below

  // more modern and less cluttered than:
  // if (clicked) {
    // clicked.classList.add('operations__tab--active');
  // }
  // also cleaner to return a function immediately if a certain condition is met
  // .add() below won't be executed if (!clicked) condition is met

  // Activate tab
  clicked.classList.add('operations__tab--active');
  // for the element that is clicked we are adding "operations__tab--active" to its class

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});


// Passing Arguments into Event Handlers

// Menu fade animation
// refactored code:
const handleHover = function(e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
    // this replaces opacity
  }
}

// addEventListener expects a function to be passed in:
// nav.addEventListener('mouseover', function(e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function(e) {
//   handleHover(e, 1);
// });

// Passing "argument" into handler
// improve the above even more:
// (if we need multiple values, we can pass in an array or an object)
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
// "this" variable now will be set to either 0.5 or 1
// console.log(this);

// nav.addEventListener('mouseover', function(e) {
  // if (e.target.classList.contains('nav__link')) {
  //   const link = e.target;
  //   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  //   const logo = link.closest('.nav').querySelector('img');

  //   siblings.forEach(el => {
  //     if (el !== link) el.style.opacity = 0.5;
  //   });
  //   logo.style.opacity = 0.5;
  // }
// });
// mouseover event will bubble, unlike mouseenter, which we need to happen

// nav.addEventListener('mouseout', function(e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
});
// mouseout undoes mouseover

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


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


// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function(e) {
  console.log(window.scrollY);
  // gives current scroll position from POV of viewport when the scroll event has fired

  // calculate value dynamically
  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
// scroll event will be fired off each time we scroll on the page
// scroll event is not really efficient and should be avoided
// being used here for purposes of example


// Sticky navigation: Intersection Observer API

// this API allows our code to observe changes to the way a certain target element intersects another or the viewport

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null, 
  // threshold: 0.1
  // target element is intersecting the root elements at the threshold we define (0.1 = 10%) then obsCallback will get called, regardless of whether we're going up or down
  // isIntersecting of IntersectionObserverEntery will return FALSE so long as less than 10% of the target is intersecting the viewport
  threshold: [0, 0.2]
  // 0% means callback will trigger everytime target element moves completely out of view and as soon as it enters the view
  
// };


// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
// we want navigation to display -- to "stick" -- only when the header moves completely out of view

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
  const [entry] = entries;
  // destructuring; same as writine entries[0]
  // console.log(entry);

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.add('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, 
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
    // calculate dynamically
    // rootMargin: '-90px'
    // % won't work here
    // establishes margin which will be taken up by the nav element
  });

headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  // remove no longer needed observer:
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {

});

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});


// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, 
  {
    root: null,
    threshold: 0,
    rootMargin: '200px',
    // remove image loading delay when scrolling page
    // '-200px' created the opposite effect of what was needed; changed to '200px';
  });

imgTargets.forEach(img => imgObserver.observe(img));


// Building a Slider Component: Part 1

// Slider
// put all slider code into a function so as to not pollute the global namespace:
const slider = function() {
const slides = document.querySelectorAll('slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide = 0;
const maxSlide = slides.length;
// defines the number of slides

// temporarily scale down the entire slider to be able to see all the images at once:
// const slider = document.querySelector('.slider');
// slider.style.tranform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// above can me commented out on acount of goToSlide(0) below
// multiply current index by 100%
// slides should be set to positions:
// 0%, 100%, 200%, 300%

const createDots = function() {
  slides.forEach(function(_, i) {
    // _ is conventional for a throwaway variable, in this case s for slide, which we won't need
    dotContainer.insertAdjacentHTML(
      'beforeend', 
      '<button class="dots__dot" data-slide="${i}"></button>'
      );
  });
};
// createDots(); move to init function

const activateDot = function(slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList
    .remove('dots__dot--active'));

    // select wanted slide by data attribute:
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
// activateDot(0); move to init function

const goToSlide = function(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
}
// goToSlide(0); move to init function

// Next slide
const nextSlide = function() {
  if (curSlide === maxSlide - 1) {
    // make slider zero-based
    curSlide = 0;
  } else {
    curSlide++;
  }
  // return to the beginning of the slides

  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function() {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

// Initialization function
const init = function() {
  goToSlide(0);
  createDots();
  activateDot(0);
}
init()

// Event handlers
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e) {
  console.log(e);
  if (e.key === 'ArrowLeft') prevSlide();
  // alternate way:
  // e.key === 'ArrowRight' && nextSlide();
});

  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`));
  // subtract current slide from current index

// if curSlide = 1, then: -100%, 0%, 100%, 200%, 300%

// attaching event handler to common parent:
dotContainer.addEventListener('click', function(e) {
  if (e.target.classList.contains('dots__dot')) {
    // console.log('DOT');
    const slide = e.target.dataset.slide;
    // because above slide value is the same as .slide value, can use destructuring:
    const {slide} = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
}
slider();
// options can be passed into slider

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

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function(e) {
    // const s1coords = section1.getBoundingClientRect();
    // console.log(s1coords);
    // returns DOM rectangle:
    //  DOMRect {x: 0, y: 641.3373, width: , height: , top }

    // console.log(e.target.getBoundingClientRect());
    // returns DOM rectangle:
    // all dimensions returned are relative to the visible viewport

    // console.log('Current scroll (x/y)', window.pageXOffset, window.pageYOffset);
    // will get you the current scroll position in terms of distance from x and y of the set point

    // console.log('height/width of viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);
    // returns height and width of viewport
    // these coordinates are necessary for the implementation of smooth scrolling

// Scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset, 
//   s1coords.top + window.pageYOffset
//   );
// .top alone, though, is relative to the viewport
// solution is to add current scroll position to .top

// to make the above animation nice and smooth, pass in an object instead of just one argument
// old school way, manually calculating all the values:
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

// more modern and simpler way:
// only works in modern browsers
  // section1.scrollIntoView({behavior: 'smooth'});
});


// Types of Events and Event Handlers

// keyboard and mouse events are most common ones

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function(e) {
  alert('addEventListener: Great! You are reading the heading :D');
});

// another way of attaching an event listener to an element:
h1.onmouseenter = function(e) {
  alert('onmouseenter: Great! You are reading the heading :D');
};

// two reasons why .addEventListener is better than .onevent:
// 1. allows us to add multiple event listeners to the same event
// 2. can remove event handler in case we don't need it anymore
// need to export function into a named one
const alertH1 = function(e) {
  alert('addEventListener: Great! You are reading the heading :D');
// then remove:
  h1.removeEventListener('mouseenter', alertH1);
};
// with removal, you can only listen to that remoteEventListener once
h1.addEventListener('mouseenter', alertH1);

// remove after certain amount of time has passed
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// set for 3 seconds

// handle events using HTML attribute
// in html code:
<h1 onclick="alert('HTML alert')"></h1>


// Event Propagation: Bubbling and Capturing

// click happens on a link (<a> element) -- the very bottom of the DOM tree
// event isn't generated there but at the root level -- the very top of the DOM tree

// 1. Capturing Phase - click travels all the way from the root level down to the target element
// as the element passes down the tree it will pass through every single parent element of the target element
// e.g., <html> -> <body> -> <section> -> <p> -> <a>

// 2. Target Phase - begins as soon as the event reaches the target where events can be handled right at the target
// do that with event listeners, which wait for a certain event to happen on a certain element
// as soon as that event occurs, the listener runs the attached callback function

// 3. Bubbling Phase - after reaching the target, the event then travels back up the DOM tree to the root again
// the event passes through each parent element on way up, but not through any sibling elements
// it is as if the event has happened in each of the parent elements
// if you were to attach the same event listener to any of the parent elements, you would get the same exact alert as you'd received at the target element
// this behavior will allow us to implement very powerful patterns

// with some exceptions, most events to capture and bubble
// events capturing and bubbling is propagation -- events propagating from one place to another


// Event Propagation in Practice

// rgb(255,255,255)
// random color generator:
const randomInt = (min, max) => 
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => 
  `rgb(${randomINt(0, 255)}, ${randomINt(0, 255)}, ${randomINt(0, 255)})`;
console.log(randomColor(0, 255));
// returns random colors
// e.g., rbg(225, 238, 117)

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  // .this points to element to which even handler is attached
  // while clicked, background color will keep changing
  console.log('LINK', e.target, e.currentTarget);
  // in this case, e.target is where the event happened, NOT the element upon which the event handler is attached
  // e.target and e.currentTarget are not the same:
  // e.target returns <a class="nav__link"
  // e.currentTarget returns nav class="nav__link"
  console.log(e.currentTarget === this);
  // returns true; current target is the same as this

  // Stop propagation
  e.stopPropagation();
  // stops propagation phase for this event
  // event never arrives at parent elements
  // in general, not a good idea to stop propagation of events
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});
  // e.target returns <a class="nav__link"
  // e.currentTarget returns nav class="nav__link"

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
// e.target returns <a class="nav__link"
// e.currentTarget returns nav class="nav"

// for all three, a click:
// 1. produces a random-color background, and
// 2. logs <a class="nav__link" etc. ></a> for each of the three above elements as the target element, that is where the click happened
// because of event bubbling, the event (e) each element receives is the same one

// capturing phase tends to not be very useful

// document.querySelector('.nav').addEventListener('click', function(e) {
  // this.style.backgroundColor = randomColor();
  // console.log('NAV', e.target, e.currentTarget);
// }, 
// true);

// even so, event handler has a use capture parameter that can be set; as true above
// set to true, event handler will no longer listen for bubbling events but for capture events
// NAV is the first element to be logged before LINK and CONTAINER because, set to true, it is listening for the event as it is captured, traveling down from the root level of the DOM.
// LINK and CONTAINER are listening for the event bubbling, as it travels back up


// Event Delegation: Implementing Page Delegation


// DOM Traversing

// walking through the DOM 
// sometimes we need to select an element relative to another element
// a direct parent or a direct child element, for example
// sometimes we don't even know the structure of the DOM at runtime

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
// use .querySelectorAll because there is more than one element to grab under h1
// log returns NodeList(2) [span.highlight, span.highlight]

// if we need direct children:
console.log(h1.childNodes);
// returns every single node of every single type that exists
// if we're interested in the elements themselves:
console.log(h1.children);
// returns HTML collection, which is live
// only works for direct children
h1.firstElementChild.style.color = 'white';
// only first element of the child get the color
h1.lastElementChild.style.color = 'orangered';
// only last element of the child get the color

// Going upwards: parents
console.log(h1.parentNode);
// returns <div class="header__title"> which contains the h1 element
console.log(h1.parentElement);
// this is usually the one in which we're interested
// in this case, it's the same as the .parentNode

// most of the time we'll need to find a parent element no matter how far away it is in the DOM tree
// we'll use this all the time, especially for event delegation
h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';
// where .querySelectorAll() finds children, .closest() finds parents

// Going sideways: siblings
// in JS we can only access direct siblings:
// only the previous sibling and the next one
console.log(h1.previousElementSibling);
// returns null as there is no previous element there; the h1 is the first element
console.log(h1.nextElementSibling);
// returns <h4>A simpler banking experience for a simpler life.</h4>

// have the same properties for nodes:
console.log(h1.previousSibling);
console.log(h1.nextSibling);

// if we need all the siblings and not just the previous or next, then we use this trick:
// move up to the parent element and read all the children from there
console.log(h1.parentElement.children);
// returns itself (h1) plus all the siblings
// returns an HTML collection which is an iterable
// use spread operator to turn it into an array:
[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) el.style.transform = 'scale(0.5)';
  // all the siblings are now 50% smaller
});


// Building a Tabbed Component
// clicking on each tab displays content unique to it
// accomplished by hiding content of every other tab

// Lifecycle DOM Events

document.addEventListener('DOMContentLoaded', function(e) {
  console.log('HTML parsed and DOM tree built!', e)
});
// because the <script src="script.js"></script> tag appears at the very bottom of the HTML file, we do not need to listen for the HTML to have finished parsing to know when to run our code; the tag's placement does that for us

window.addEventListener('load', function(e) {
  console.log('Page fully loaded', e);
})
// load event is fired by window as soon as HTML is parsed and all the images and exeternal resources (e.g., CSS files) are loaded
// when the complete page has finished loading, the load event is fired

// window.addEventListener('beforeunload', function(e) {
  // e.preventDefault();
  // Chrome doesn't need this, but other browsers do
  // e.returnValue = '';
// });
// used to ask user if they're sure they want to leave the page


// Efficient Script Loading: defer and async

// Regular way of including JS files in HTML:
// <script src="script.js">
// when we include a script without any attribute in the head, the page loading process will look like this over time:
// as user loads the page and receives the HTML, the HTML will start being parsed by the browser, meaning building the DOM tree from the HTML elements
// at a certain point, the browser will find the script tag, fetch the script and execute it
// during that time, the HTML parsing will stop, waiting for the script to be fetched and executed
// only after that can the rest of the HTML be parsed
// at end of HTML parsing, DOM content loaded event will be fired
// This is not ideal:
// browser sitting doing nothing
// huge negative impact on the page's performance
// plus, in this case, the script will be executed before the DOM is ready
// this is the reason why the script tag is never put in the head, but at the end of the body, so that all the HTML will have been parsed when the browser reaches the script tag
// preferred order of events:
// 1) parsing HTML
// 2) fetch script
// 3) execute script
// Still not perfect: the script could have been downloaded while the HTML was being still being parsed

// async and defer will affect the way JS files are fetched/downloaded and executed:

// async
// <script async src="script.js">
// 1) fetch script AND parse HTML
// 2) execute script while HOWEVER parsing of HTML is paused
// 3) finish parsing HTML
// however, HTML parsing still stops for the execution of the script, so the script download is asynchronous but the execution is synchronous
// still makes page loading time shorter

// defer
// <script defer src="script.js">
// script is still loaded asynchronously, but execution of it is deferred until the end of the HTML parsing
// in practice, loading time is similar to async attribute, but with the key difference that the HTML parsing is never interrupted as the script is executed only at the end
// many times this is exactly what we want

// neither async nor defer make sense in the body
// in the body, fetching and executing the script always happens after parsing the HTML anyway
// async and defer would have no practical effect there

// async in head versus defer in head
// async: 
// usually, the DOMContentLoaded event waits for ALL scripts to execute, EXCEPT async scripts
// DOMContentLoaded does NOT wait for async script
// defer:
// scripts are fetched asynchronously and executed AFTER the HTML is completely parsed
// defer forces the DOMContentLoaded event to fire only AFTER the whole script has been downloaded and executed
// the more traditional way the DOMContentLoaded event works