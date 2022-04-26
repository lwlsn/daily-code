// Tuesday 26 APril

// Back on my bullshite

let t =0;


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0,10);


    for (let i=20; i < width; i += 80) {
        for (let j=60; j < height; j+= 80) {
            push();
            translate(i,j);
            rotate(t*(i*j));
            stroke(255);
            fill(255,100);
            triangle(0, 0, 20, -40, 40, 0);
            pop();
        }
       
    }


    t += 0.01;
    // print(t);
}