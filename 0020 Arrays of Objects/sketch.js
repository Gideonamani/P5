var bubbles = [];
var howmany = 10;

function setup() {
	createCanvas(400,400);
	background(200);
	for(var i = howmany - 1; i >= 0; i--) {
		bubbles[i] = {
			x:random(0,width),
			y:random(0,height),

			show: function() {
				stroke(random(0,255),random(0,200), random(0,200));
				noFill();
				//fill(100);
				ellipse(this.x, this.y, 23, 23);
			},

			wobble: function() {
				this.x += random(-1.5,1.5);
				this.y += random(-1,1);
			}
		};
	}
	//console.log(bubbles)
}

function draw() {
	//background(200);
	for (var i = bubbles.length - 1; i >= 0; i--) {
		bubbles[i].show();
		bubbles[i].wobble();
	}
}
