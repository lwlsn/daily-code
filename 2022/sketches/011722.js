// Monday 17th January 
let t;
let radius = 250;

function setup() {
    createCanvas(600, 600);
    background(0, 200);
    stroke(255);
    noFill();
    t=0;
}


function draw() {


    let x1 = radius*(sin(2*t));
    let x2 = radius*(sin(4*t));
    let x3 = radius*(sin(t/2));
    let x4 = radius*(sin(t/4));
    let y1 = radius*(cos(2*t));
    let y2 = radius*(cos(4*t));
    let y3 = radius*(cos(t/2));
    let y4 = radius*(cos(t/4));

    translate(width/2, height/2);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    t += 0.05;

    // Reset on modulo frame count.. 
    if (frameCount % 200 == 0) {
        background(0, 180);
    }
}