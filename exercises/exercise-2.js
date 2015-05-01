// Exercise 2
//
// Using Example 2 as a model, create a constructor for a Car class.
// The important attributes of a car are year, make, model, and color.



// When you are done, the following code should create an appropriate object:



var Car = function(newYear,newMake, newModel, newColor){
  this.year = newYear;
  this.make = newMake;
  this.model = newModel;
  this.color = newColor;
}


var classicCar = new Car (1957, 'Ford', 'Mustang', 'red');
console.log(classicCar);
