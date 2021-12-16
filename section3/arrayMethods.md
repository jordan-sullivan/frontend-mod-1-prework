Methods:
* POP: `pop()` is a method that will remove the last item from an array list
* PUSH: `push(element0) push(element0, element1) push(element0, element 1, /* ... ,*/ elementN)` is a method that adds one or more element to the end of an array ex:
`var animals = ['pigs', 'goats', 'sheep'];
var count = animals.push('cows', 'cats');
console.log(animals); //it will add cows and cats`
* SHIFT: shift() removes the first item from an array list (remember, it's spot 0 not 1).
`var array0 = [1, 2, 3];
var firstElement = array0.shift()
console.log(array0);
//expected output: Array [2, 3]
console.log(firstElement);
//ecpected output: 1`
* UNSHIFT: `unshift()` adds items to beginning of array
`const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// expected output: 5
console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]`
