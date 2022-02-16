// Wednesday 16th Feb

let spacingX = 20, spacingY = 50; 

let squarePos = [];
let squareSizes = [];

let count = 50;
let speed = 1;

let isDecreasing;

function setup() {
    createCanvas(600, 600);

    rectMode(CENTER);

    for (let i=0; i < count; i++) {
        squarePos[i] = createVector(random(width), random(height));
        squareSizes[i] = random(10, 50); 
    }



}


function draw() {
    background(0);
    grid();

   

    // ANIMATION
    noFill();
    stroke(255);
    strokeWeight(2);

    for (let i=0; i < count; i++ ) {
        rect(squarePos[i].x, squarePos[i].y, squareSizes[i], squareSizes[i]  );
        squareSizes[i]+= speed;

        if (squareSizes[i] > 100) {

            isDecreasing = true;
        }

        if (squareSizes[i] < 10) {
            isDecreasing = false;
        }

    }


    switcher();



}


function switcher() {
    if (isDecreasing) {
        speed *= -1;
    }

    else {
        speed *= 1; 
    }
}

function grid() {
    stroke(255, 10);
    strokeWeight(2);

    for (let i=0; i <height; i+= spacingX) {
        for (let j=0; j< width; j+= spacingY) {
            line(i,0, i, width);
            line(0, j, width, j);
        }
       
    }

    for (let i=4; i <= width; i+= 8) {
        for (let j= 4; j <= height; j+= 8) {
            fill(255, 150);
            rect(i,j, 5,5);
        }
    }
}