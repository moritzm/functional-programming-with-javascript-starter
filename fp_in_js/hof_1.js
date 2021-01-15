// 1. Create a function that when passed as a callback to the Higher Order function provided, makes the final return the number's square plus two

const square = (x) => x * x;

const addTwo = (callback) => {
  return callback(3) + 2;
};

console.log(addTwo(square));

// 2. Create a Higher Order Function that could take this callback to return a greeting

const greeting = (callback) => {
  return `Hello ${callback("Robert", "C", "Mr.")}`;
};

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`;
};

console.log(greeting(createFullName));
// you might notice that this function is less than ideal - that's great! We'll talk about why next
