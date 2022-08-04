// Wednesday 3 March 


let charArray = ['^_< -☆', '˙ᵕ˙', 'ᖭི༏ᖫྀ' , ' ', '❀', '♡', ' ', '𓍯'];

let margin = 50;
let spaceX = 25, spaceY = 20;

function setup() {
    createCanvas(600, 600);
    rectMode(CENTER);
    textAlign(CENTER);

   
    frameRate(12);
 

}

function draw() {

    background(0);

    stroke(255, 100);
    noFill();
    rect(width/2, height/2, width-margin, height-margin); 

    for (let x=margin; x<=width-margin; x += spaceX) {
        for (let y=margin; y <= height-margin; y+= spaceY){
         
               text(random(charArray), x, random(height));
        }
     
    }

  

}


