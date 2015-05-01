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
var mbta = {
  green:["haymarket", "governmentCenter", "parkSt", "bolyston", "arlington", "copley"],
  red: ["southStation", "parkSt", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  orange: ["northStation", "haymarket", "parkSt", "state", "downtownCrossing", "chinatown", "backBay", "forestHills"]
};

function ourTrip(start_ln, start_st, dest_ln, dest_st) {
  var distance;

if(start_ln === dest_ln) {
  distance = Math.abs(mbta[start_ln].indexOf(start_st) - mbta[dest_ln].indexOf(dest_st));
}

else {
  var firsthalf = Math.abs(mbta[start_ln].indexOf(start_st) - mbta[start_ln].indexOf("parkSt"));
  var secondhalf = Math.abs(mbta[dest_ln].indexOf("parkSt") - mbta[dest_ln].indexOf(dest_st));

  distance = firsthalf + secondhalf;
}
  return distance;
}

// mbta.green.indexOf("bolyston");

ourTrip(startingLine, startingStation, endingLine, endingStation);
console.log(ourTrip(startingLine, startingStation, endingLine, endingStation));

