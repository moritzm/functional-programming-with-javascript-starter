// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------

// const printText = (time) => {
//   if (time > 12) {
//     return "good afternoon";
//   } else {
//     return "good morning";
//   }
// };

// console.log(printText(new Date().getHours()));

function sayHello() {
  const time = new Date().getHours();
  if (time > 12 && time < 17) {
    return "Good Afternoon";
  }

  return "Good Morning!";
}

console.log(sayHello());

// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and
//       returns an array of items counting down from that number to
//       zero.
// -----------------------------------------------------------------

// const giveArray = (number) => {
//   const array = [];
//   for (let i = number; i >= 0; i--) {
//     array.push(i);
//   }

//   return array;
// };

// console.log(giveArray(12));

function countDown(startNum) {
  let countDownArray = [];
  for (let i = startNum; i >= 0; i--) {
    countDownArray.push(i);
  }
  return countDownArray;
}

console.log(countDown(5));
//expected output: [5, 4, 3, 2, 1, 0]
