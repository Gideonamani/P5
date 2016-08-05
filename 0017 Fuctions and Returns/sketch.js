// Testing how different function return different kind of data.

function setup() {
	var radians = PI/2
	var angle = degrees(radians);
	console.log(radians+' radians = ' + angle + ' degrees');

	var foo =feetToInches(4.8);
	console.log(foo); //This logs out undefined for the function returns nothing!!

	var number = 3.5
	var foot = feetToCentimeters(number);
	console.log(foot)
	console.log(foot + ' is the number of centimeters in ' + number + ' feet!')
}

function feetToInches (feet){
	var inches = feet * 12;
	console.log(feet + ' feet is equal to ' + inches + ' inches');
}

function feetToCentimeters (feet) {
	var centimeter = feet * 30.48;
	return centimeter;
}