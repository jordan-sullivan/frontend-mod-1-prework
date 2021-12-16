/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Dog {

}
var dalmation = new Dog
var poodle = new Dog
{
  console.log(dalmation);
  console.log(poodle)

}
// Prompt 2: Snack
class Snack{

}
var cashews = new Snack
var babyCarrots = new Snack
{
  console.log(cashews);
  console.log(babyCarrots)
}

// Prompt 3: Shirt
class Shirt {

}
var shortSleeve = new Shirt
var longSleeve = new Shirt
{
  console.log(shortSleeve);
  console.log(longSleeve)
}


//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog1 {
  constructor() {
    this.type = "friendly";
    this.origin = "rescue";
    this.age= 2;
}
}
var pug = new Dog1();
console.log(pug);



// Prompt 2: Snack
class Snack1 {
  constructor() {
    this.calories = 350
    this.availability = false
    this.name = "Wally's Nuts"
  }
}
var snackNuts = new Snack1();
console.log(snackNuts);

// Prompt 3: Shirt
class Shirt1 {
constructor() {
  this.fabric = "cotton";
  this.cost = 19.99;
  this.store = "REI";
}
}
var flannel = new Shirt1
console.log(flannel)

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog2 {
  constructor(type, origin, age) {
    this.type = type;
    this.origin = origin;
    this.age = age;
  }
}

var pug = new Dog2("not friendy", "bred", 4);
var dalmation = new Dog2("friendly", "rescued", 7);

console.log(pug);
console.log(dalmation);

// Prompt 2: Snack

class Snack2 {
  constructor(calories, availability, name) {
    this.calories = calories;
    this.availability = availability;
    this.name = name;

  }
}
var snackNuts = new Snack2(350, "limited availability due to supply chain issues", "Nutty Nuts");
var cashews = new Snack2(140, "available", "Cash-Yous");

console.log(snackNuts);
console.log(cashews);

// Prompt 3: Shirt

class Shirt2 {
  constructor(fabric, cost, store) {
this.fabric = fabric;
this.cost = cost;
this.store = store;

  }
}
var flannel = new Shirt2("cotton", 19.99, "Sportmans Warehouse");
var longSleeve = new Shirt2("leather", 58.78, "Leather Longsleeve Depot");

console.log(flannel);
console.log(longSleeve);
