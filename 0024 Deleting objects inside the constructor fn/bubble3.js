function Bubble () {
	this.x = random(0,width);
	this.y = random(0,height);
	this.lifespan = 255;

	this.d = 23;

	this.col = color(100, 100, 200, this.lifespan);

	this.show = function() {
		stroke(random(0,255),random(0,200), random(0,200));
		fill(this.col);
		ellipse(this.x, this.y, this.d, this.d);
	};

	this.wobble = function() {
		this.x += random(-1.5,1.5);
		this.y += random(-1,1);
	};

	this.fadeout = function() {
		if (this.lifespan > 0 && random(1) < 0.2) {
			this.lifespan--;
		}
		this.col = color(100, 100, 200, this.lifespan);
	};

	this.clicked = function () {

		this.wobble = function() {
			this.x += random(0);
			this.y += random(0);
		};
	}


}