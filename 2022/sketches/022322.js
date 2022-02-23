//Wed 23 

// Random walks https://happycoding.io/tutorials/p5js/random

let x, y, r,g,b;
let increment =5;

function setup() {
    createCanvas(600, 600);
    x = width/2;
    y = height/2;
    r=0, g=0, b=0;

    background(0);
    strokeWeight(6);

}

function draw() {


    let randomVal = random(); // choice a new random value each frame

    // Increment or decrement
    if(randomVal < .25){
        x-= increment;
      }
      else if(randomVal < .5){
        x+= increment;
      }
      else if(randomVal < .75){
        y-= increment;
      }
      else{
        y+= increment;
      }
      
      // Reset at a boundary
      if(x < 0){
        x = width;
      }
      else if(x > width){
        x = 0;
      }
      
      if(y < 0){
        y = height;
      }
      else if(y > height){
        y = 0;
      }
      
    // randomly change color
    r += random(-1, 1);
    g += random(-1, 1);
    b += random(-1, 1);
  
     // don't let values go outside 0-255 range
    r = constrain(r, 100, 255);
    g = constrain(g, 100, 255);
    b = constrain(b, 100, 255);

  
    stroke(r, g, b);

    point(x, y);
}