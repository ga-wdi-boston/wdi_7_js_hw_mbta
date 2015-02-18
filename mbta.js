var MBTA = {

lines: {
  "green": ["North Station","Haymarket","Government Center","Park Street","Boylston","Arlington","Copley","Hynes Convention Center", "Kenmore"],
  "red": ["Alewife","Davis","Porter","Harvard","Central","Kendall/MIT","Charles/MGH","Park Street","Downtown Crossing","South Station"],
  "orange": ["Oak Grove", "Malden Center", "Wellington", "Assembly","Sullivan Square", "Community College", "North Station","Haymarket","Park Street","State","Downtown Crossing"]
  },

  userInputs: function(){
    this.startingLine = prompt("Enter the Starting Line: ");
    this.endingLine = prompt("Enter the Ending Line");
    this.startingStation = prompt("Enter the Starting Station");
    this.endingStation =  prompt("Enter the Ending Station");
  },

  // distance = mbta[origin_line].index(origin_stop) - mbta[destination_line].index(destination_stop)
  // distance = distance.abs

  distanceToParkSt: function(line){
      var currentLine = this.lines[line],
      parkSt = currentLine.indexOf("Park Street");
      return function(endingStation){
        var currentStation = currentLine.indexOf(endingStation);
        return Math.abs(currentStation - ParkSt);
      }
  },

  distanceToStation: function(){
    this.startParkSt = this.distanceToParkSt(this.startingLine);
    this.endParkSt = this.distanceToParkSt(this.endingLine);
    this.firstStop = this.startParkSt(this.startingStation);
    this.endingStop = this.endParkSt(this.endingStation);
    return this.firstStop + this.endingStop;
  }
};

MBTA.prompts();
alert("The total number of stops for your travel is " + MBTA.distanceToStation() + " stops.");


// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);
