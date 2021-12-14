
// Tuesday 14th December 

let angle = 0.0;
let jitter = 0.0;


function setup() {
    createCanvas(600, 600);
    noStroke();
    frameRate(10);
}


function draw() {
    background(0);

    if (second() % 10 === 0) {
        jitter = random(-0.1, 0.1);
      }
    
    angle = angle + jitter;

    let c = cos(angle);

    for (let i =0; i <= width; i+=20) {
        for (let j=0; j <= height; j+= 20) {
            rotate(c);
            triangle(i,j,i +10, j-10, i+20, j);
        }
        
    }
}