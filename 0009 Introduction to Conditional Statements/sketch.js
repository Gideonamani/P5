function setup() {
	createCanvas(600,400)
}

function draw() {
	background(200);
	
	stroke(255);
	strokeWeight(4);
	noFill();

	//as the mouse is moved over the canvas... if the mouse X goes over 300
	//the circle get filled in with the color (255,50,200)
	if (mouseX > 300) {
		fill(255, 50, 200);
	}
	ellipse(300,200,100,100);

	if (mouseY < height/2) {
		fill(20,20,150);
		rect(50, mouseY, 80, 80)
	}

}
