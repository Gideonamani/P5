function setup() {
	for (i=0; i < 20; i++) {
		var p = createP("Blue paragraphs");
		p.position(random(500), random(450));
		p.style("color", "blue");
		p.class("blue");
	}
	for (i=0; i < 20; i++) {
		var p = createP("Pink paragraphs");
		p.position(random(500), random(350, 800));
		p.style("color", "pink");
		p.class('pink')
	}
	for (i=0; i < 20; i++) {
		var p = createP("Green paragraphs");
		p.position(random(200, 500), random(800));
		p.style("color", "turquoise");
		p.class('turquoise');
	}

	createCanvas(400,400);
}

function draw() {
	background(200);
	rect(40,40,320,320)
}