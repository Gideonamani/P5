/// Using loops to draw a multiple number of objects(shapes)
// across the canvas.

//edit out the script tags in the index.html to see it work.



function setup() {
	createCanvas(400,400)
}

function draw() {
	background(200);

	stroke(200, 30, 80);
	strokeWeight(2);

//This is how we'd have drawn the rectangles on the screen manually.
//We use loops to make this repeating code syntax simpler and shorter.


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
}