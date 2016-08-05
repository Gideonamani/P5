function Bubble () {
	this.x = random(0,width);
	this.y = random(0,height);

	this.col = color(100, 100, 200);

	this.show = function() {
		stroke(random(0,255),random(0,200), random(0,200));
		fill(this.col);
		ellipse(this.x, this.y, 23, 23);
	};

	this.wobble = function() {
		this.x += random(-1.5,1.5);
		this.y += random(-1,1);
	};

	this.clicked = function () {
		this.col = color(200, 0, 200, 150);

		this.wobble = function() {
			this.x += random(0);
			this.y += random(0);
		};
	}


}