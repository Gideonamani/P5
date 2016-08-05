function Bubble () {
	this.x = random(0,width);
	this.y = random(0,height);

	this.radius = 10;
	this.diameter = 2*this.radius;

	this.col = color(100, 100, 200);

	this.show = function() {
		stroke(random(0,255),random(0,200), random(0,200));
		fill(this.col);
		ellipse(this.x, this.y, this.diameter, this.diameter);
	};

	this.wobble = function() {
		this.x += random(-1.5,1.5);
		this.y += random(-1,1);
	};

	this.clicked = function () {
		var randomr = random(150,255);
		var randomb = random(0,100);
		var randomg = random(0,100);
		var randoma = random(0,255);

		var distance = dist(mouseX, mouseY, this.x, this.y); 
		if (distance < this.radius){
			this.col = color(randomr, randomb, randomg, randoma);

			this.wobble = function() {
				this.x += random(0);
				this.y += random(0);
			};
		}
		// if (distance > this.radius) {
		// 	bubbles.splice(0,1);
		// }
	}


}