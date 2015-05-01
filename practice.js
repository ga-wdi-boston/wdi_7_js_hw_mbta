// Create an empty object
///var tom = {};

// Add 2 properties for tom, a name and an age.
var tom = {
  name: "Tom", // this is the property for tom's name
  age: 57,  // this is the property for tom's age
  children: ["Eric", "Jen"],
  address: { street: "6th Ave", city: "Chelmsford", state: "MA"}
}

//this prints out the object tom with the property name and value tom
console.log(tom.name); // print out "Tom"

// same as above.
console.log(tom["name"]);

// Same as above
// var tom = {
//   'name': "Tom", // this is the property for tom's name
//   'age': 57,  // this is the property for tom's age
//   'children': ["Eric", "Jen"],
//   'address': { street: "6th Ave", city: "Chelmsford", state: "MA"}
// }

//this is an object with 3 properties with arrays as values
var lines = {
  'green':['haymarket', 'government center', 'parkSt', 'boylston', 'arlington', 'copley'],
  'red': ['southStation', 'parkSt', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['northStation', 'haymarket', 'parkSt', 'state', 'downtownCrossing', 'chinatown', 'backBay', 'forestHills']
};

console.log(lines.green)
console.log(lines.green[3]);


var startingLine = 'red';

//assigned var startingLine to red and found out the value to the red property 3, which is central
console.log(lines.red)
console.log(lines['red']);
console.log(lines[startingLine])
console.log(lines[startingLine][3]);



var valueForThirdStopOnRedline = lines[startingLine][3]
console.log (valueForThirdStopOnRedline)



// Using ONLY startingLine and startingStation get me the value for these in lines.
var colors = ['red', 'blue', 'yellow', 'white', 'black'];

// To find the index of the color 'yellow' im gonna use the Array indexOf method.

var someColorIndex = colors.indexOf('yellow');
console.log(someColorIndex);

var startingStation = 'central';

// This will get the index of southStation
//console.log( lines['red']);
console.log( lines[startingLine]);
var startNum = lines[startingLine].indexOf(startingStation);
console.log(startNum);  // 3

var endingStation = 'alewife';
var endNum = lines[startingLine].indexOf(endingStation);
console.log(endNum); // 7

//Startiing is red, ending line is red
// we're going from alewife to central



//lines[startingLine].indexOf(startingStation);


startingLine = 'red';
startingStation = 'alewife';

endingLine = 'red';
endingStation = 'central'

var startNum = lines[startingLine].indexOf(startingStation);
var endNum = lines[startingLine].indexOf(endingStation);

var numStops = Math.abs(endNum - startNum);
console.log("From alewife to central is " + numStops);
