//P5JS.Org
//All info on https://p5js.org/reference/#/libraries/p5.dom


//Syntax:
// [] - means not necessary parameter to be added
//
//		create Div, Span, P all take only (html)
//
//		createImg(src,[alt],[successCallback])
//			[successCallback]	Function: callback to be called once image data is loaded.
//
//		createA(href,html,[target])
//			[target] - String: target where new link should open, could be _blank, _self, _parent, _top.
//
//		createSlider(min,max,[value],[step])
//			min	Number: minimum value of the slider
//			max	Number: maximum value of the slider
//			[value]	Number: default value of the slider
//			[step]	Number: step size for each tick of the slider
//
//		createButton(label,[value])
//
//		createCheckbox([label],[value])
//			[label]	String: label displayed after checkbox
//			[value]	Boolean: value of the checkbox; checked is true, 
//												unchecked is false.Unchecked if no value given
// 		createSelect([multiple])
// 			[multiple]	Boolean: [true if dropdown should support multiple selections]
//
// 		createFileInput([callback],[multiple])
// 			[callback]	Function: callback function for when a file loaded
// 			[multiple]	String: optional to allow multiple files selected

// 		createVideo(src,[callback])
// 			src			String|Array: path to a video file, or array of paths for supporting different browsers
// 			[callback]	Object: callback function to be called upon 'canplaythrough' event fire, that is, 
// 			when the browser can play the media, and estimates that enough data has been loaded to play the 
// 			media up to its end without having to stop for further buffering of content

// 		createAudio(src,[callback])
// 			src			String|Array: path to a video file, or array of paths for supporting different browsers
// 			[callback]	Object: callback function to be called upon 'canplaythrough' event fire, that is, 
// 			when the browser can play the media, and estimates that enough data has been loaded to play the 
// 			media up to its end without having to stop for further buffering of content
//
// 		createCapture(type,callback)
// 			type		String|Constant|Object: type of capture, either VIDEO or AUDIO if none specified, default both, or a Constraints object
// 			callback	Function: function to be called once stream has loaded
//
// 		createElement(tag,[content])
// 			tag	String: tag for the new element
// 			[content]	String: html content to be inserted into the element

var bluey;
function setup() {
	createCanvas(400,400)

	//Other create element functions

	// select()
	// selectAll()
	// removeElements()

	//createDiv()
	myDiv = createDiv('this is some DIV text');

	//createP()
	 myP = createP('this is some P text');

	//createSpan()
	mySpan = createSpan('this is some SPAN text');

	//createImg()
	img = createImg('http://p5js.org/img/asterisk-01.png');

	//createA()
	myLink = createA('http://p5js.org/', 'this is a link to p5js.org');

	//createSlider()
	slider = createSlider(0, 255, 100);

	//createButton()
	button = createButton('click me');
	button.mousePressed(changeBG);

	//createCheckbox()
	checkbox = createCheckbox('label is the name of the label', false);

	//createSelect()
	sel = createSelect();
	sel.position(410, 10);
	sel.option('pear');
	sel.option('kiwi');
	sel.option('grape');

	//createRadio()
	radio = createRadio();
	radio.option("black");
	radio.option("white");
	radio.option("gray");
	radio.style('width', '60px');
	textAlign(CENTER);
	fill(255, 0, 0);

	//createInput()
	var inp = createInput('');

	//createFileInput()

	//createVideo()

	//createAudio()

	//createCapture()
	capture = createCapture(VIDEO);

	//createElement()
	element = createElement('h4', "How's the wather today?")


	bluey = 50;
}

function draw() {
	//background(200);

	var val = slider.value();
	var opp = map(val, 0, 255, 255, 0)
	background(val, opp, bluey, 255);


	//background(radioval);
	var radioval = radio.value();
	text(radioval, width/2, height/2);

	rect(40,40,350,350);

	var imagewidth = 40;
	image(capture, 0, 0, imagewidth, imagewidth*capture.height/capture.width);
	filter(INVERT);
}

function changeBG() {
  bluey = 255;
}