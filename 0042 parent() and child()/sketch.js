var count = 0;
var max_p = 20;

function setup() {
	canvas = createCanvas(400,400);
	canvas.parent("#parent");
}

function draw() {
	background(200);
	rect(40,40,320,320)

	ellipse(200, 200, random(100), random(88));


	if (count < max_p) {
		make_a_p();
	}else {
		count = max_p;
	}
	count++;
}

var make_a_p = function () {
	li = createElement("li", "This is a random paragraph");
	//li.position(random(600), random(800));
	li.parent("list");
	li.mousePressed(makeChildren);

	//TRY THIS OUT!
	// li.mouseOver(makeChildren);
	// li.mouseOut(removeChildren);
}

function makeChildren () {
	//WANTED to check for   'li.hasChildren()' but don't know how.
	if (true) {
		var ul = createElement("ul", "This is a sub-parent!");
		var li1 = createElement("li", "This is a child!");
		var li2 = createElement("li", "This is the 2nd child");
		this.style("background-color", "red");
		this.child(ul);
		li1.parent(ul);
		ul.child(li2);
	}
}

// function removeChildren () {
// 	var ul = createElement("ul", "This is a sub-parent!");
// 	var li1 = createElement("li", "This is a child!");
// 	var li2 = createElement("li", "This is the 2nd child");
// 	this.style("background-color", "#fff");
// 	// this.child(ul);
// 	// li1.parent(ul);
// 	// ul.child(li2);
// }