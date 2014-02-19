// Code here.

// var startingLine,
// startingStation,
// endingLine,
// endingStation;

// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
 var lines = {
  'Green':  ["Haymarket",
             "Government Center",
             "Park Street",
             "Boylston",
             "Arlington",
             "Copley"],
  'Red':    ["South Station",
             "Park Street",
             "Kendall",
             "Central",
             "Harvard",
             "Porter",
             "Davis",
             "Alewife"],
  'Orange': ["North Station",
             "Haymarket",
             "Park Street",
             "State",
             "Downtown Crossing",
             "Chinatown",
             "Back Bay",
             "Forest Hills"]
};

function Trip(startLine, startStation, endLine, endStation) {
  this.from = {line: startLine, station: startStation};
  this.to = {line: endLine, station: endStation};
}

Trip.prototype = {
  // takes a single place (so trip.from or trip.to)
  distanceToPark: function(place) {
    var not_park = lines[place.line].indexOf(place.station),
        park = lines[place.line].indexOf("Park Street"),
        distance = Math.abs(not_park - park);
    return distance;
  },
  totalDistance: function() {
    if (this.from.station === this.to.station && this.from.line === this.to.line) {
      return 0;
    }
    var total =  this.distanceToPark(this.from) + this.distanceToPark(this.to);
    return total;
  },
  displayStop: function(stop) {
    return stop.station + " (" + stop.line + ")";
  }
};

// Text formatting for trip display
var reportStops = function(trip) {
  var showTrip = document.getElementById("show-trip");
  showTrip.innerHTML = trip.displayStop(trip.from) + " to " + trip.displayStop(trip.to) +
   " is " + trip.totalDistance() + " stops.";
}

// Make a select form depending on the line selected in the radios
var makeSel = function(form, line) {
  var line_length = lines[line.value].length,
      opt;
  form.innerHTML = ""; // Drop the current options when user changes line
  for(var i = 0; i < line_length; i++) {
    opt = document.createElement("option");
    opt.innerHTML = lines[line.value][i];
    opt.value = lines[line.value][i];
    form.appendChild(opt);
  }
}

// Create trip from form
var formToTrip = function() {
  var toLine,
      fromLine,
      newTrip;
  // look through the radio buttons for to or from to see which is checked
  var getLine = function(line_direction) {
    var radio = document.getElementsByName(line_direction);
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        return radio[i].value;
      }
    }
  };
  toLine = getLine("toline");
  fromLine = getLine("fromline");

  newTrip = new Trip(
    toLine,
    document.getElementById("tostation").value,
    fromLine,
    document.getElementById("fromstation").value
    );

  return newTrip;
}

// This finds the number of stops when user clicks the button
var getToThaChoppa = function() {
  var myTrip = formToTrip();
  reportStops(myTrip);
}

