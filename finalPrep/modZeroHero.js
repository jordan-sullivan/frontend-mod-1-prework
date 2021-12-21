// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "J-Dawg";
var specialAbility = "transport to another location";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = ("What's up! " + "I'm " + heroName + "!");
var catchPhrase = "With a sneeze, I " + specialAbility + " with ease!";

// Declare two variables - power AND energy - set to integers
var power = 1313;
var energy = 7850;

// Declare two variables - fullPower AND fullEnergy
var fullPower = (power * 500 );
var fullEnergy = (energy + 150);

//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = false;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Glueman", "The Timestopper", "Sheilder"] ;
var sidekicks = ["The Flash", "Superman", "Superwoman"];

// Print the first sidekick to your console
console.log(sidekicks[0]);


// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
var count = archEnemies.push("Dr. Passport Enforcer");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sidekicks.shift();

console.log(sidekicks);



// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel


var dangaLevel = 34;
var savesDay = "J-Dawg saves the day";
var excuse = "Uhh, gotta achoo outta here";
function assessSituation(dangaLevel, savesDay, excuse) {

  if (dangaLevel > 50) {
    console.log(excuse);
  } else if (dangaLevel < 10) {
    console.log("Meh. Hard pass.");
  } else {
    console.log(savesDay);
  }
}

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.
assessSituation(34, "J-Dawg saves the day", "Uhh, gotta achoo outta here")

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
assessSituation(99, announcement, excuse);
// Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
assessSituation(21, announcement, excuse);
// should print - 'Never fear, the Courageous Curly Bracket is here!'
assessSituation(3, announcement, excuse);
//should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Boo Boo",
  smell: "rotting lettuce",
  weight: 45,
  citiesDestroyed: ["Portland", "Seattle", "Denver"],
  luckyNumbers: [22, 33, 44, 55],
  address: {
    number: 123,
    street: "Elm St.",
    state: "Rhode Island",
    zip: 34009
  }
}



// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50


class SuperHero {
  constructor() {
  this.name = "J-Dawg";
  this.superpower = "transports with a sneeze";
  this.age = 33;
  this.archNemesis = archNemesis;
  this.powerLevel= powerLevel100;
  this.energyLevel=energyLevel;

  console.log(name);

  }
}

var otherInfo = new SuperHero {"The Syntax Error", 100, 50);
console.log(50);



// - Create the following class methods

//   - sayName, should print the hero's name to the console
sayname: function() {
  console.log(superhero.sayname);
},
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number
maximizeEnergy: function() {
  console.log(energyLevel + 950);


    },
    gainPower:function()
      console.log(`${energyLevel} * ${energyLevel});
    
// Reflection
// What parts were most difficult about this exerise?
//Functions tripped me up in this section. I completely forgot what to do here and had to look them up all over again.

// What parts felt most comfortable to you?
//Variables and pushing to git felt comfortable and almost familiar.

// What skills do you need to continue to practice before starting Mod 1?
//I will need to take a typing course over the break, I am making a lot of silly spelling errors. I will also study more
//keyboard shortcuts and "hacks" to speed up my workflow.
