function Bubble (x,y) {
	this.x = x;
	this.y = y;
	this.lifespan = 255;
	this.d = 30;

	this.red = 100;
	this.green = 100;
	this.blue = 200;

	this.col = color(this.red, this.green, this.blue, this.lifespan);
	this.reset = true;
	this.canwobble = true;

	this.show = function() {
		stroke(random(0,255),random(0,200), random(0,200));
		fill(this.col);
		ellipse(this.x, this.y, this.d, this.d);
	};

	this.intersects = function (other) {
		var distance = dist(this.x, this.y, other.x, other.y);
		if (distance < this.d/2 + other.d/2){
			return true;		
		} else {return false;}
	}



	this.fader = function() {
		if(this.lifespan < 1 || this.lifespan > 256) {
			this.reset = !this.reset 
		}
		if (this.reset) {
			this.lifespan-=3;
		} else {
			this.lifespan+=3;
		}
		this.col = color(this.red, this.green, this.blue, this.lifespan);
	};

	this.moveApart = function () {
		this.x += random(-15,15)
		this.y += random(-18,14)
	}

	//Wobble takes argument of how random x and how random y
	this.wobble = function() {
		var xoff = 2;
		var yoff = 2;
		if(this.canwobble){
			this.x += random(-xoff,xoff);
			this.y += random(-yoff,yoff);
		}
	};

	this.stopWobble = function () {
		this.canwobble = false;
	};
	this.restartWobble = function () {
		this.canwobble = true;
	}

	this.changeColor = function () {
		if (this.canwobble) {	
			this.red = 200;
			this.green = 100;
			this.blue = 50;
		}
	}

	this.showNumber = function (i) {
		noStroke();
		fill(0);
		textSize(10);
		text(i, this.x, this.y);
	}

	this.showNumberFromOne = function (i) {
		noStroke(255);
		fill(0);
		textSize(14);
		text(i+1, this.x, this.y);
	}

}