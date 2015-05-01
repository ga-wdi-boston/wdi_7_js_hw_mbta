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

alert_str = 'Number of stops is: ';

// Create a array for each line

var trip = function(){
   var lines = {
      'green':['Haymarket', 'Government Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
      'red': ['South Station', 'Park St', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
      'orange': ['North Station', 'Haymarket', 'Park St', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
    };
    function abs(indexVal){
      return Math.abs(indexVal);
    }
    function getIndex(value, mbta_line){
      return lines[mbta_line].indexOf(value);
    }
    function calcSegment(stop_one, stop_two, line) {
          return abs(getIndex(stop_one, line) - getIndex(stop_two, line));
    }
    function diffLineDistance(firstStop, lastStop, firstLine, lastLine){
      //Get distance to park st for both lines
      firstSegment = calcSegment('Park St', firstStop, firstLine);
      secondSegment = calcSegment('Park St', lastStop, lastLine);
      return firstSegment + secondSegment;
    }
  return {
    countStops: function(startingLine, startingStation, endingLine, endingStation){
        if (startingLine === endingLine){
            console.log(alert_str + calcSegment(startingStation,endingStation,startingLine));
            alert(alert_str + calcSegment(startingStation,endingStation,startingLine));
     } else {
         console.log(alert_str + diffLineDistance(startingStation,endingStation, startingLine, endingLine));
         alert(alert_str + diffLineDistance(startingStation,endingStation, startingLine, endingLine));

     }
    }
  };
};
var boston = trip();
boston.countStops(startingLine,startingStation,endingLine,endingStation);

