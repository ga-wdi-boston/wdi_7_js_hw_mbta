// Code here.
/* There are 3 subway lines:
/*
  - The Red line has the following stops: south station, park st, kendall, central, harvard, porter, davis, alewife
  - The Green line has the following stops: haymarket, government center, park st, bolyston, arlington, copley
  - The Orange line has the following stops:  north station, haymarket, park st, state, downtown crossing, chinatown, back bay, forest hills
  - All 3 subway lines intersect at *park st*, but there are no other intersection points. Some of this MBTA is fictionalized. Haymarket does not connect the orange/green lines.

-Use indexof.
*/


// Code here.

var startingLine,
startingStation,
endingLine,
endingStation;


startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");


alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);


// Create a array for each line

lines = {
  green:["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  red: ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  orange: ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

//If on same line, get the index of the stops and subtract them. Their absolute value is the answer.
//If on different lines, subtract the index of the stops from the index of park st and then subtract those numbers: their absolute value is the answer.

function numStops(startingLine, startingStation, endingLine, endingStation){
  console.log(lines);
  console.log(lines[startingLine]);
  console.log(lines[startingLine].indexOf("park st"))
  if (startingLine === endingLine){

  }
  else {
  }
};

 result = numStops(startingLine, startingStation, endingLine, endingStation);

 console.log(result);
