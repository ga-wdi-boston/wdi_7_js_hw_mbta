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

    // distance = (mbta[origin_line].index(origin_stop) - mbta[origin_line].index('Park Street')).abs + (mbta[destination_line].index(destination_stop) - mbta[destination_line].index('Park Street')).abs

    distance: function(startingLine, startingStation, endingLine, endingStation){
      if(this.startingLine === this.endingLine){
        return Math.abs(this.lines[this.startingLine].indexOf(startingStation) - this.lines[this.endingLine].indexOf(this.endingStation));
      } else {

        return Math.abs(this.lines[this.startingLine].indexOf(startingStation) - this.lines[this.startingLine].indexOf(this.lines["Park Street"]) + Math.abs(this.lines[this.endingLine].indexOf("Park Street") - this.lines[this.endingLine].indexOf(endingStation)));
      }

    }
  };


MBTA.userInputs();
alert("The total number of stops for your travel is " + MBTA.distance() + " stops.");


// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);
