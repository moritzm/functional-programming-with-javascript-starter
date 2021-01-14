// ----------------------------------------------------------
// OBJECT FREEZE EXAMPLE from Video
// ----------------------------------------------------------

// Note here that we must run Javascript in strict mode in order to see the error correctly
// Node runs in strict mode automatically, as do many online code editors, so if you are running these examples in the terminal or online you probably won't need this
// If you want to learn more about strict mode, here is a good article: https://www.geeksforgeeks.org/strict-mode-javascript/

"use strict";

const currentShow = {
  title: "Dr. Who",
  seasons: 11,
  current_season: 4,
};

// as a const, we can do this:
current_show.current_season = 5;

// but if we freeze the object
Object.freeze(current_show);

current_show.current_season = 5;
// Throws an error and current_season remains unchanged

// OBJECT FREEZE EXERCISE
const person = {
  name: "Synthia",
  age: 12,
};
console.log(person);
// expected output: {name: 'Synthia', age: 12}

person.age = 13;
console.log(person);
// expected output: {name: 'Synthia', age: 13}

Object.freeze(person);

person.age = 14;
console.log(person);
// expected output: {name: 'Synthia', age: 13}
// ----------------------------------------------------------
// Directions: Create your own object and freeze it!
