// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");


// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);


startingLine = 'red';
startingStation = 'Alewife';
endingLine = 'orange';
endingStation = 'State';
alert_str = 'Number of stops is: ';

// Create a array for each line

var myMBTA = {

};

lines = {
  'green':['Haymarket', 'Government Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
  'red': ['South Station', 'Park St', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'orange': ['North Station', 'Haymarket', 'Park St', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

//Create a function that calculates the difference between
sameLineDistance = function(startStop, endStop, startLine, endLine){
  return Math.abs(lines[startLine].indexOf(startStop)-lines[endLine].indexOf(endStop));
};

abs = function(indexVal){
  return Math.abs(indexVal);
}
getIndex = function(value, mbta_line){
  return lines[mbta_line].indexOf(value);
}

calcSegment = function(stop_one, stop_two, line) {
  return abs(getIndex(stop_one, line) - getIndex(stop_two, line));
};

diffLineDistance = function(firstStop, lastStop, firstLine, lastLine){
  //Get distance to park st for both lines
  firstSegment = calcSegment('Park St', firstStop, firstLine);
  secondSegment = calcSegment('Park St', lastStop, lastLine);
  return firstSegment + secondSegment;
};

console.log(startingLine === endingLine ? (alert_str + sameLineDistance(startingStation, endingStation, startingLine, endingLine)): (alert_str + diffLineDistance(startingStation,endingStation, startingLine, endingLine)));


