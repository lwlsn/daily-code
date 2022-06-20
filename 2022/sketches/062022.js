// Mon 20 June 

let xspace =0, yspace=0;

let randArray = [];

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    // frameRate(20);
    colorMode(RGB);

    for (let i=0; i< 1000; i++) {
        randArray[i] = round(random(255));
    }
    print(randArray);
}

function draw() {
    background(0,60);


    for (let x=0; x <width; x+=random(10,50)) {
        for (let y=0; y <height; y+= random(10,50)) {
            fill(randArray[round(x+y/width)], round(x), round(y));
            // print(x);
            rect(x+xspace, y+yspace, 10, 10);
        } 

    }    
   

    xspace=map(mouseX, 0, width, -20, 20);
    yspace=map(mouseY, 0, height, -20, 20);
}