// Wed 10 August

// Tbc

let char = ['💧'];
let drops = [], numdrops=100;
let randomPX = [];

function setup() {
    createCanvas(600, 600);
 
    for (let i=0; i<numdrops; i++) {
        randomPX[i] = random(-1, 1);
        drops[i] = new Rain(random(200, 400), random(height), random(32, 64), randomPX[i]);
    }

    print(randomPX);
}

function draw() {

    background(0);

    for (let i=0; i < drops.length; i++) {
        drops[i].display();
        drops[i].move();

    }


    // Boundary conditions 
    stroke(255);
    strokeWeight(5);
    line( 200,0, 200, height);
    line(400, 0, 400, height);
}


class Rain {
    constructor(x,y, size, pX){
        this.x=x;
        this.y=y;
        this.size = size;
        this.pX = pX;
    }

    display() {
        textSize(this.size);
        textAlign(CENTER, CENTER);
        text(char[0],this.x, this.y);
    }

    flow() {
        this.y ++;

        if (this.y > height) {
            this.y= random(-100, 0);
        }
    }

    pertubate(pert) {

        let speed = sin(pert);
        let direction = 1;
      
        
        if (this.x < 200) {
            direction *= -1;
        }

        if (this.x > 400) {
            direction *= -1;
        }
    
        this.x += (speed * direction);


    }

    move() {
       this.flow();
       this.pertubate(this.pX);
    }

  
}