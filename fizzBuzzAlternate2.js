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