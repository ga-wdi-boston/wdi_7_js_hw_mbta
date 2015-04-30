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
  lines : {
    'green':['Haymarket', 'Government Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
    'red': ['South Station', 'Park St', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'orange': ['North Station', 'Haymarket', 'Park St', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
  },

  abs : function(indexVal){
    return Math.abs(indexVal);
  },

  getIndex : function(value, mbta_line){
    return lines[mbta_line].indexOf(value);
  },

  calcSegment : function(stop_one, stop_two, line) {
    return abs(getIndex(stop_one, line) - getIndex(stop_two, line));
  },

  diffLineDistance : function(firstStop, lastStop, firstLine, lastLine){
    //Get distance to park st for both lines
    firstSegment = this.calcSegment('Park St', firstStop, firstLine);
    secondSegment = this.calcSegment('Park St', lastStop, lastLine);
    return firstSegment + secondSegment;
  }
};


if (startingLine === endingLine){
  console.log(alert_str + myMBTA.calcSegment(startingStation,endingStation,startingLine));
} else {console.log(alert_str + myMBTA.diffLineDistance(startingStation,endingStation, startingLine, endingLine));

}
