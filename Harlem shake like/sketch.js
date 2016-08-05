var walltouchedP;
var ageNumber = 200;
var canharlemShake = true;

// var trail = [];

function setup() {
	canvas = createCanvas(800,400);
	canvas.parent("#canvasdiv");
	walltouchedP = createP("The walls have beeen touched ");
	walltouchedP.parent("#canvasdiv");
	walltouchedP.style("color", "purple");

	checkbox = createCheckbox("Check this to stop this bloody shaking");
	checkbox.position(width, 50);
	checkbox.changed(stopDance);

	numInput = createInput("Type in your age.");
	numInput.changed(changeTouchedN);
	numInput.position(width, 10);
}

function stopDance() {
	if(this.checked()){
		//console.log("They clicked me")
		noLoop();
		canharlemShake = false;
	}else {
		loop();
		canharlemShake = true;
	}
}

function changeTouchedN () {
	ageNumber = numInput.value();
}


function draw() {
	background(200);
	clear();
	displayEllipse();
}
	var diam = 30
	var x = 40;
	var y = 40;
	var xspd = 3.5;
	var yspd = 2;
	var walltouched = 0;

function displayEllipse () {

	ellipse(x,y,diam,diam);
	if (x > 800-diam/2  || x < 0+diam/2){
		xspd = -xspd;
		walltouched ++
	}
	if (y > 400-diam/2 || y < 0+diam/2){
		yspd = -yspd;
		walltouched++
	}

	x += xspd;
	y += yspd;

	walltouchedP.html("The walls have beeen touched " + walltouched + " times.");

	if (walltouched > ageNumber && canharlemShake) {
		harlemShake();
	}
}

function harlemShake() {
	header = select(".heading").position(random(5), random(8));

	content = select(".content").position(random(20), random(100,120));

	canvasdiv = select("#canvasdiv").position(random(15), random(200, 230));

	footer = select("footer").position(random(5), random(630, 640));
}