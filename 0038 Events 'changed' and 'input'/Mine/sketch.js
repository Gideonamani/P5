var text_input1;
var text_input2;
var slider1;
var slider2;
var par1;
var par2;


function setup () {
	createCanvas(400,400);
	noCanvas();
	createP("Here we see how the CHANGED method works...");
	par1 = createP('starting text for changed');
	slider1 = createSlider(10, 84, 64);
	text_input1 = createInput('This is for changed.');

	createP("Here we see how the INPUT method works...");
	par2 = createP('starting text for input');
	slider2 = createSlider(10, 84, 64);
	text_input2 = createInput('This is for input.');

	text_input1.changed(action1);
	text_input2.input(action2);

	slider1.changed(updateFontSize1);
	slider2.input(updateFontSize2);
}

function draw () {
	background(10,99,255);

	//par.size(slider.value());
}

function action1 () {
	par1.html(text_input1.value());
}

function action2 () {
	par2.html(text_input2.value());
}

function updateFontSize1 () {
	par1.style("font-size", slider1.value() + "pt");
}
function updateFontSize2 () {
	par2.style("font-size", slider2.value() + "pt");
}