function Bubble (x,y) {
	this.x = x;
	this.y = y;
	this.lifespan = 255;
	this.d = 30;
	this.col = color(100, 100, 200, this.lifespan);
	this.xoff = 3;
	this.yoff = 3;
	this.reset = true;

	this.show = function() {
		stroke(random(0,255),random(0,200), random(0,200));
		fill(this.col);
		ellipse(this.x, this.y, this.d, this.d);
		this.wobble(this.xoff,this.yoff);
	};



	this.fader = function() {
		if(this.lifespan < 1 || this.lifespan > 256) {
			this.reset = !this.reset 
		}
		if (this.reset) {
			this.lifespan-=3;
		} else {
			this.lifespan+=3;
		}
		this.col = color(100, 100, 200, this.lifespan);
	};

	this.clicked = function () {
		this.x += random(-15,10)
		this.y += random(-8,18)
	}

	//Wobble takes argument of how random x and how random y
	this.wobble = function(xoff,yoff) {
		this.x += random(-xoff,xoff);
		this.y += random(-yoff,yoff);
	};
	this.stopWobble = function (a,b) {
		this.xoff = a;
		this.yoff = b;
	}

}