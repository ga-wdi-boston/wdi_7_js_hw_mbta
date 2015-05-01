// // Code here.
// var startingLine,
// startingStation,
// endingLine,
// endingStation;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line


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



var distanceFromParkOne = lines[startingLine].indexOf'parkSt'
var distanceFromParkTwo = lines[endingLine].indexOf'parkSt'
var parkFinal = Math.abs (distanceFromParkOne - distanceFromParkTwo)

function stopCount(){
if (startingLine === endingLine){
return lines[endingLine].indexOf[endingStation]

console.log("the distance is " + final);
}


