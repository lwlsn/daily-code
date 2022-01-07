// Friday 7th January 
// Well this week has gone ~ quickly ~ 

let jellies = [];
let numjellies = 25;
let jellyspeed = [];

let shrimp = []; 
let numShrimp = 100;

function setup() {
   createCanvas(600, 600);
   frameRate(30);


   for (let i=0; i < numjellies; i++) {
       jellies[i] = new Jelly (random(width), random(height));
       jellyspeed[i] = createVector(random(-1, 1), random(-1, 1));
   }

   for (let j=0; j < numShrimp; j++) {
       shrimp[j] = new Shrimp(random(width), random(height));
   }
}


function draw() {
   background(0, 70); 

   for (let i=0; i < numjellies; i++) {
       jellies[i].show();
       jellies[i].move(jellyspeed[i].x, jellyspeed[i].y);
   }

   for (let j=0; j < numShrimp; j++) {
       shrimp[j].show();
       shrimp[j].move();
   }

}



class Jelly {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    bez(a, b, c, d, t) {
        let mx= (a+c)/2;
        let my = (b+d)/2;
        let q1x = (mx+a)/2;
        let q1y = (my+b)/2;
        let q2x = (mx+c)/2;
        let q2y = (my+d)/2;
        let t1x = random(q1x-t, q1x+t);
        let t1y = random(q1y-t, q1y+t);
        let t2x = random(q2x-t, q2x+t);
        let t2y = random(q2y-t, q2y+t);

        bezier(a,b, t1x, t1y, t2x, t2y, c, d);

    }

    show() {
        fill(255, 150);
        noStroke();
        ellipse(this.x, this.y, 50, 25);
        ellipse(this.x, this.y-10, 30, 15);

        for (let xoff = - 50; xoff <= 50; xoff += 25) {
            stroke(random(230, 255), 50);
            this.bez(this.x+xoff/8, this.y, this.x+xoff/2, this.y+random(60, 120), random(8, 10));
        }

        
    }




    move(speedX, speedY) {

        this.x += speedX;
        this.y += speedY;

        if (this.y > height) {
            this.y = 0;
        }

        if (this.y < 0) {
            this.y = height;
        }

        if (this.x > width) {
            this.x = 0;
        }

        if (this.x < 0) {
            this.x = width;
        }

    }
}

class Shrimp {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    show() {
        fill(255,100);
        ellipse(this.x, this.y, 2, 2);
    }

    move() {
        // this.x += 0.25; 
        this.y += 0.25;


        if (this.y > height) {
            this.y = 0;
        }

        if (this.y < 0) {
            this.y = height;
        }

    
    }

}