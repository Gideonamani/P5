var par;

function setup (){
	createCanvas(400,500);
	background(226);

	par=createP("Move the mouse on the canvas to draw stuff. "+
		"Click  on the canvas to reset the background.")
}


//This is a draw loops which goes over and over.
function draw (){

	//background(156);
	noStroke();

	//ellipse1
	fill(100,200,180);
	ellipse(mouseX+50,mouseY+50,24,12);

	//rectangle
	fill(100,130,230,200);
	rect(50,50,150,150);

	//ellipse2
	fill(10,200,80);
	ellipse(mouseX,mouseY,24,12);

}

function mousePressed(){
	background(random(0,255),random(0,255),100)
}