// Friday 11 March 2022

let t = 0.01;

function setup() {
    createCanvas(600, 600);
    stroke(255, 100);
    noFill();
    rectMode(CENTER);
}


function draw() {
    background(0);

    // rect(mouseX, mouseY, 10, 10);

    let sizeX = width*(noise(t));
    let sizeY = height*cos(t);

    for (let i=1; i >= 0.1; i-= 0.05){
        rect(width/2, height/2, sizeX*i, sizeY*i);
    }



    push();
    translate(width/2, height/2);
    line(-sizeX*0.075, -sizeY*0.075, -sizeX/2, -sizeY/2);
    line(-sizeX*0.075, sizeY*0.075, -sizeX/2, sizeY/2);
    line(sizeX*0.075, -sizeY*0.075, sizeX/2, -sizeY/2);
    line(sizeX*0.075, sizeY*0.075, sizeX/2, sizeY/2);
    pop();

    t += 0.01;
}