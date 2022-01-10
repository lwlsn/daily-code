// Monday 10th Jan
// Loops 


let step =0, aStep = 90;
let aOffset = 0;
let segments =  32 ;
let maxRadius = 200;
let theta = 0;
let rGen = 0, rTime = 0;
let aGen = 0, aTime = 0;

function setup() {
    createCanvas(600, 600);
    stroke(255);
    ellipseMode(CENTER);
    noFill();
    strokeWeight(2);

}

function draw() {
    background(0);

    translate(width/2, height/2);

    step = radians(360 / segments);

    rGen = sin(rTime) * 0.2;
    aGen = sin(aTime) * 0.1;
    

    radius = maxRadius * sin(rTime);

    for (let i=0; i < segments; i++) {

        theta += step; 

        let radiusOffset = 300;
        let angleOffset = 0;

        // First point at the centre. 
        let x1 = 0;
        let y1 = 0;

        radiusOffset -= 100 + rGen;
        aOffset += aStep;
        angleOffset += radians(aOffset) + aGen;

        let x2 = (radius - radiusOffset) * cos(theta + angleOffset);
        let y2 = (radius - radiusOffset) * sin(theta + angleOffset);

        radiusOffset -= 200 + rGen;
        aOffset += aStep;
        angleOffset += radians(aOffset) + aGen;

        let x3 = (radius - radiusOffset) * cos(theta + angleOffset);
        let y3 = (radius - radiusOffset) * sin(theta + angleOffset);
        
        radiusOffset -= 0;
        aOffset += aStep;
        angleOffset += radians(aOffset) + aGen;

        let x4 = (radius - radiusOffset) * cos(theta + angleOffset);
        let y4 = (radius - radiusOffset) * sin(theta + angleOffset);

        bezier(x1, y1, x2, y2, x3, y3, x4, y4);
        line(x4,y4, 0, 0);



    }



    rTime += 0.02;
    aTime += 0.01
}