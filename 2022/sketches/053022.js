// Monday 30 May
// all over the place 

let rectSize = [];
let margin = 50;

function setup() {
    createCanvas(600, 600, WEBGL);
    rectMode(CENTER);
    // noFill();

    calculateSizes();

    // print(rectSize);
}

function draw() {
    background(255);
    push();
    fill(255);
    stroke(0);
    rect(0, 0, width, height);
    fill(0);
    rect(0, 0, width-margin, height-margin);
    pop();
    noFill();
    rotateZ(millis() / 2000);


    stroke(255); 
    strokeWeight(2);
   

    for (let i=-150; i < 150; i+= 50) {
        for (let j = -150; j< 150; j+=50) {
            push();
            // translate(width / 2, height / 2);
            rotate(PI / 4.0);
            let iP = map(i, -150, 150, 0, 6);
            let jP = map(j, -150, 150, 0, 6)
            rect(i, j,rectSize[iP*jP], rectSize[iP*jP]);
           
            pop();
        }
        
    }

    if (frameCount%100 == 0) {
        calculateSizes();
    }

    
  
}

function calculateSizes() {
    for (let i =0; i <36; i++) {
        rectSize[i] = random(50,100);
    }
}