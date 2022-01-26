// Wednesday 26th January 

// Weird convergent behaviour ! 

let squarePos = [];
let squareSizes = [];

let count = 200;
let speed = 1;

let isDecreasing;

function setup() {
    createCanvas(600,600);
    noFill();
    stroke(255);
    rectMode(CENTER);

    for (let i=0; i < count; i++) {
        squarePos[i] = createVector(random(width), random(height));
        squareSizes[i] = random(10, 50); 
    }


}


function draw() {
    background(0);

    for (let i=0; i < count; i++ ) {
        rect(squarePos[i].x, squarePos[i].y, squareSizes[i], squareSizes[i]  );
        squareSizes[i]+= speed;

        if (squareSizes[i] > 250) {
            speed *= -1;
        }

        if (squareSizes[i] < 10) {
            speed *= -1;
        }

        // if (squareSizes[i] < 10) {
        //     squareSizes[i]++;
        // }

    }


}