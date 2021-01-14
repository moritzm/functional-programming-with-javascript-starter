// // 1. Find all the words with more than 7 characters
// const words = ["tardis", "grok", "frak", "blaster", "klingon", "shepherd"];

// // expected output: Array ['shepherd']
// const result = words.filter((x) => x === "shepherd");
// console.log(result);

// // ----------------------------------------------------------
// // 2. Find all even values
// const words = [12, 13, 14, 15, 16, 17];

// // expected output: Array [12, 14, 16]
// const result = words.filter((x) => x % 2 === 0);
// console.log(result);

// // ----------------------------------------------------------
// // REAL LIFE EXAMPLES

// // We often use filter to quickly pull all the items that share a status or other characteristic. For instance, create a list of all the active bounty hunters from the array below:

// const hunters = [
//   {
//     name: "Greedo",
//     universe: "Star Wars",
//     status: "active",
//   },
//   {
//     name: "Boba Fett",
//     universe: "Star Wars",
//     status: "inactive",
//   },
//   {
//     name: "Asajj Ventress",
//     universe: "Star Wars",
//     status: "unknown",
//   },
//   {
//     name: "Zam Wesell",
//     universe: "Star Wars",
//     status: "inactive",
//   },
//   {
//     name: "Jango Fett",
//     universe: "Star Wars",
//     status: "active",
//   },
// ];

// // expected output: Array [
// //     {
// //         name: 'Greedo',
// //         universe: 'Star Wars',
// //         status: 'active',
// //     },
// //     {
// //         name: 'Jango Fett',
// //         universe: 'Star Wars',
// //         status: 'active',
// //     },
// // ]

// const myHunters = hunters.filter((x) => x.status === "active");
// console.log(myHunters);

// 1. Find all the words with more than 7 characters
const words = ["tardis", "grok", "frak", "blaster", "klingon", "shepherd"];

const result1 = words.filter((value) => value.length > 7);
console.log(result1);
// expected output: Array ['shepherd']

// ----------------------------------------------------------
// 2. Find all even values
const nums = [12, 13, 14, 15, 16, 17];

const result2 = nums.filter((value) => value % 2 === 0);
console.log(result2);
// expected output: Array [12, 14, 16]

// ----------------------------------------------------------
// REAL LIFE EXAMPLE
// We often use filter to quickly pull all the items that share a status or other characteristic. For instance, create a list of all the active bounty hunters from the array below:

const hunters = [
  {
    name: "Greedo",
    universe: "Star Wars",
    status: "active",
  },
  {
    name: "Boba Fett",
    universe: "Star Wars",
    status: "inactive",
  },
  {
    name: "Asajj Ventress",
    universe: "Star Wars",
    status: "unknown",
  },
  {
    name: "Zam Wesell",
    universe: "Star Wars",
    status: "inactive",
  },
  {
    name: "Jango Fett",
    universe: "Star Wars",
    status: "active",
  },
];

const result = hunters.filter((hunter) => hunter.status === "active");
console.log(result);

// expected output: Array [
//     {
//         name: 'Greedo',
//         universe: 'Star Wars',
//         status: 'active',
//     },
//     {
//         name: 'Jango Fett',
//         universe: 'Star Wars',
//         status: 'active',
//     },
// ]
