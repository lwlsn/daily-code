// Tuesday 18th January 

// Got so much to do but here I am

let x1 = 10, y1= 10;
let size= 20;

function setup() {
    createCanvas(600, 600);
    noFill();
    stroke(255);
    background(0);
}


function draw() {

    let level = size;

    let r = random(1);
    // let n = noise(random(1));
    // print(n);

    if (r < 0.5) {
        stroke(255);
        noFill();
        ellipse(x1, y1, size, size);

    } else {
        noStroke();
        fill(255);
        ellipse(x1, y1, size, size);
    }


    x1 += level; 

    if (x1 >= width){
        x1 = 10;
        y1 += level;
    }

    if (y1 >= height) {
     
        x1 = 10; y1= 10;
        background(0);

    }

}