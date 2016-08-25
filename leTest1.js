/**
 * Hey Pete, answer all the questions in this file. If you have node installed you should be able
 * to run node leTest1.js which should run the code contained within
 *
 * TRY TO NOT LOOK UP ANSWERS. If you do look something up please say you did.
 * Try to answer everything even if you have no clue. ZE LEARNING!
 */

// 1) Explain why the following code behaves the way it does. Solve the lobBob()
// expected logging three different ways.

var bob = 'bob';

function logBob() {
  var bob = 'frank';
  console.log(bob);
}
logBob(); // Expected bob
console.log(bob); // logs bob

console.log('##################');

// 2) Explain why the behavior below occurs

function loopTest() {
  for (var i = 0; i < 10; i++) {
    console.log('iteration', i);
  }
  console.log('Final value is: ', i); // Why is the final value what it is? Is it what you expected?
}
loopTest();

console.log('##################');

// 3) Can you explain why this happens?

function double() {
  console.log('Whaaaaat?', isaNumber);
  var isaNumber = 3;
  console.log(isaNumber);
}
double();

console.log('##################');

// 4) Give a simple example of the following things:

// For loop


// While loop


// Switch statement


// Do-while


// if, else-if, else logic


console.log('##################');

// 5) Do you know what modulo is? Give an example of it!


console.log('##################');

// 6) Create an array, a multidimensional array, and a jagged array!



console.log('##################');

// 7) Create an object that contains at least: An array, a string, an integer, a float, an object, anddddddddddd a function!


console.log('##################');

// 8) Functions are wonderful things! Give me the following examples!

// Double a number and return the result!


// Return a string greeting!


// A function that returns an array...


// A function that returns an OBJECT......


// A function that returns a function!!!!!!! (yes functions can return functions!)


// Special........ A function that takes a function as one of its input parameters....


console.log('##################');

// 9) Le hard part. FizzBuzz is a classic programming project / test. Write code such that:
// a) if a number is divisble by three Fizz is printed
// b) if a number is divisible by five Buzz is printed
// c) if a number is divisible by BOTH FizzBuzz is printed
//
// This must function for all numbers 0 - 30 AT LEAST. But try to make this so that it can go 0 > n numbers (n being user supplied perhaps?)
//
// Now here's the tricky part.......
//
// Solve the above three different ways. You have all the tools you need from the other questions here.
