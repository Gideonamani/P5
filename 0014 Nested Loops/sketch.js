	var lenX = 0;
	var lenY = 0;


function setup() {
	createCanvas(400,400)
}
var offset = 0;

function draw() {
	background(200);
	strokeWeight (4);
	stroke(230);

	for (var i = 0; i <= width; i += 60){
		fill(random(0,230), random(0,230), random(0,230))
		rect(i,40,50,50)
	}


	for (var d = 0; d <= width; d += 40){
		noStroke();
		fill(random(0,230), random(0,230), random(0,230));
		rect(d + offset,120,30,30);
	}
	offset += random(-4,4);


	var r = random(0,200);
	var g = random(0,100);
	var b = random(0,200);

	if (lenX < width || lenY < width) {
		for (var x = 0; x <= lenX; x += 25){
			for (var y = 180; y <= lenY; y += 25){
				fill(r,g,b);
				ellipse(x, y, 20, 20);
			}
		}
	}
	else{ lenX= 0; lenY = 0; }

	lenX += 3;
	lenY +=4;
}