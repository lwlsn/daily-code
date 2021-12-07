// Tues 7 December 2021

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  
  strokeWeight(1);
  stroke(255);

  for (let i=0; i <= width; i+= 5) {
    line(i, 0, height/2, height);   
    line(width/2, 0, i, height);
  }
  
  for (let j=0; j <= height; j += 5) {
    line(0,height/2, width,j);
    line(0, j, width, height/2 );
  }  
}
