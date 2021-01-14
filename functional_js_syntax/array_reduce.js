// 1. Take this disjointed sentence and turn it into a single string
const text = [
  "The ships",
  "hung in the sky,",
  "much the way",
  "that bricks don`t",
];

// Your Code Here
const myText = text.reduce((text, item) => text + " " + item);
console.log(myText);

// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
  {
    team: "A",
    score: 20,
  },
  {
    team: "B",
    score: 17,
  },
  {
    team: "C",
    score: 23,
  },
  {
    team: "D",
    score: 13,
  },
];

// Your Code Here
const myScore = scores.reduce((total, item) =>
  total.score > item.score ? total : item
);
console.log(myScore.team);
// expected output: "C"

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
  {
    name: "Serenity",
    speed: "4.2G",
  },
  {
    name: "Cylon Raider",
    speed: "7.5G",
  },
  {
    name: "Swordfish II",
    speed: "50G",
  },
  {
    name: "Tie Fighters",
    speed: "4100G",
  },
];

// Your Code Here
const myShip = ships.reduce((ship, item) => {
  const previously = parseInt(ship.speed.replace("G", ""));
  const current = parseInt(item.speed.replace("G", ""));
  if (previously > current) {
    return ship;
  }
  return item;
});
console.log(myShip.name);
// Expected output: Tie Fighters
