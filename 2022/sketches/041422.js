// Thursday 14th April

let kMax;
let step;
let n = 80; // number of blobs
let radius = 0; // diameter of the circle
let inter = 0.1; // difference between the sizes of two blobs
let maxNoise = 500;

let noiseProg = (x) => (x);


function setup() {
    createCanvas(600, 600);
    angleMode(RADIANS);
    kMax = random(0.6, 1.0);
    step = 0.01;
    noStroke();
}

function draw() {
    blendMode(DIFFERENCE);
    background(0);
    blendMode(BLEND);


    let t = frameCount/100;


    for (let i = n; i > 0; i--) {
		let alpha = pow(1 - noiseProg(i / n), 3);
		let size = radius + i * inter;
		let k = kMax * sqrt(i/n);
		let noisiness = maxNoise * noiseProg(i / n);

        fill(103, 89, 122, alpha*255);
        blob(size, width/2, height/2, k, t - i * step, noisiness);

        fill(110, 136, 148, alpha*255); 
        blob(size, width/2, height/2,k, t - i * step+1, noisiness );

        fill(133, 186, 161, alpha*255); 
        blob(size, width/2, height/2, k, t - i * step+2, noisiness );
    }


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