

function setup() {
	drag_box = select("#drag_box");

	drag_box.dragOver(addDOclass);
	drag_box.dragLeave(retainClass);

	//WHERE all the magic happens
	drag_box.drop(gotFile, addClass2);


	createCanvas(400,400);
	noCanvas();
}

function draw() {
	background(200);
	rect(40,40,350,350)
}

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

function gotFile(file) {
	if (file.type == 'image'){
		var div = createDiv("");
		div.addClass("box");

		im = createImg(file.data);
		p1 = createP("The name of the file is " + file.name);
		p2 = createP("of size " + file.size/1024 + "KB");
		p3 = createP("with the type " + file.type);
		im.parent(div); p1.parent(div); p2.parent(div); p3.parent(div);
	}else {
		console.log("That ain't a valid image file pal..")
	}
}
