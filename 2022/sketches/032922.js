// Tuesday 29 March
let unit=11;
let count=33;

let mods = []; 

function setup() {
    createCanvas(600, 600, WEBGL);
    noStroke();


    colorMode(HSB);
  
    for (let i=0; i <count; i++) {
        mods[i] = new Module();
    }


}

function draw() {
    background(0);



    for (let i=0; i <count; i++) {
        mods[i].display();
    }

}


class Module {
    constructor() {
        this.x=0;
        this.y=0;
        this.t=0;
        this.r1 = random(300);
        this.r2 = random(320);
        this.r3 = random(300);
        this.r4 = random(300);
    }

    display() {
        push();
    
            fill( 255);
            if (random(100)>99)fill(255);
            rotateY(noise(frameCount*PI*0.001+(this.r3*0.009))*(this.r1*0.004));
            rect(this.x, this.y, 120, 10);
            this.x = sin(this.t / this.r4) * this.r1 + cos(this.t / this.r1) * this.r2 + sin(this.t / this.r2) * this.r3;
            this.y = cos(this.t / this.r3) * this.r2 + sin(this.t/ this.r3) * this.r3 + cos(this.t / this.r4) * this.r4;
        pop();
        this.t += noise(frameCount*PI*0.004) * 2;
    }
}