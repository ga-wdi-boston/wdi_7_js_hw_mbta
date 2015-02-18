var MBTA = {

  lines: {
    "Green": ["North Station","Haymarket","Government Center","Park Street","Boylston","Arlington","Copley","Hynes Convention Center", "Kenmore"],
    "Red": ["Alewife","Davis","Porter","Harvard","Central","Kendall/MIT","Charles/MGH","Park Street","Downtown Crossing","South Station"],
    "Orange": ["Oak Grove", "Malden Center", "Wellington", "Assembly","Sullivan Square", "Community College", "North Station","Haymarket","Park Street","State","Downtown Crossing"]
    },
    userInputs: function() {
      this.startingLine = prompt("Enter the Starting Line: ");
      this.endingLine = prompt("Enter the Ending Line");
      this.startingStation = prompt("Enter the Starting Station");
      this.endingStation = prompt("Enter the Ending Station");
    },
    distance: function(){
      if(this.startingLine === this.endingLine){
        return Math.abs(this.lines[this.startingLine].indexOf(this.startingStation) - this.lines[this.endingLine].indexOf(this.endingStation));
      } else {
        return Math.abs(lines[this.startingLine].indexOf(startingStation) - lines[this.startingLine].indexOf(lines["Park Street"]) + Math.abs(lines[this.endingLine].indexOf("Park Street") - lines[this.endingLine].indexOf(this.endingStation)));
      }
    }
  };


MBTA.userInputs();
alert("The total number of stops for your travel is " + MBTA.distance() + " stops.");
