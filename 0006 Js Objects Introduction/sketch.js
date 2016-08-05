// var x = 0;
// var y = 200;
// var diameter = 50;

var circle = {
	x:0,
	y:200,
	diameter:50
}


// var r = 218;
// var g = 159;
// var b = 221;

var colour = {
	r:218,
	g:159,
	b:221
}

function setup() {
	createCanvas(600,400);
}

function draw() {
	//background
	background(colour.r, colour.g, colour.b);

	//rectangle
	fill(100,200,100);
	rect(40,40,350,350);

	//ellipse
	fill(250, 20, 200);
	ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

	circle.x +=2;


}