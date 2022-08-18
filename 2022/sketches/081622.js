// Tues 16 August 

let particles = [];

function setup() {
    
    createCanvas(600, 600);


}

function draw() {
    background(0);


    for (let i=0; i < 5; i++) {
        let p = new Particle();
        particles.push(p);
    }

    for (let i=particles.length-1 ; i >= 0 ; i-- ) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            // remove this particle
            particles.splice(i, 1);
        }
    }

}

class Particle {
    constructor() {
        this.x=random(200, 300);
        this.y=0;
        this.vx=random(-1, 1);
        this.vy=random(1, 5);
        this.alpha=255;
    }

    finished(){
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 2; 
    }


    show() {
        noStroke();
        fill(255, this.alpha);
        ellipse(this.x, this.y, 16);
    }
}