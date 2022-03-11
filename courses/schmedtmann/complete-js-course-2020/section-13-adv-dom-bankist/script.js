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
// 2. Text
//   - if there's any text inside an element (e.g., <p>), it gets its own node of the type Text
// 3. Comment
//    - any comment (<!--comment-->) gets its own node of type Comment
// (the rule is that everything that is in the HTML has to go into the DOM as well)
// 4. Document

