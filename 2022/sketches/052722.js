// Friday 27 May 
// breakdown ensues

let t1=0, t2=0;
let theta1 = 0;
let theta2 = 0;

let pow1, pow2;

let fracs = [1/8, 1/4, 1/2, 1/3, 2/3];

function setup() {
    createCanvas(600, 600);
    noFill();
    angleMode(RADIANS);
    background(0);

    pow1 = random(fracs);
    pow2 = random(fracs);

    frameRate(60);
}


function draw() {


    stroke(255, 100);
    ellipse(width/2+t1, height/2+t2, 50, 50);


    t1 = pow(width, pow1%0.999)*sin(theta1);
    t2 = pow(height, pow2%0.999)*cos(theta2);

    
    theta1 ++;
    theta2 ++;

    pow1 += (1/8);
    pow2 += (1/8);

    if (frameCount%1000 == 0) {
        setup();
    }


    print([pow1%1, pow2%1])

}

