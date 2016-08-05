function Bubble (x,y) {
	this.x = x;
	this.y = y;
	this.lifespan = 255;

	this.d = 23;

	this.col = color(100, 100, 200, this.lifespan);

	this.show = function() {
		stroke(random(0,255),random(0,200), random(0,200));
		fill(this.col);
		ellipse(this.x, this.y, this.d, this.d);
	};

	this.isFinished = function () {
		if (this.lifespan < 1){ return true;}
		else {return false;}
	}

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
		var distance = dist(this.x, this.y, mouseX, mouseY);
		if (distance < this.d/2) {
			this.wobble = function() {
				this.x += random(0);
				this.y += random(0);
			};
		}	
	}


}