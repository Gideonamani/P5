//Using parameters and arguments while making a function to  give us modularity.
//Call the face function with the x-position and y position of the topleft corner and the width of it.


function setup() {
	createCanvas(412,400)
}

function draw() {
	background(200);
	
	face(100, 100, 200);

	for(i=0; i<width; i+= 60){
		face(i,20, 50);
	}

}

function face(x, y, width) {
	//face outline
	rect(x, y, width, width);


	//eyes
	eyewidth =  4/20*width;

	//Right eye
	startx1 = 2/20 * width +  x;
	starty1 = 4/20 * width +  y;

	pupilx1 = (startx1+eyewidth/2);
	pupily1 = (starty1+eyewidth/2);

	rect(startx1, starty1, eyewidth, eyewidth);
	ellipse(pupilx1, pupily1, eyewidth*3/5);
	// fill(20, 200);
	ellipse(pupilx1, pupily1, eyewidth*1/9);

	//Left eye
	startx2 = 14/20 * width +  x;
	starty2 = 4/20 * width +  y;

	pupilx2 = (startx2+eyewidth/2);
	pupily2 = (starty2+eyewidth/2);

	rect(startx2, starty2, eyewidth, eyewidth);
	ellipse(pupilx2, pupily2, eyewidth*3/5);
	// fill(20, 200);
	ellipse(pupilx2, pupily2, eyewidth*1/9);


	//nose
	triangle(x+width/2, y+width/2, x+width/2-width/20, y+width/2+width/20, x+width/2+width/20, y+width/2+width/20)


	//mouth
	arc(x+width/2, y+width/2+width/5, 3/5*width, 2/5*width, 0, PI, OPEN);
	
}