//code to make a bouncing ball that changes it color to shades of blue
//when it hits the bottom and top
//and turns to red shades when it hits the right or left.

var ball = {
	x:40,
	y:40,

	r:20,

	xspeed:1,
	yspeed:2,

	rcol:100,
	gcol:100,
	bcol:100,

}

function setup() {
	createCanvas(600,400)
}

function draw() {
	background(200);

	fill(ball.rcol, ball.gcol, ball.bcol);

	ball.x += ball.xspeed;
	ball.y += ball.yspeed;

	ellipse(ball.x, ball.y, ball.r, ball.r);

	if (ball.x > width || ball.x < 0){
		ball.xspeed = -ball.xspeed;
		// ball.rcol = random(150, 255);
		// ball.bcol = random(0,50);
		// ball.gcol = random(5,10);
	}
	if (ball.y > height || ball.y < 0){
		ball.yspeed = -ball.yspeed;
		// ball.rcol = random(10, 25);
		// ball.bcol = random(150,255);
		// ball.gcol = random(50,100);
	}

}