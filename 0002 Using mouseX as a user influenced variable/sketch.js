

function setup (){
	createCanvas(400,500);
}


//This is a draw loops which goes over and over.
function draw (){
	background(156);
	noStroke();

	//ellipse1
	fill(100,200,180);
	ellipse(50,50,24,12);

	//rectangle
	fill(10,30,230,40);
	rect(50,50,100,60);

	//ellipse2
	fill(10,200,80);
	ellipse(mouseX,mouseY,24,12);
}