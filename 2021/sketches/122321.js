// Thursday 23 December 
// Working from home already chaotic..

let x1 =0, x2=0;

let rightOffset = 10;

let spacingArray = [ 10, 20];
let spacing;

let leftLineSizes = [];
let rightLineSizes = [];


function setup() {

    createCanvas(600, 600);

    spacing = random(spacingArray);

    let numLines = height/spacing;


    for (let i=0; i < numLines ; i++) {
        leftLineSizes[i] = floor(random(1,5));

    }   

    for (let j=0; j <= numLines*2+1; j++) {
        rightLineSizes[j] = floor(random(1,5));
    }



}


function draw() {
    background(0);

    if (floor(millis() % 20) == 1 ){
        print("switch");
        spacing = random(spacingArray);
    }
   

    // left matrix 

    for (let i=0; i < height; i += spacing) {
        stroke(255);
        strokeWeight(leftLineSizes[i/spacing]);
        line(0, x1+i, width/2, x1+i);
    }
    x1 += 2;

    if (x1 >= spacing) {
        x1 = 0;
    }

    // right matrix 

    for (let j=rightOffset; j < height; j+= spacing) {
        stroke(255);
        strokeWeight(rightLineSizes[j/rightOffset]);
        line(width/2, x2+j, width, x2+j );
    }

    x2 += 2;

    if (x2 >= 10) {
        x2 = -10;
    }

}