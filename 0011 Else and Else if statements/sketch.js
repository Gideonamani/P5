var h = 400;
var speed = 4;

function setup() {
	createCanvas(600,400)
}

function draw() {
	var len = width/3

	background(0);
	stroke(255);
	strokeWeight(4);
	noFill();

	if (mouseX < len ) {
		fill(30,250,200);
		rect(40,40,50,50);

	}
	else if (mouseX < 2*len){
		//rand = random(-20,20)

		fill(120,60,20);
		rect(random(len, len + 40), random(100, 160), 50, 50);

	}
	else if (mouseX < 3*len) {

		fill(30,60,90);
		rect(random( 2*len+20, 2*len+150), h, 50 ,50);

		stroke(200);
		strokeWeight(3);
		fill(30,60,190, 200);
		rect( 2*len + 40,h,100,50);

		if (h < 5  || h > 405) { speed = -speed}

		h -=speed; 
	}

}