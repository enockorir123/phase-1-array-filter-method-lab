function findMatching(drivers, nameToFind) {
    return drivers.filter(driver => driver.toLowerCase() === nameToFind.toLowerCase());

}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));

}

function matchName(drivers, nameToFind) {
    return drivers.filter(driver => driver.name ===nameToFind);

}
const drivers =[
   { name: "Bobby", hometown: "Pittsburgh" },
   { name: "Sammy", hometown: "New York" },
   { name: "Sally", hometown: "Cleveland" },
   { name: "Annette", hometown: "Los Angeles" },
   { name: "Bobby", hometown: "Tampa Bay" }
];

   

console.log(findMatching(["Bobby", "Sammy", "Sally", "Annette"], "bobby")); 
console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette"], "Sa")); 
console.log(matchName(drivers, "Bobby"));



