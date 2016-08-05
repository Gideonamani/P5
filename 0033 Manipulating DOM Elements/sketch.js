var cnv;
var h1;
var h2;
var par;
var countpar;

var x=40;

var x1 = 100;
var y1 = 190;

var r = 30;
var b =150;

var startcountdown = false;
var countdown = 1000;

function setup() {
	cnv = createCanvas(400,400);
	cnv.position(50, 100);

	h1 = createElement('h1', "Today's weather is beautiful!!");
	h2 = createElement('h2', "Waiting.... for you to click on the page")
}

function draw() {
	clear();
	//background(200);

	fill(150,130,200);
	
	if (x > width){
		x = -40;
	}
	rect(x,40,30,30)

	x++;

	showPurpleRectangle ();

	if(startcountdown && countdown > 0){
		countdown --;
	}

	if (countdown < 15){
		moveRect();
	}

	if(countpar){countpar.html(countdown);}

}


function mousePressed () {
	h2.html("Something amazing is about to happen.");
	par = createP("");
	startcountdown = true;
	countpar = createP();
}

function moveRect () {
	x1 += random(-4,4);

	r = random(0,45);
	b = random(50, 250);
}

function showPurpleRectangle () {
	fill(200, r, b);
	rect(x1, y1+x1, 90, 90);

	if(par){
	par.position(x1, y1-100);

		if(countdown < 60){
		par.html("NOOOOW!!!");	
		}
		else if(countdown < 500){
		par.html("Just messing, wait a bit longer...");	
		}
		else if(countdown < 750){
		par.html("Did you really buy that? :P");	
		}
	}
}