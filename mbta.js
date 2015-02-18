var MBTA = {

lines = {
  "green": ["North Station","Haymarket","Government Center","Park Street","Boylston","Arlington","Copley","Hynes Convention Center", "Kenmore"],
  "red": ["Alewife","Davis","Porter","Harvard","Central","Kendall/MIT","Charles/MGH","Park Street","Downtown Crossing","South Station"],
  "orange": ["Oak Grove", "Malden Center", "Wellington", "Assembly","Sullivan Square", "Community College", "North Station","Haymarket","Park Street","State","Downtown Crossing"]
  },

  userInputs = function(){
    startingLine = prompt("Enter the Starting Line: ");
    endingLine = prompt("Enter the Ending Line");
    startingStation = prompt("Enter the Starting Station");
    endingStation =  prompt("Enter the Ending Station");
  },

  // distance = mbta[origin_line].index(origin_stop) - mbta[destination_line].index(destination_stop)
  // distance = distance.abs

  distanceToParkSt = function(line){
      var startingLine = this.lines[line],
      parkSt = startingLine.indexOf("Park Street");
      return function(endingStation){

  }

  startingStation,
  endingLine,
  endingStation;


alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);

};
