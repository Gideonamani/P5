function setup() {
	createCanvas(1000,500)
	background(0);
}

function draw() {
	//background(0);

	//random circles
	noStroke();
	fill(random(100,250),0,random(80,200),random(0,180));
	ellipse(random(0,width), random(0,height), 24, 24);


	//rect(40,40,350,350)
}

function mousePressed() {
	//random background on mouse press
	background(random(0,100))
}