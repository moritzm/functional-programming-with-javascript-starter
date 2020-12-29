// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------

const printText = (time) => {
  if (time > 12) {
    return "good afternoon";
  } else {
    return "good morning";
  }
};

console.log(printText(new Date().getHours()));

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and
//       returns an array of items counting down from that number to
//       zero.
// -----------------------------------------------------------------

const giveArray = (number) => {
  const array = [];
  for (let i = number; i >= 0; i--) {
    array.push(i);
  }

  return array;
};

console.log(giveArray(12));
