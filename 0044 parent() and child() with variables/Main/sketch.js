function setup() {
	for (i = 0; i < 4; i++) {
		p = createP("This is a link: ");
		p.style("padding", "10px");
		p.style("margin-top", "5px");
		p.style("background-color", "#f411c3");

		//var a = createA("google.com", "Open up Google!");
		var a = createA("#", "Link to add fruit.");
		a.parent(p);
		a.mousePressed(addImg);
	}

	createCanvas(400,400);
	noCanvas();
}

function draw() {
	background(200);
	rect(40,40,350,350);
}

function addImg () {
	var img = createImg("images/image1.jpg");
	par = this.parent()
	img.parent(par);
}