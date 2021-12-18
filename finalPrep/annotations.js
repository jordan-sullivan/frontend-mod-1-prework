// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Invoke the function buildABear and pass it 5 arguments, name, age, fur, clothes, and special power.
function buildABear(name, age, fur, clothes, specialPower) {
//Declare a variable called greeting and assign it the value of a string containing an interpolation for the 
//bear's name with a greeting and a request to be it's friend. 
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //Declare a variable called demographics and set it equal to an array, and set elments to name and age. 
  var demographics = [name, age];
  //Declare a variable called powerSaying that concatenates a string containing a question  "Did you know that I can" and its specialPower. 
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //Declare a variable called builtBear that contains an Object Literal that holds Build A Bear attributes and assign the specifics to those.
    var builtBear = { 
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };
//Log the value of of the object
  return builtBear
}
//Manipulate 2 object instances of the of buildABear containing the 5 arguments
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
//Invoke the function fizzBuzz and pass it 3 arguments: num1, num2, range.
function fizzBuzz(num1, num2, range) {
// Iterate through the arguments starting at the 0 index, continutuing if i is less than or equal to the range, increasing one index spot per loop
  for (var i = 0; i <= range; i++) {
//If i modulos num1 is stictly equal to 0 and i modulous num2 is strictly equal to 0, then log the string "fizzbuzz"
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
 //If only i modulous num1 is strictly equal to 0, log to the console "fizz"
    } else if (i % num1 === 0) {
      console.log('fizz');
 //If only i modulous num2 is strictly equal to 0, log to the console "buzz"  
    } 
      else if (i % num2 === 0) {
      console.log('buzz');
  //Otherwise log to the console the valie of i = 0
    } else {
      console.log(i);
    }
  }
}
//Minipulate 2 instances of the fizzbuzz scenario
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
