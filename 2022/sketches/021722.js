// Thursday 17th Feb

// In Windsor, stuck in a hotel room.. 

let spacingX = 20, spacingY = 50; 
let r1, r2;


function setup() {
    createCanvas(600, 600);

    rectMode(CENTER);


}


function draw() {
    background(0);
    grid();
    axes();



}



function grid() {
    stroke(255, 10);
    strokeWeight(2);

    for (let i=0; i <height; i+= spacingX) {
        for (let j=0; j< width; j+= spacingY) {
            line(i,0, i, width);
            line(0, j, width, j);
        }
       
    }

    

    for (let i=4; i <= width; i+= 8) {
        for (let j= 4; j <= height; j+= 8) {
            

            r1 = floor(random(5)); 
            r2 = floor(random(1000));
            if ( r1/r2 >= 0.5 ) {
                fill(255, 0,0, 150)
            }
            else {
                fill(255, 150);
            }

            
            rect(i,j, 5,5);

        
        }
    }
}

function axes() {
    stroke(255, 0, 0, 150);
    strokeWeight(4);

    // let scaleY = (mouseY, 0, height, ) 

    line(0, mouseY, width, mouseY);
    line(mouseX, 0, mouseX, height);

    text("PosX:" + mouseX/width, mouseX, mouseY);
    text("PosY:" + mouseY/height, mouseX, mouseY+10);
    
}