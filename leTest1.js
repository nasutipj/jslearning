/**
 * Hey Pete, answer all the questions in this file. If you have node installed you should be able
 * to run node leTest1.js which should run the code contained within
 *
 * TRY TO NOT LOOK UP ANSWERS. If you do look something up please say you did.
 * Try to answer everything even if you have no clue. ZE LEARNING!
 */

// 1) Explain why the following code behaves the way it does. Solve the lobBob()
// expected logging three different ways.

/** #1 Answer:
-Set variable named bob equal to 'bob' > String variable
-Create a function called "logBob" that accepted no paramaters
	-first thing it does is set variable bob (function scope variable) equal to string 'frank'
	-next, console logs the variable bob which is currently 'frank' string
	-end function definition
-Now, function runs and logs frank because of the function scope variable that is set
-Next, function runs with input parameter of variable bob. I don't fully understand this but imagine it is the global variable overriding the function scope variable?
-Finally, console.log logs a bunch of pound signs because thats what you told it to do!
*/

var bob = 'bob';

function logBob() {
  var bob = 'frank';
  console.log(bob);
}
logBob(); // Expected bob
console.log(bob); // logs bob

console.log('##################');

// 2) Explain why the behavior below occurs
/** #2 Answer:
-Creates a function called loopTest without required parameters
-For variable i which is an integer, set it equal to 0
-Next, the condition that must exist for loop to keep running (to prevent infinite) so the loop will repeat until i is less than 10
-i gets incremented after each run through, to ultimately change condition and exit the loop

-Pre-Run guess: I am thinking that the final value will be "10" because the script will run for 9, and will increment at end of run, but then 10 is not less than 10 so it will stop. Lets see:

-Post-run: Awesome, I got it right!
*/

function loopTest() {
  for (var i = 0; i < 10; i++) {
    console.log('iteration', i);
  }
  console.log('Final value is: ', i); // Why is the final value what it is? Is it what you expected?
}
loopTest();

console.log('##################');

// 3) Can you explain why this happens?
/**
-The result is "Whaaat? undefined"
-Undefined comes back because "isaNumber" is not a currently defined variable
-Next line, defines the variable as the number 30
-Now, consolelog the variable and you get the number 30
-JavaScript can't deal with something that has no explanation what it is, hence undefined
*/

function double() {
  console.log('Whaaaaat?', isaNumber);
  var isaNumber = 3;
  console.log(isaNumber);
}
double();

console.log('##################');

// 4) Give a simple example of the following things:
// For loop
var runNum = 1;
function forLoop() {
	for (var num = 15; num >=5; num--) {
		console.log('This is run number ' + runNum + ', and the num value is ' + num);
		runNum++;
	}
}
forLoop();

// While loop
var i = 10;
function whileLoop() {
	while (i > 0) {
		console.log('i is ' + i);
		i--;
	}
}
whileLoop();

// Switch statement
// !!! Had to look up switch statement, did it before going through book but forgot it
var switchNumber = prompt("Pick a number between 1 and 10");
switchNumber = parseInt(switchNumber, 10);
switch (switchNumber) {
	case 1:
		console.log("You entered 1!");
		break;
	case 2:
	case 8:
		console.log("You entered between 2 and 8");
		break;
	default:
		console.log("You entered 9 - 10");
		break;
}

// Do-while
// !!! Had to look it up, never done before:
var myName = "Peter";
var num = 1;
do {
	console.log("the name is " + myName + "and the number is " + num)
	num++;
} while (num <=10);


// if, else-if, else logic
// !!! Had to review online but have done before
var userVariable = prompt("Enter a number between 0 and 10");
userVariable = parseInt(userVariable, 10);

function checkNumberAndReport(inputNumber) {
	if (inputNumber <=3) {
		console.log("The number is less than or equal to three");
	} else if (8 > inputNumber > 3) {
		console.log("The number is greater than three and less than 8");
	} else {
		console.log("The number is greater than or equal to 8");
	}
}
checkNumberAndReport(userVariable);
console.log('##################');

