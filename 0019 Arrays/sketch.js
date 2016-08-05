var cities = ["Dar", "London", "Tokyo", "New York", "Moscow", "Berlin"]

var nums = [100, 25, 12, 72];

var num = 23;

var index = 0;

function setup() {
	createCanvas(400,400)
}

function draw() {
	background(0);

	ellipse(40,40,num,num);

	ellipse(200, 200, nums[3], nums[3]);

	fill(200);
	textSize(30);
	text("Adis", 12, 120);


	//Using the mousePressed function to shuffle through the array.
	text(cities[index], 12, 220);


	//reading out a random content from the array
	var city = random(cities);
	text(city, 112, 320)
}

function mousePressed() {
	index += 1;
	if (index == cities.length){
		index = 0;
	}
}