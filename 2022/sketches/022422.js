// Thurs 24 Feb

// ?? 

let x , y, h,s,b;
let increment =2;
let numWalkers = 10;

function setup() {
    createCanvas(600, 600);
    x = width/2;
    y = height/2;
    h=0, s=0, b=0;

    colorMode(HSB);
    frameRate(120);

  
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
    h += random(-1, 1);
    s += random(-1, 1);
    b += random(-1, 1);
  
     // don't let values go outside 0-255 range
    h = constrain(h, 0, 255);
    s = constrain(s, 200, 255);
    b = constrain(b, 100, 255);

  
    stroke(h, s,  b);

    point(x, y);
}