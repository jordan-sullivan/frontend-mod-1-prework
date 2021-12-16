/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.




// class Burrito {
//constructor (protein, base) {
//this.protein = protein;
//this.base = base;




Make sure to run the file with node in your command line.
*/

// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.



// class Burrito {
//constructor (protein, base, toppings) {
//this.protein = protein;
//this.base = base;
//this.toppings = toppings



// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.


//var breakfastBurrito = new Burrito["eggs", "potatoes", "cheese"];
//var chickenBurrito = new Burrito["shredded chicken", "rice", "lettuce, tomato, guacamole"];
//var beef Burrito = new Burrito[ "grilled steak", "pinto beans", "pico de gallo"]



// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.




// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

//breakfastBurrito.changeProtein();
//console.log(breakfastBurrito);

// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.



// ADD CODE
class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }

  changeProtein() {
    this.protein = "chorizo";
  }
  addTopping() {
    this.toppings = (this.toppings + ", corn");
  }

}
var breakfastBurrito = new Burrito("eggs", "potatoes", "cheese");
var chickenBurrito = new Burrito("shredded chicken", "rice", "lettuce, tomato, guacamole");
var beefBurrito = new Burrito("grilled steak", "pinto beans", "pico de gallo");


breakfastBurrito.changeProtein();
console.log(breakfastBurrito);

chickenBurrito.addTopping();
console.log(chickenBurrito);

beefBurrito.addTopping();
console.log(beefBurrito);
