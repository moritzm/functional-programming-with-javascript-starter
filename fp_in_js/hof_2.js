const weapons_with_noises = [
  { name: "Phaser", noise: "bssszzsssss", universe: "Star Trek" },
  { name: "Blaster", noise: "Pew Pew", universe: "Star Wars" },
  { name: "Sonic Screwdriver", noise: "Pew Pew", universe: "Dr. Who" },
  { name: "Lightsaber", noise: "Pew Pew", universe: "Star Wars" },
  { name: "Noisy Cricket", noise: "Pew Pew", universe: "Men in Black" },
];

// function weaponsFromUniverse(universe) {
//   // ...Your code here!
//   return (weapon) => {
//     const found = weapons_with_noises.find((x) => x.name === weapon);
//     if (found) {
//       return found.universe === universe
//         ? console.log(`used ${weapon}: ${found.noise}`)
//         : console.log(`${weapon} is not a part of the Star Wars universe`);
//     }
//   };
// }

function weaponsFromUniverse(universe) {
  const useableWeapons = weapons_with_noises.filter(
    (w) => w.universe == universe
  );

  const useWeapon = (weaponName) => {
    const weapon = useableWeapons.find((w) => weaponName == w.name);

    if (weapon) {
      console.log(`used ${weapon.name}: ${weapon.noise}`);
    } else {
      console.log(`${weaponName} is not a part of the ${universe} universe`);
    }
  };

  return useWeapon;
}

// USAGE
const useStarWarsWeapon = weaponsFromUniverse("Star Wars");

useStarWarsWeapon("Blaster"); // console logs 'used Blaster: Pew Pew'
useStarWarsWeapon("Noisy Cricket"); // console logs 'Noisy Cricket is not a part of the Star Wars universe'
