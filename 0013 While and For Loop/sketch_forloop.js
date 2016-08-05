/// Using loops to draw a multiple number of objects(shapes)
// across the canvas.

//edit out the script tags in the index.html to see it work.



function setup() {
	createCanvas(400,400)
}

function draw() {
	background(200);

	stroke(20, 30, 200);
	strokeWeight(2);

//using the for loop can be quite advantageous and time saving.
	//var x = 25;
	for (var x = 25; x < width ; x += 60) {
		rect(x,300,50,50);
	}

}