// Tuesday 21st December 

// Had my vaccine, slept all day

// Background elements
let raindrops = [];
let rainspeeds = [];
let numRaindrops = 40;

let clouds = []
let numClouds = 10 ; 

// procedural(ish) terrain
let noisescale = 0.02;



function setup() {
    createCanvas(600, 600);
    textAlign(CENTER, TOP);
    noStroke();

    // Raindrop setup
    for (let i=0; i < numRaindrops; i++) {
        raindrops[i] = new Raindrop(random(width), random(0, height/2));
        rainspeeds[i] = random(1, 4);
    }

    // Cloud setup 

    for (let i=0; i < numClouds; i++) {
        clouds[i] = new Cloud(random(width), random(width), random(height/4));
    }


}


function draw() {
    background("#b7eff7");

    // Draw sun 
    sun(width-100, 50, 100);


    // Draw Raindrops
    for (let i=0; i < numRaindrops; i++) {
        raindrops[i].show();
        raindrops[i].update(rainspeeds[i]);
    }

    // Draw Clouds 
    for (let i=0; i < numClouds; i++) {
        clouds[i].animate();
    }

    //  Draw terrain 
   for (let x=0; x < width; x++ ) {
       let noiseVal = noise((100+x)*noisescale ,  (100)*noisescale);
       stroke("#14342B");
       line(x, 500+noiseVal*80, x, height);
       noStroke();

   }

   // Draw.. 
   textSize(200);
   fill(0,0,0, 255);
   text("🐿", width/2, 400);


   

}



class Raindrop {
    constructor(xpos, ypos) {
        this.x = xpos;
        this.y = ypos;
    }

    show() {
        push();
        translate(this.x, this.y);
        textSize(18);
        text("💧", 0, 0);
        pop();
    }

    update(speed) {

        this.y += speed;

        if (this.y > height) {
            this.y =0; 
        }

    }

    
}


function sun(x, y, size) {
    push();
    translate(x, y);
    textSize(size);
    text("🌞", 0, 0);
    pop();

}


class Cloud {

   constructor(leftX, rightX, height) {
       this.lx = leftX;
       this.rx = rightX;
       this.h = height;
   }  
     

   animate() {

    fill(255, 255, 255, 220); // white
    // left cloud
     ellipse(this.lx, this.h, 126, 97);
    fill(255, 255, 255, 250); // white
    ellipse(this.lx+62, this.h, 70, 60);
    fill(255, 255, 255, 220); // white
    ellipse(this.lx-62, this.h, 70, 60);
    
    // right cloud
    ellipse(this.rx, this.h, 126, 97);
    fill(255, 255, 255, 250); // white
    ellipse(this.rx+62, this.h, 70, 60);
    fill(255, 255, 255, 220); // white
    ellipse(this.rx-62, this.h, 70, 60);
  

    // Cloud animation
    this.lx -= 1; // or leftX --
    this.rx += 1; // or rightX ++


    if ( (this.lx-62) <= 0) {
        this.lx = width;   
      }
      
      
      // Move right cloud to the other side of the screen if it reaches the edge 
      if ( (this.lx-62) >= width) {
        this.lx = 0;
      }
      

  }
}


