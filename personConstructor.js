//constructor function for person

var Person = function (firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// invoke constructor function for person

// not a constructor
var person = createPerson('Joe','Donnelly',34);;

// This is a constructor
var person = new Persoon('Joe','Donnelly',34);
//


//
// INvokes book constructor
var thisBook = new Book('Gone With the Wind', 'Margaret Mitchell');

//the constructor
  var Book = function (newTitle, newAuthor){
    this.title = newTitle;
    this.author = newAuthor;
  };
