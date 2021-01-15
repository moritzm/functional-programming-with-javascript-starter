// The object in the nasa_near_earth_object_API.txt is a copy of real API response from the NASA Near-Earth Object API.

// Find the following from the API:
const data = require("./nasa_near_earth_object_API");
const api_sample_data = data.api_sample_data;

// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count

function nearEarthCount(data) {
  const count = (date) => {
    return data.near_earth_objects[date].length;
  };
  return count;
}
console.log(nearEarthCount(api_sample_data)("2019-12-01"));

// Hazardous -----------------------------------------------
// 2. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous

const hazardous = api_sample_data["near_earth_objects"]["2019-12-02"].filter(
  (asteroid) => asteroid["is_potentially_hazardous_asteroid"] === true
);

console.log(hazardous[0]);

const hazardousFmt = hazardous.map((asteroid) => {
  const closeApproach = asteroid["close_approach_data"];
  return {
    id: asteroid["id"],
    name: asteroid["name"],
    maxSize: asteroid["estimated_diameter"]["miles"]["estimated_diameter_max"],
    closestApproach: closeApproach[0]["miss_distance"]["miles"],
  };
}); // expected output: [{"id":"3797749","name":"(2018 BO1)","maxSize":0.2933532873,"closestApproach":"30311929.3487318204"},{"id":"3740494","name":"(2016 AF193)","maxSize":0.1539539936,"closestApproach":"9930345.1795315036"}]

console.log(hazardousFmt);

// Too Close for Comfort -----------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles

const tooClose = api_sample_data["near_earth_objects"]["2019-12-02"].filter(
  (asteroid) => {
    const closeApproach = asteroid["close_approach_data"];
    return closeApproach[0].miss_distance.miles < 900000;
  }
);

const tooCloseResults = tooClose.map((asteroid) => {
  const closeApproach = asteroid["close_approach_data"];
  return {
    id: asteroid["id"],
    name: asteroid["name"],
    maxSize: asteroid["estimated_diameter"]["miles"]["estimated_diameter_max"],
    closestApproach: closeApproach[0]["miss_distance"]["miles"],
  };
});
// expected output: [{"id":"3907553","name":"(2019 XH2)","maxSize":0.0061544743,"closestApproach":"775950.9423668918"}]

console.log(tooCloseResults);

// Alert ---------------------------------------------------
// 4. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth.

const closest = api_sample_data.near_earth_objects["2019-12-02"].reduce(
  (closest, curr) => {
    const currDist = parseFloat(
      curr.close_approach_data[0].miss_distance.miles
    );
    const closestDist = parseFloat(
      closest.close_approach_data[0].miss_distance.miles
    );

    if (currDist > closestDist) {
      return closest;
    } else {
      return curr;
    }
  }
);

console.log(closest.close_approach_data[0].miss_distance.miles);
