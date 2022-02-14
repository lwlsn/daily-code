// Monday 14th Feb 

let hearts = [];

let rX, gX, bX, rY, gY, bY;

let t = 0.1;

function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 100);

}

function draw() {

    background(0);

    noFill();
    strokeWeight(2); 

    glow(color(200, 158, 91, 100), 12);
 
    rX = (width*sin(t))%100;
    gX = width*sin(t)%200;
    bX = width*sin(t)%255;

    rY = height*cos(t)%100;
    gY = height*cos(t)%180;
    bY = height*cos(t)%255;



    for (let i=20; i <= width; i+= 50) {
        for (let j= 20; j <= height; j+= 50) {
            stroke(rX,gX,bX);
            heart(i, j, 20);
            stroke(rY, gY, bY);
            heart(i, j-10, 40);
        }
       
    }

    t += 0.1;


}


function heart(x, y, size) {

    beginShape();
    vertex(x,y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
}


function glow( glowColour, blurriness){
    drawingContext.shadowBlur = blurriness;
    drawingContext.shadowColor = glowColour; 

}