// Friday 10th December 2021

let mx, my; 

let snowflakes = [];
let sizes = [];

let numSnowflakes = 30;

let t = 60;


function setup() {
  createCanvas(600, 600);
  frameRate(t);
  
  mx = width/2; 
  my = height/2;
  
  for(let i = 0; i < numSnowflakes; i++) {
    snowflakes[i] = new p5.Vector(random(width), random(height));
    sizes[i] = floor(random(100));
  }
  

  
}

function draw() {
  background("#A1C6EA");
  


  for (let i =0; i < numSnowflakes; i++) {
    drawSnowflake(snowflakes[i].x, snowflakes[i].y, sizes[i]);
  }
  
  if (frameCount%t == 1) {
     for(let i = 0; i < numSnowflakes; i++) {
        snowflakes[i] = new p5.Vector(random(width), random(height));
        sizes[i] = floor(random(100));
    }
  }
  
  
}



function drawSnowflake(mx, my, size) {
  
    let r1 = size;
    let r2 = r1/10;

   for (let theta = 0; theta <= TWO_PI ; theta += TWO_PI/12) {
    stroke(255);
    strokeWeight(5);
    let rx = mx+ r1*sin(theta);
    let ry = my +r1*cos(theta);
    line(mx, my, rx, ry); 
    line(rx, ry, rx +r2*sin(PI/3), ry+r2*cos(PI/3));
    push();
    translate(rx, ry);
        line(0, 0, r2*sin(PI/6), r2*cos(PI/6) );
        line(0, 0, r2*sin(-PI/6), r2*cos(PI/6) );
    pop();
  }
}