// In this script.. the circle is toggled to appear on top of the
// square in the center on if the mouse click has been toggled.

var par;
var strcol;
var strweight;

var on = false;

function setup() {
	createCanvas(600,400);
}

function draw() {
	background(200);
	stroke(250);
	strokeWeight(4);
	noFill();

	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
		if (on){
			stroke(150);
			strokeWeight(2);

			fill(188);
			ellipse(300,100, 98, 98);
		}

		if (mouseIsPressed) {
			background(0, 255, 0);

			stroke(200);
			strokeWeight(6);

			ellipse(300,300,98,98);
		}
		fill(250, 20, 200);

	}

	rectMode(CENTER);
	rect(300,200,100,100);
}

function mousePressed () {
	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
		//on = true;

		// if (on) {
		// 	on = false;
		// } else {
		// 	on = true;
		// }

		on =! on;
	}
	//par = createP("This got run! ");

}