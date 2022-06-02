// Thurs 2 June
// Jubilee holiday blues 

let size = 10, margin=20;


function setup() {
    createCanvas(600, 600);
    noFill();
    frameRate(10);
}

function draw() {
    background(0);
    stroke(255);

   

   let ra; 

    for (let i=margin; i< width-margin; i+= 15) {
        for (let j=margin; j< height-margin; j+= 15) {
            ra = (random(2));
            push();
            translate(i,j);
            rotate(PI/4);
            if (ra > 0.1) {
                rect(0, 0, 10, 10);
            }
            pop();
        }
      
    }


 
}