//Using loops to access values in the array and utilize

var diameters = [30, 20, 10, 40, 60, 75, 25]

function setup() {
	createCanvas(400,400)

	//Debugging to see if the map function returned the values in desireed order.
	// for (var i = diameters.length - 1; i >= 0; i--) {
	// 	console.log(map(i, 0, diameters.length-1, 0, 255))
	// }
}

function draw() {
	background(20,180,90);
	stroke(200);

	//looping the array forwards
	for (var i = 0; i <= diameters.length-1; i++) {
		fill(map(i, 0, diameters.length-1, 255, 0));
		ellipse(i*50+50, i*50+50, diameters[i]);
	}

	// LOOPING THE ARRAY BACKWARDS
	// for (var i = diameters.length - 1; i >= 0; i--) {
	// 	fill(map(i, 0, diameters.length-1, 255, 0));
	// 	ellipse(i*50+50, i*50+50, diameters[i]);
	// }

}