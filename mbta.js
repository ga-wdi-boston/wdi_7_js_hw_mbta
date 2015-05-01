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

// Create a array for each line
lines = {
  'green':['Haymarket', 'Government Center', 'Park', 'Boylston', 'Arlington', 'Copley'],
  'red': ['South', 'Park', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  'orange': ['North', 'Park', 'Kendall', 'State', 'Downtown', 'Chinatown', 'Back Bay', 'Forest Hills']
};

function planTrip(startingLine, startingStation, endingLine, endingStation){
  if(startingLine === endingLine)
  {
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf(endingStation));
  }
  else{
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf('Park')) + Math.abs(lines[endingLine].indexOf('Park') - lines[endingLine].indexOf(endingStation));
  }
}

