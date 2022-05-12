// Thursday 12 May
let count = 300; 
let ballList = [];
let margin = 50;
let absVal = 60;

function setup() {
    createCanvas(600, 600);

    for (let i=0; i < count ; i++) {
        ballList[i] =new Ball (random(margin,width-margin), random(margin,height-margin), createVector(random(-1.0, 1.0), random(-1.0, 1.0)));
    }

    
}

function draw() {
    background(0);

    for (let i=0; i <count; i++) {
        let b = ballList[i];
        b.display();
        b.move();

        for (let j=1; j <count; j++) {
            let b2 = ballList[j];

            if ((abs(b.x - b2.x) < absVal ) &&  (abs(b.y - b2.y) < absVal ) ) {
                stroke("#eb3437");
                line(b.x, b.y, b2.x, b2.y);
            } 
        }
    }
}



class Ball {
    constructor(x, y, speed) {
        this.x=x;
        this.y=y;
        this.speed=speed;
        this.xoffset=0;
        this.yoffset=0;
  
    }
    

    display() {
        fill(255);
        ellipse(this.x, this.y, 5,5);
    }


    move() {


        this.x += this.speed.x;
        this.y += this.speed.y;


        if (this.x > width) {
            this.x =0
        }
        if (this.x <=0 ) {
            this.x = width
        }
        if (this.y > height) {
            this.y = 0
        }
        if (this.y <=0) {
            this.y = height
        }
    }
}