// Code here.
/*var startingLine,
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
  'green':[],
  'red': [],
  'orange': []
};*/

//Stuff happens
var Mbta = function(orig_line, orig_stop, dest_line, dest_stop){
  this.orig_line = orig_line;
  this.orig_stop = orig_stop;
  this.dest_line = dest_line;
  this.dest_stop = dest_stop;
  this.lines = {
      Red: ["Alewife", "Davis", "Porter", "Harvard", "Central", "Kendall/MIT", "Park Street", "South Station"],
      Green: ["Haymarket", "Government Center", "Park Street", "Boylston", "Arlington", "Copley"],
      Orange: ["North Station", "Haymarket", "Park Street", "State Street", "Downtown Crossing", "China Town", "Tufts Medical Center"]
    };
  }

  Mbta.prototype = {
    diffLineCount: function(line_start, start, line_stop, stop){ if(start == stop){
          return 0;
        }else{
          var count1 = this.sameLineCount(line_start, start, "Park Street");
          var count2 = this.sameLineCount(line_stop, stop, "Park Street");
          return count1 + count2;
        }
      },
    sameLineCount: function(line_name, stop1, stop2) {
      debugger;
      var count = this.lines[line_name].indexOf(stop1) - this.lines[line_name].indexOf(stop2);
      if(count < 0){
        return count *= -1;
      }else{
        return count;
      }
    },
    sameLine: function() {
      if(this.orig_line === this.dest_line){
        return true;
      }else{
        return false;
      }
    },
     countStops: function(){
    if(this.sameLine()){
      return this.sameLineCount(this.orig_line, this.orig_stop, this.dest_stop);
    } else {
      return this.diffLineCount(this.orig_line, this.orig_stop, this.dest_line, this.dest_stop);
    }
  }
};

// #Tests for the above class.

// #Tests stop counters.
var trip1 = new Mbta( "Red",  "Alewife",  "Red",  "South Station");
console.log(trip1.orig_line);
console.log( "1. " + trip1.countStops() + " should equal " + 7);

var trip2 = new Mbta("Green", "Boylston", "Green", "Haymarket");
console.log("2. " + trip2.countStops() + " should equal " + 3);


var trip3 = new Mbta("Orange", "Haymarket", "Orange", "Downtown Crossing");
console.log("3. " + trip3.countStops() + " should equal " + 3);

var trip4 = new Mbta("Red", "Kendall/MIT", "Orange", "State Street");
console.log("4. " + trip4.countStops() + " should equal " + 2);


var trip5 = new Mbta("Red", "Porter", "Green", "Copley");
 console.log("5. " + trip5.countStops() + " should equal " + 7);

var trip6 = new Mbta("Orange", "Park Street", "Green", "Park Street");
 console.log("6. " + trip6.countStops() + " should equal " + 0);

var trip7 = new Mbta("Red", "South Station", "Orange", "North Station");
console.log("7. " + trip7.countStops() + " should equal " + 3);

var trip8 = new Mbta("Orange", "Haymarket", "Green", "Haymarket");
console.log("8. " + trip8.countStops() + " should equal " + 0);

var trip9 = new Mbta("Red", "Central", "Green", "Arlington");
console.log("9. " + trip9.countStops() + " should equal " + 4);

var trip10 = new Mbta("Red", "Alewife", "Orange", "Tufts Medical Center");
console.log("10. " + trip10.countStops() + " should equal " + 10);
