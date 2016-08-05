var par1;
var par2;
var par3;
var par4;
var par5;
var par6;
var par7;
var textInput;
var checkbox1;
var checkbox2;

var x = 50;

var text_td;

var col;

function setup() {
	createCanvas(464,400);

	// for (i=7-1; i < 0 ; i++){
	// 	par+i = createP('This is paragraph no ' + i);
	// 	}

	par1 = createP('This is paragraph No. 1');
	par2 = createP('This is paragraph No. 2');
	par3 = createP('This is paragraph No. 3');
	par4 = createP('This is paragraph No. 4');
	par5 = createP('This is paragraph No. 5');
	par6 = createP('This is paragraph No. 6');
	par7 = createP('This is paragraph No. 7');
	parTest = createP('This is a test');
	parTest2 = createP('This is the second test paragraph');

	textInput = createInput('Type and press enter!');
	checkbox1 = createCheckbox('Click here to do sth', false);
	checkbox2 = createCheckbox('Click here to RESET checkbox1 action', false);

	par1.mousePressed(Action1);
	par2.mouseWheel(Action2);
	par3.mouseReleased(Action3);
	par4.mouseClicked(Action4);
	par5.mouseMoved(Action5);
	par6.mouseOver(Action6);
	par7.mouseOut(Action7);
	checkbox1.changed(Action9);
	checkbox2.changed(Action10);

	text_td = "Interact with the text input & Checkboxes."
	textInput.input(Action11);
	//textInput.changed(Action11);

	col = color(200);
}

function draw() {
	background(col);
	rect(x,40,50,50);

	if(x>width-50-50){
		x=50
	}
	x++;

	//Some text to appear near below.
	Action8();
}

function Action1 () {
	par1.html("The mouse was pressed on me");
}

function Action2 () {
	par2.html("The mouseWheel go moved");
}

function Action3 () {
	par3.html("This action occured as soon as you released the mouse");
}

function Action4 () {
	par4.html("The mouse got clicked on me");
}

function Action5 () {
	par5.html("The mouse was moved on me");
}

function Action6 () {
	par6.html("The mouse flew over me");
}

function Action7 () {
	par7.html("The mouse has left me :( ");
}

function Action8 () {
	textSize(24);
	fill(0, 102, 153);
	text(text_td, 10, 200);
}

function Action9 () {
	if (this.checked()) {
		parTest.html("Boy am I trying to get this to work.!");
	}
	else{
		parTest.html(textInput.value());
	}
}

function Action10 () {
	if (this.checked()){
		text_td = '';
	}else {
		text_td = textInput.value();
	}

	// if (this.checked()) {
	// console.log("Checking!");
	// parTest2.html("Checkbox checked")
	// } else {
	// console.log("Unchecking!");
	// parTest2.html("Checkbox UNchecked")
	// }
}

function Action11() {
	text_td = textInput.value();
	if (!checkbox1.checked()){
		parTest.html(textInput.value());
	}
}


// mousePressed()
// mouseWheel()
// mouseReleased()
// mouseClicked()
// mouseMoved()
// mouseOver()
// changed()
// input()
// mouseOut()
// touchStarted()
// touchMoved()
// touchEnded()
// dragOver()
// dragLeave()
// drop()