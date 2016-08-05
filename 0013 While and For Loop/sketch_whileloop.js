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


//We use loops to make this repeating code syntax simpler and shorter.
// This is how the for loop is written.. start cond, while loop with code and incrementor inside.

	var x = 25;
	while (x < width) {
	rect(x,200,50,50);
	x += 60;
	}
}