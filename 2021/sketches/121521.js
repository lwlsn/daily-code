// Wednesday 15th December 
// It's still raining outside and accuweather said it wouldn't 

let t, theta;
let maxFrameCount = 200;
let jitter;

let r = [50, 100, 150, 200];
let jvals = [3, 7, 10];

function setup() {
    createCanvas(600, 600);
    noStroke();
}


function draw() {
    background("#2B4570");

    translate(width/2, height/2); // translate 0,0 to center
    t = frameCount/maxFrameCount;
    theta = TWO_PI*t;

    if (second() % 10 === 0) {
        jitter = random(0, 4);
    }


    for (let i = 0; i <= TWO_PI; i+= TWO_PI/3) {
        fill("#D4E8ED");
        ellipse(r[0]*cos(theta+i+jitter), r[0]*sin(theta+i+jitter), 50, 50);
    }
   
    for (let i = 0; i <= TWO_PI; i+= TWO_PI/7) {
        fill("#9AC9D5");
        ellipse(r[1]*cos(theta+i+jitter), r[1]*sin(theta+i+jitter), 50, 50);
    }

    for (let i = 0; i <= TWO_PI; i+= TWO_PI/10) {
        fill("#4899AD");
        ellipse(r[2]*cos(theta+i+ jitter), r[2]*sin(theta+i+jitter), 50, 50);
    }

    for (let i = 0; i <= TWO_PI; i+= TWO_PI/19) {
        fill("#2A5965");
        ellipse(r[3]*cos(theta+i+ jitter), r[3]*sin(theta+i+jitter), 50, 50);
    }
  
  


}