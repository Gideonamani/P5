function setup() {
	createCanvas(140,140)

	createP("This is a p5.js made paragraph.")
	createP("This is a random number btn zero and hundred " + round(random(100)));
	sky1 = createP('This is another The blueeee above');
	sky1.addClass('sky');

	par_horses = select('#horses');
	par_horses.style('background-color', '#F0F');
	par_horses.style('border-radius', '4px');
	par_horses.mousePressed(addTextShadow);

	//paragraph = select('#horses');

	paragraphs = selectAll('.sky');
	for (var i = 0; i < paragraphs.length; i++) {
		paragraphs[i].mouseOver(highlight);
		paragraphs[i].mouseOut(unhighlight);
	}
	// paragraph.mouseOver(highlight);
	// paragraph.mouseOut(unhighlight);

	btn = select('#button');
	btn.mousePressed(canvasBgcol);
	//btn.addClass('sky');

	par = select('p');
	par.style('color', 'blue');

	skies = selectAll('.sky');
	for (var i = 0; i < skies.length; i++) {
		skies[i].style('border', 'solid 2px turquoise');
	}


	//EDIT THIS OUT TO SEE SOME CRAZY SHIT!!!
	// for (var i = 0; i < 100; i++) {
	// 	some = createP('This is a paragraph');
	// 	some.position(random(800), random(800));
	// 	some.mouseOver(highlight);
	// 	some.mouseOut(unhighlight);
	// }
}

function addTextShadow() {
	par_horses.style('text-shadow', 'yellow 2px 3px');
}

function canvasBgcol () {
	background(random(255));
}

function highlight() {
	this.style('padding', '16px');
	this.style('background-color', '#3F1');
}

function unhighlight() {
	this.style('padding', '0');
	this.style('background-color', '#FFF');
}

function draw() {
	//background(200);
	rect(40,40,50,50);
}