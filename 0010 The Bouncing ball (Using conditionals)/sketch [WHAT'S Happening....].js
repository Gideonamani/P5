var ellipseX = 0;
var ellipseY = 200;

var bg = 156;
var par;

function setup (){
	createCanvas(800,500);
	// background(226);

	par=createP("Move the mouse on the canvas to draw stuff. ")
}


//This is a draw loops which goes over and over.
function draw (){

	background(bg);
	noStroke();

	//ellipse1
	fill(100,200,180);
	ellipse(mouseX+50,mouseY+50,24,12);

	//ellipse2
	fill(200,80,90);
	ellipse(ellipseX,ellipseY,40,40);

	if (ellipseX > width){
		ellipseX = -ellipseX;
	}

	ellipseX += 4;
	//ellipseY += 4;



}

function mousePressed(){
	bg = random(0,200);
	ellipseX = 0;
}