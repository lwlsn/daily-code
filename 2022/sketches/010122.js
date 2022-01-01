
// Saturday 1 Jan 
// v hungover 


function setup() {
  createCanvas(600, 600);
  
  frameRate(15);

}

function draw() {



background(0);

  for (let i=0; i < width; i += random(100)) {
    for (let j=0; j< height; j+= 100) {
      createLines(i, j, random(20), random(10), 100);
    }
    
  }
 

}

function createLines(xLoc, yLoc, numLines, spacing, sizeOf) {

  let num = numLines*spacing;

  // print(num);

  for (let i=0; i < num; i += spacing ) {
    stroke(255);
    strokeWeight(random(3));
    line(xLoc + i, yLoc , xLoc+ i, yLoc +  sizeOf );
  }
}