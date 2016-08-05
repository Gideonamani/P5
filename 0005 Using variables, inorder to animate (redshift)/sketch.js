var ellipseX = 0;
var ellipseY = 0;

var ellipseXd =2;
var ellipseYd = 3;
// var par;

function setup (){
	createCanvas(400,500);
	// background(226);

	// par=createP("Move the mouse on the canvas to draw stuff. "+
	// 	"Click  on the canvas to reset the background.")
}


//This is a draw loops which goes over and over.
function draw (){

	background(156);
	noStroke();

	//ellipse1
	fill(100,200,180);
	ellipse(mouseX+50,mouseY+50,24,12);

	//ellipse2
	fill(200,80,90);
	ellipse(ellipseX,ellipseY,ellipseXd,ellipseYd);

	ellipseX += 4;
	ellipseY += 4;
	ellipseXd += 1;
	ellipseYd += 1;


}

function mousePressed(){
	background(random(0,255),random(0,255),100)
}