// 5) Do you know what modulo is? Give an example of it!
/* #5 Answer:
-A modulo is the remainder after divison? % sign? like 5 % 3 > modulo would be 2?
-After checking, looks like I was right-ish, let's test:
*/

console.log('Below is modulo testing: ');
console.log(5 % 3); // This logs 2, awesome!
console.log('##################');

// 6) Create an array, a multidimensional array, and a jagged array!
var simpleArray = [];
simpleArray[0] = "peter";
simpleArray[1] = "turkey";
simpleArray[2] = "tom";
console.log(simpleArray);
console.log('##################');

var multiArray = simpleArray;
multiArray[0][0] = "peterchild";
multiArray[0][0][0] = "petergrandchild";
multiArray[1][0] = "turkeychild";
multiArray[1][1] = "flamingochild";
multiArray[1][0][0] = "turkeygrandchild";
multiArray[2][0] = "tomchild";
multiArray[2][0][0] = "tomgrandchild";
console.log(multiArray);

// 7) Create an object that contains at least: An array, a string, an integer, a float, an object, anddddddddddd a function!


console.log('##################');

// 8) Functions are wonderful things! Give me the following examples!

// Double a number and return the result!
function doubleNum(number) {
	number = number * 2;
	return number;
	console.log(number);
}
var userIn = prompt("Enter a number");
userIn = parseInt(userIn, 10);
doubleNum(userIn);

// Return a string greeting!
function greet(user) {
	alert("Hello visitor, you claim your name is " + user);
}
var visitor = prompt("Tell me your name visitor");
greet(visitor);

// A function that returns an array...
var numArrayElements = 5;
function createArrayByNum(numArrayElements) {
	var createdArray = [];
	for (var i = 0; i <= numArrayElements; i++) {
		createdArray[i] = "arrayElementNumber" + i;
	}
	return createdArray;
}
console.log(createArrayByNum(numArrayElements));

	
// A function that returns an OBJECT......
function createBoatObject(detailsArray) {
	var boatsObject = new Object();
	boatsObject.boatId = detailsArray[0];
	boatsObject.boatType = detailsArray[1];
	boatsObject.boatAge = detailsArray[2];
	boatsObject.boatLength = detailsArray[3];
	return boatsObject;
}
var id = prompt("Enter unique ID of the boat");
var type = prompt("Enter the type of the boat");
var age = prompt("Enter the age of the boat");
var length = prompt("Enter the length of the boat");
var detailsArray = [];
detailsArray[0] = id;
detailsArray[1] = type;
detailsArray[2] = age;
detailsArray[3] = length;
var outputObject = createBoatObject(detailsArray);
console.log(outputObject);


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

//METHOD 1 (not great):
var num = prompt("Enter a number to test the FizzBuzzer");
function fizzBuzz(num) {
	var by3 = (num % 3);
	var by5 = (num % 5);
	
	if (by3 == 0) {
		var by3yes = 1;
	} else {
		by3yes = 0;
	}
	
	if (by5 == 0) {
		var by5yes = 1;
	} else {
		by5yes = 0;
	}
	
	var fizzBuzzCheck = by3yes + by2yes;
	
	if (fizzBuzzCheck == 2) {
		console.log("FIZZBUZZ DING DING DING!!!");
	} else if (by3yes == 1) {
		console.log("FIZZ");
	} else if (by5yes == 1) {
		console.log("BUZZ");
	} else {
		console.log("NEITHER FIZZ NOR BUZZ");
	}			
}
fizzBuzz(num);


//METHOD 2 (better):
var num = prompt("Enter a number to test the FizzBuzzer");
function fizzBuzz(num) {
	var by3 = (num % 3);
	var by5 = (num % 5);
	
	if (by3 == 0 & by5 == 0) {
		console.log("FIZZBUZZ DING DING DING!!!");
	} else if (by3 == 0) {
		console.log("FIZZ");
	} else if (by5 == 0) {
		console.log("BUZZ");
	} else {
		console.log("Neither Fizz Nor Bizz");
	}	
}
fizzBuzz(num);

