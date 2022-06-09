// Thurs 9 June

let theta, power;
let margin=50;

function setup() {
    createCanvas(600, 600);

    theta=random(2000)
    power=100
}

function draw() {
    background(0);
    noFill();
    stroke(255);
    for (let y=margin; y<height-3*margin; y+=50 ) {
        // theta= resetter;
        beginShape();

        for(let x=0; x<width; x+=0.5){
            
            curveVertex(x, y+ noise(theta)*power) 
            theta+=0.05;
            
    }
    endShape()

    }

}