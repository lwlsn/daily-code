// Thursday 6th Jan 
// 100 days left of my phd :S 


let numSquares = 100;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    colorMode(HSB);
    noFill();
    frameRate(15);
}


function draw () {
    background(0);

    for (let i =0; i <= width; i+= 50 ) {
        for (let j=0; j <= height; j+= 30) {

            let r = noise(32, i, j);
            let scaler = random(2);
           

            stroke(255);
            push();
            
            rect(i, j, floor(r*200)*scaler, floor(r*200)*scaler);
            pop();
        }
       
    }

}