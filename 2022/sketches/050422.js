// Wednesday 4 May
// Networks 1 

let count = 30, margin = 50, sw=1, rad=10;

let x = [], y = [], speedX = [], speedY = [];


function setup() {
    createCanvas(600, 600);
    // noLoop();
    rectMode(CENTER);

      // Get node co-ordinates
      for (let i=0; i< count; i++) {
        x[i] = random(margin, width - margin);
        y[i] = random(margin, height-margin);
  
    }
}

function draw() {
    background(2, 20);

    stroke(255, 5);



    for (let i=0; i<count-1; i++) {
        for (let j=0; j< count-1; j++) {
            strokeWeight(sw);
            line(x[i],y[i],x[j],y[j]);
            fill(0);
            rect(x[i],y[i],rad,rad);

            speedX[i] = random(-1, 1);
            speedY[i] = random(-1, 1);
            x[i] += speedX[i];
            y[i] += speedY[i];
        }
    }
}