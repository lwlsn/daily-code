// Friday 17th December 
// Got a new phone and internet not working

// Been reading too much hyperobjects


let radius = 20;
let numLines = 200;
let nx = 0, ny = 0;


function setup() {
    createCanvas(600, 600);

}


function draw() {
    background(0);

    stroke(255);
    
    for (let x1 = 0; x1 <= height/2; x1 += 20) {
        line(0, height/2 + x1, x1+20, height);
        line(width, height/2 + x1, width-x1, height);
        line(0, height/2-x1, x1+20, 0);
        line(width, height/2-x1, width-x1, 0);
    }
    

    let angle = 0;
    push(); 
    translate(width/2, height/2);
    for(let i = 0; i < numLines; i++){ 
        stroke(255, 20);
        let x1, x2, y1, y2;
        let randLength = map(noise(nx+i*.1, ny), 0, 1, 10, radius * 20);
        strokeWeight(map(randLength, 0, radius*3, 1, 6));
        x1 = radius * cos(angle);
        y1 = radius * sin(angle);
        x2 = x1 + randLength * cos(angle+PI/2);
        y2 = y1 + randLength * sin(angle+PI/2);
        line(x1, y1, x2, y2);
        angle += TWO_PI/numLines;
    }
    pop();

    nx += 0.05;
    ny += 0.05;
  


    

}