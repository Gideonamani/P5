var canvas;

function setup() {
	canvas = createCanvas(400,400);
	//WHERE all the magic happens
	canvas.drop(gotFile, canvBorder);
	background(0);



	//noCanvas();
}

// function draw() {
// 	background(200);
// 	rect(40,40,350,350)
// }

function addDOclass () {
	drag_box.removeClass("drag_box");
	drag_box.addClass("drag_hover");

	var dragpar = select("#dragpar");
	dragpar.style("background-color", "white");
}

function retainClass () {
	drag_box.removeClass("drag_hover");
	drag_box.addClass("drag_box");

	var dragpar = select("#dragpar");
	dragpar.style("background-color", "#c3b3c3");
}

function addClass2 () {
	//drag_box.removeClass("drag_box");
	drag_box.removeClass("drag_hover");
	drag_box.addClass("drag_box2");
}

function canvBorder () {
	canvas.addClass("canvborder");
}

function gotFile(file) {
	if (file.type == 'image'){
		var div = createDiv("");
		div.addClass("box");

		im = createImg(file.data);
		//im.hide();
		p1 = createP("The name of the file is " + file.name);
		p2 = createP("of size " + file.size/1024 + "KB");
		p3 = createP("with the type " + file.type);
		im.parent(div); p1.parent(div); p2.parent(div); p3.parent(div);
	}else {
		console.log("That ain't a valid image file pal..")
	}

	image(im, 0, 0, height, width);
}
