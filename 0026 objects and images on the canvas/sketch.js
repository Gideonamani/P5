bubbles = [];
fruits = [];
var fruit;

function preload () {
	for (var i = 7 - 1; i >= 0; i--) {
		fruits[i] = loadImage('image'+(i+1)+'.jpg');
	}

	// fruits[0] = loadImage('image1.jpg');
	// fruits[1] = loadImage('image2.jpg');
	// fruits[2] = loadImage('image3.jpg');
	// fruits[3] = loadImage('image4.jpg');
	// fruits[4] = loadImage('image5.jpg');
	// fruits[5] = loadImage('image6.jpg');
}

function setup() {
	createCanvas(600,400)
}

function draw() {
	background(255);
	for (var i = bubbles.length - 1; i >= 0; i--) {
		bubbles[i].showoncanvas();
	}

}

function mousePressed () {
	N = floor(random(fruits.length));
	bubbles.push(new Bubble(mouseX, mouseY, fruits[N]));
}




function Bubble (x,y,img) {
	this.x = x;
	this.y = y;
	this.img = img;

	this.showoncanvas = function() {
		// stroke(random(0,255),random(0,200), random(0,200));
		// //noFill();
		// fill(180);
		// ellipse(this.x, this.y, 23, 23);
		imageMode(CENTER);
		image(this.img, this.x, this.y)
		this.wobble();
	};

	this.wobble = function() {
		this.x += random(-1.5,1.5);
		this.y += random(-1,1);
	};
};