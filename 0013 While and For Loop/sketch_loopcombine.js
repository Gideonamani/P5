/// Using loops to draw a multiple number of objects(shapes)
// across the canvas.

//edit out the script tags in the index.html to see it work.

function setup() {
	createCanvas(400,400)
}

function draw() {
	background(200);

	stroke(20, 230, 80);
	strokeWeight(2);

//repeat code
	stroke(200, 30, 80);

	var x = 25;

	rect(x,100,50,50);
	x += 60;

	rect(x,100,50,50);
	x += 60;

	rect(x,100,50,50);
	x += 60;

	rect(x, 100, 50 ,50);
	x += 60;

	rect(x, 100, 50 ,50);
	x += 60;

	rect(x, 100, 50 ,50);
	x += 60;

	rect(x, 100, 50 ,50);


//while loop
	stroke(20, 230, 80);

	var x = 25;
	while (x < width) {
	rect(x,200,50,50);
	x += 60;
	}

//for loop
	stroke(20, 30, 240);
	for (var x = 25; x < width ; x += 60) {
		rect(x,300,50,50);
	}

}