function setup() {
	createCanvas(400,400)
}

function draw() {
	background(0);

	//random circles
	noStroke();
	fill(200,20,80);
	ellipse(random(0,width), random(0,height), 24, 24);


	//rect(40,40,350,350)
}