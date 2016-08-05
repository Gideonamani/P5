

function setup() {
	drag_box = select("#drag_box");

	drag_box.dragOver(addDOclass);
	drag_box.dragLeave(retainClass);

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
	createImg(file.data);
}