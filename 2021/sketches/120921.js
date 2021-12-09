// Thursday 9 December 
// based on .. https://github.com/sasj/Daily-Art-Processing/blob/master/sketch_161008/sketch_161008.pde

let t, theta;
let space = 25; /* space for the triangles */
let numb = 4; /* number of shapes */
let maxFrameCount = 200; /* how fast is goes */
let radius = 120; /* radius of the start (outer) circle */

let mx, my;

function setup() {
  createCanvas(600, 600);
  
  mx = width/2;
  my = height/2;
}

function draw() {
  background("#2E4756");
  translate(mx,my);
  
  t = frameCount/maxFrameCount;
  theta = TWO_PI*t;
  rotate(HALF_PI*3);
  
  frameRate(120);
  
  let scale = (t%0.5)+1;
  // print(scale);


  
  for (let i = 0; i < 360; i += 5) {
    let angle = radians(i);
    let x =  (cos(angle) * radius*1.5);
    let y =  (sin(angle) * radius*1.5);
   
    noFill();
    shape(x,y, HALF_PI+(radians(i)));
  
  }

// /* middle ring */
  for (let i = 0; i < 360; i += 8) {
    let angle = radians(i);
    let x =  (cos(angle) * radius);
    let y =  (sin(angle) * radius);
   
    shape(x,y,HALF_PI+(radians(i)));
  }

// /* inner ring */
  for (let i = 0; i < 360; i += 10) {
    let angle = radians(i);
    let x =  (cos(angle) * radius/2);
    let y =  (sin(angle) * radius/2);
   
    shape(x,y,HALF_PI+(radians(i)));
  }
  
}


function shape(xpos, ypos, a) {

  push()
  translate(xpos, ypos);
  rotate(a);
    
  for ( let x= -25; x <= 26; x += 50) {
      for (let y= -25; y <= 26; y += 50) {

        for (let i=0; i<=numb-1; i++) {

          let offSet = (TWO_PI/numb*i)+(a*3); 
          let offSet2 = offSet*2; 
          let pos1 = map(cos(-theta+offSet), -1, 1, -50, 50);

          /* modulo for two colors */
          if (i % 2 == 0) {
          fill("#71B1C1");
          } 
          else{
          fill("#DBC2CF");
          }
    
          triangle(0-space,0,0,0+pos1,0+space,0);      
      }
    }
  }
    
  
  pop()
  
  
}