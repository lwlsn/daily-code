// Thursday 19 May

let charArray = ['^_< -β', 'π','ππΌππΌπ', 'Λα΅Λ', 'α­ΰ½²ΰΌα«ΰΎ' , ' ', 'β', 'β‘', ' ', 'π―'];

let margin = 50;
let spaceX = 25, spaceY = 20;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    textAlign(CENTER);

    background(0);

    stroke(255, 100);
    noFill();
    rect(width/2, height/2, width-margin, height-margin); 

    for (let x=margin; x<=width-margin; x += spaceX) {
        for (let y=margin; y <= height-margin; y+= spaceY){
            text(random(charArray), x, y);
        }
     
    }

}

function draw() {

    if (frameCount % 100 == 0) {
        setup();
    }

}

