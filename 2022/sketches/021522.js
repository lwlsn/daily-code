// Tuesday 15th February 

// More valentines themed art

let t = 0.1;

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(0);
    
    let scale = abs(1.25*sin(t)) ;
    stroke(255, 0, 0, 180); strokeWeight(4);
    // noFill();
    fill(255, 0, 0, 180);
    glow(color(252, 3, 232), 40);
    heart(width/2, height/2 -100, 500);


    stroke(252, 3, 232);
    textSize(22*scale);
    textAlign(CENTER);
    text("THERE ARE 6 MILLION BILLIONAIRES IN THE UK", width/2, height/2);
    text("THAT HOLD AS MUCH WEALTH AS 12 MILLION PEOPLE", width/2, height/2 +50);

    t += 0.01;
}

function heart(x,y,size) {
    beginShape();
    vertex(x,y);
    bezierVertex(x+size/3, y-(size/5), x+size/3, y+(size/3), x, y+(size/2));
    bezierVertex(x-size/3, y+(size/3), x-size/3, y-(size/5), x, y);
    endShape(CLOSE);

}



function glow( glowColour, blurriness){
    drawingContext.shadowBlur = blurriness;
    drawingContext.shadowColor = glowColour; 

}