// Wednesday 12th January 

// Like writing the date in your schoolbook every day

let polygons = [];
let size = 80;

function setup() {
    createCanvas(600, 600);

    background(0);


    
    noFill();

    for (let i = 0; i < size; i++) {
        stroke(random(255), random(200, 255), random(200, 255));
        polygons[i] = polygon(random(width), random(height), random(20), random(5,10));
    }

}


function draw() {

} 


function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    strokeWeight(1);
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);

    }
    endShape(CLOSE);
    strokeWeight(2);
    beginShape();
    for (let b = 0; b < TWO_PI; b += angle) {
    let sx2 = x + cos(b)*radius*1.5;
    let sy2 = y + sin(b) * radius*1.5;
    vertex(sx2, sy2);
    }
    endShape(CLOSE);
  }
  

