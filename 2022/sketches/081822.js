// Thursday 18 August 
// 

let drops = [], numdrops= 60;

let backgroundImg;

function preload() {
    backgroundImg=loadImage('assets/koi.jpeg');
}


function setup() {
    createCanvas(600, 600);

    for (let i=0; i <numdrops; i++ ) {
        drops[i] = new Droplet(random(width), random(height));
    }
}



function draw() {
 
 
    image(backgroundImg, 0, 0, width, height) 
    // background(0);

    for (let i=0; i <numdrops; i++ ) {
        drops[i].spawn();
        drops[i].animate();
    }
}


class Droplet {
    constructor(x,y) {
        this.x=x; 
        this.y=y;
        this.size = random(4);
        this.speed = random(0.5,1.5);
        this.damp = 100;
    }

    spawn() {
        noFill();
        stroke(255,this.damp);
        ellipse(this.x, this.y, this.size, this.size);
    }

    respawn() {
        this.size = random(2,4);
        this.x = random(width);
        this.y = random(height);
        this.damp = 100;
    }

    animate(){ 
        

        if (this.size > 2 && this.size <= 50) {
            this.size += this.speed; 
            this.damp -= 2;
        }
       

        if (this.size > 50) {
            this.respawn();
        }   
    }
}