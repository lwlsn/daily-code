// Tuesday 19th April


let kMax;
let step = [];
let n = 80; // number of blobs
let radius = 0; // diameter of the circle
let inter = 0.1; // difference between the sizes of two blobs
let maxNoise = [];

let noiseProg = (x) => (x);

function setup() {
    createCanvas(600, 600);
    angleMode(RADIANS);
    kMax = random(0.6, 1.0);
    // step = 0.01;
    noStroke();

    for (let i=0; i<6; i++) {
        maxNoise[i] = random(150, 250);
        step[i] = random(0.1);
    }
}

function draw() {

    background(0);
    // blendMode(SOFT_LIGHT);

    let t = frameCount/100;

    for (let i = n; i > 0; i--) {
		let alpha = pow(1 - noiseProg(i / n), 3);
		let size = radius + i * inter;
		let k = kMax * sqrt(i/n);

    
        for (let y = 50; y < height; y += 150) {
            for (let x = 150; x < width; x += 150) {
                let noisiness = maxNoise[(y-50)/150] * noiseProg(i / n);
                fill((100+x)/5, (122+y)/5, 163, alpha*255);
                blob(size, x, y, k, t - i * step[(y-50)/150], noisiness);
            }
        } 
  
    }


    if (frameCount%100 == 0) setup();
}


function blob(size, xCenter, yCenter, k, t, noiseV) {
    beginShape();
    let angleStep = TWO_PI/12;
    for (let theta=0; theta <= TWO_PI + 2*angleStep; theta += angleStep ) {
        let r1, r2;
        r1 = cos(theta)+1;
        r2 = sin(theta)+1;
        let r = size + noise(k*r1, k*r2, t)*noiseV;
        let x = xCenter + r*cos(theta);
        let y = yCenter + r*sin(theta);
        curveVertex(x,y);
    }
    endShape();

}