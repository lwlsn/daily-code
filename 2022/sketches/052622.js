// Thursday 26 May 

let t1=0, t2=0, t3=0, t4=0;
let theta1 = 0;
let theta2 = 0;

function setup() {
    createCanvas(600, 600);
    noFill();
    angleMode(RADIANS);
    background(0);
}


function draw() {


    stroke(255, 100);
    ellipse(width/2+t1, height/2+t2, 50, 50);
    ellipse(width/2+t3, height/2+t4, 50, 50);


    t1 = pow(width, 1/2)*sin(theta1);
    t2 = pow(height, 2/3)*cos(theta2);

    t3 = width/3*sin(theta1+random(0, 0.5));
    t4 = height/3*cos(theta2 +random(0, 0.5));
    
    theta1 ++;
    theta2 ++;

    if (frameCount%200 == 0) {
        setup();
    }


}

