// Monday 22 August
let size = 40;
let strokeV = 100;

let drops = [], numdrops= 60;


function setup() {
    createCanvas(600, 600);

    for (let i=0; i <numdrops; i++ ) {
        drops[i] = new Droplet( randomGaussian(width/2,width/4),  randomGaussian(height/2, height/4), randomGaussian(200, 20));
    }


    colorMode(HSB);
    
}


function draw() {
 

    background(0);

    for (let i=0; i <numdrops; i++ ) {
        drops[i].spawn();
        drops[i].animate();
    }
}


class Droplet {
    constructor(x,y, damp) {
        this.x=x; 
        this.y=y;
        this.size = random(4);
        this.speed = random(0.5,1.5);
        this.damp = 100;
        this.Hue = random(255);
        this.Sat = random(255);
        this.Light = random(255);
    }

    spawn() {
        noFill();
        stroke(this.Hue,this.Sat, this.Light,this.damp/5);
        ellipse(this.x, this.y, this.size, this.size);
        stroke(this.Hue,this.Sat, this.Light,this.damp/4);
        ellipse(this.x, this.y, this.size*3/4);
        stroke(this.Hue,this.Sat, this.Light,this.damp/3);
        ellipse(this.x, this.y, this.size*5/8);
        stroke(this.Hue,this.Sat, this.Light,this.damp/2);
        ellipse(this.x, this.y, this.size*9/16);
        stroke(this.Hue,this.Sat, this.Light, this.damp);
        ellipse(this.x, this.y, 5);
    }

    respawn() {
        this.size = random(2,4);
        this.x = random(width);
        this.y = random(height);
        this.damp = 100;
    }

    animate(){ 
        

        if (this.size >= 0 && this.size <= 50) {
            this.size += this.speed; 
            this.damp -= 2;
        }
       

        if (this.size > 50) {
            this.respawn();
        }   
    }
}