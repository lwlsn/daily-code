// Monday 13 December 2021
// Brownian Tree Snowflakes 

let current;
let snowflake = [];

function setup() {
  createCanvas(600, 600);
  
  current = new Particle(width/2, 0);
  
}

function draw() {
  
  background(0);
  translate(width / 2, height / 2);
  rotate(PI / 6);


  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  console.log(count);

  // If a particle doesn't move at all we're done
  if (count == 0) {
    noLoop();
    console.log('snowflake completed');
  }

  snowflake.push(current);
  current = new Particle(width / 2, 0);

  for (let i = 0; i < 6; i++) {
    rotate(PI / 3);
    current.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }

  
  
}

 




class Particle {
    constructor(radius, angle) {
      this.pos = p5.Vector.fromAngle(angle);
      this.pos.mult(radius);
      this.r = 3;
    }
  
    update() {
      this.pos.x -= 1;
      this.pos.y += random(-3, 3);
  
      let angle = this.pos.heading();
      angle = constrain(angle, 0, PI / 6);
      let magnitude = this.pos.mag();
      this.pos = p5.Vector.fromAngle(angle);
      this.pos.setMag(magnitude);
    }
  
    show() {
      fill(255);
      stroke(255);
      ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
  
    intersects(snowflake) {
      let result = false;
      for (let s of snowflake) {
        let d = dist(s.pos.x, s.pos.y, this.pos.x, this.pos.y);
        if (d < this.r * 2) {
          result = true;
          break;
        }
      }
      return result;
    }
  
    finished() {
      return this.pos.x < 1;
    }
  }
  