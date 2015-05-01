// Exercise 3
//
// 1. Building on Exercise 2, implement the following methods:
//
// age() - returns the age of the car.
// setYear()
// getYear()
// setMake()
// getMake()
// setModel()
// getModel()
// setColor()
// getColor()
// Include validity checking for setYear().

// 2. Modify the constructor you have written so that the mileage is
//    passed in as a parameter and recorded as an attribute.

// 3.  Add accessors for the new mileage.  For validity, ensure that the
//     mileage for a car can never be decreased.
// 4 colors: red orange black green blue silver white
//   none is an option
//
//

var Car = function(setYear, setMake, setModel, setColor, setMileage){
  Car.prototype.newColor(setColor);
  this.year = setYear;
  this.make = setMake;
  this.model = setModel;
  this.color = setColor;
  this.mileage = setMileage
}


Car.prototype.newColor = function (newColor) {
  var colors = ['red', 'orange', 'black', 'green', 'blue', 'silver', 'white'];
  if (colors.indexOf(newColor)===-1){
    console.log("Not part of colors but, No change to color");
  }
  this.color = newColor;
}

Car.prototype.newYear = function(newYear){
  if (newYear > 2015) {
    console.log("We are not yet building cars in the future");
  }
  else{
    this.year = newYear;
  }
}

Car.prototype.newMileage = function(newMileage) {
  if(newMileage<this.mileage){
    console.log("Can't set mileage to lower number!!!")
  }
  else{
    this.mileage = newMileage;
  }
}

Car.prototype.newMake = function(newMake){
  this.make = newMake;
}
Car.prototype.newModel = function(newModel){
  this.model = newModel;
}


Car.prototype.getYear = function(){
  return this.year;
}
Car.prototype.getMake = function(){
  return this.make;
}
Car.prototype.getModel = function(){
  return this.model;
}
Car.prototype.getColor = function(){
  return this.color;
}
Car.prototype.getMileage = function (){
  return this.mileage
}
Car.prototype.age = function(){
  return 2015-this.year;
}

var modCar = new Car(2014, 'Audi', 'R8','orange',10000);
console.log(modCar);
console.log(modCar.newYear(2010));
console.log(modCar.newMileage(33550))
console.log(modCar);

