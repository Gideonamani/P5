function Bubble () {
	this.x = random(0,width),
	this.y = random(0,height),

	this.show = function() {
		stroke(random(0,255),random(0,200), random(0,200));
		noFill();
		//fill(100);
		ellipse(this.x, this.y, 23, 23);
	},

	this.wobble = function() {
		this.x += random(-1.5,1.5);
		this.y += random(-1,1);
	}
};