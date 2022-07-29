// Friday 29 July

// ayy im back 

let large, small, counter, mx, my; 

function setup() {
    createCanvas(600, 600);
    large = 64; // largest size of square
    small = 4; // smallest size of square
    counter=0;
    stroke(255);
    noFill();
}

function draw() {
    background(0);
    counter += 0.02; mx=mouseX*0.001; my=mouseY*0.001;
    for (let j=0; j < height; j+= large) {
        for (let i=0; i < width; i += large) {
            drawRect(i, j, large);
        }
    }

}

function drawRect(x, y, size) {

    let cx = x + size/2; // centre x co-ord
    let cy = y + size/2; // centre y co-ord

    let n = noise(cx/width-mx, cy/height-my, mag(cx, cy)/height-counter);
    let thresh = map(size, large, small, 0.18, 0.05);

    if (abs(n-0.5)>thresh) {
        rect(x, y, size, size);
    }
    else {
        size=size/2;
        if (size>=small) { // smallest size of a square = 4pixels
              drawRect(x     , y     , size);
              drawRect(x+size, y     , size);
              drawRect(x     , y+size, size);
              drawRect(x+size, y+size, size);
        }
    }
    
    
}