/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
Line 14-18 state the following: If the user's doorChoice is strictly equal to 1, the bear's clothing is assigned as a hat.
If the user selects any other option not strictly equal to 1, the bear will be wearing a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
The variable bearClothing has a new value assigned to it after the first if statement executes.
In the original scenario the bear's clothing is a hat, it changes to become a scarf if the user selects anohter option besides Door 1.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
A scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
In this statement, the if statement is first checking that if the bearChoice is 1,
then the user would be prompted to offer the bear their hat and the bear would show them a secret passage out.
If the user selected the assignment bearChoice 2 instead, they would be prompted to tell the bear that the
scarf is too small and the bear would begin to cry.
If the user selected the next condition and chose bearChoice 3, they would be prompted to make a dash for the next room full of snakes.
If the user selected any different conditional, they would be prompted to another command that ends the game.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
console.log("You run as fast as you can into the next room. It's full of snakes!")
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
My favorite ending the the bear crying, I just think that's hilarious. 
*/
