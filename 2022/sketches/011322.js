// Thursday 13th January 

// ??

let snow = [];
let totalParticles = 500;


function setup() {
    createCanvas(600, 600);

    for (let i=0; i < totalParticles; i++) {
        snow[i] = new Particle(random(width), random(height), random(0.5,5));
    }

}


function draw() {
    background(0);

    for (let i=0; i < totalParticles; i++) {
        snow[i].show();
        snow[i].move();
    }
}

class Particle {

    constructor(x, y,r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.theta = 0;
        this.speed = random(2);
    }


    show() {
        circle(this.x, this.y, this.r);

        if (this.x> width ) {
            this.x = 0;
        }

        if (this.x < 0) {
            this.x = width;
        }

        if (this.y> height) {
            this.y = 0;
        }

        if (this.y < 0) {
            this.y = height;
        }
    }


    move() {


        this.x += sin(this.speed*this.theta) - noise((1/2)*this.theta);
        this.y += cos(this.speed*this.theta) + noise((1/4)*this.theta);

        this.theta += 0.02;
        // print(this.theta);

        this.x ++;
    }

}