// Wednesay 3 February 

// Stuck in meetings...

let img;

const maxXChange = 120;
const maxYChange = 5; 
const yNoiseChange = 0.01;
const mouseYNoiseChange = 0.3;
const timeNoiseChange = 0.013;

let inverted = false;


function preload() {
    img = loadImage('assets/blue-valentine.jpeg');
}

function setup() {
    
    frameRate(15);

    createCanvas(600, 600);
    // imageMode(CENTER);
    background(0);
    image(img, 0, 0, width/2+maxXChange, height/2+maxYChange);
	for (let i = 0; i < 100; i++) {
		drawStreak()
	}



     
}

function draw() {


    for (let i = 0; i < 10; i++) { 
		drawStreak()
	}


}

function drawStreak() {
    let y = floor(random(height));
    let h = floor(random(20, 30));

    let xChange = floor(random(0, maxXChange/4));
    let yChange = floor(random(xChange/5));

    image(img, xChange - maxXChange, yChange - maxYChange + y, width-(xChange - maxXChange), h, 0, y, width-(xChange - maxXChange), h);
    if (mouseIsPressed && abs(mouseY - y) < 40) {
		if (!inverted) filter(INVERT);
		inverted = true;
	} else {
		if (inverted) filter(INVERT);
		inverted = false
	}
}