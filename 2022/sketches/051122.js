// Wednesday 11 May

let total= 300, linerange= 30;
let ballList = [];

function setup() {
    createCanvas(600,600);

    for (let i=0; i<total;i++) {
        ballList[i] = new Ball(random(100, width-100),random(100, height-100), random(1.0, 5.0));
    }
}

function draw() {
    background (0) ;


    for (let i=0; i<total;i++) {

        b = ballList[i]
        b.move();
        b.display();


        for (let o=1; o< total; o++ ) {
            b2 = ballList[o];

            if ((abs(b.xPos - b2.xPos) < linerange) && (abs(b.yPos - b2.yPos) < linerange )) {
                stroke(255);
                // stroke(lerpColor ("#f2520a", "#f2520a", random(1)));
                line(b.xPos, b.yPos, b2.xPos, b2.yPos);
            }

        }

    }

}

class Ball {
    constructor(xOffset, yOffset, speed) {
        this.theta=0;
        this.r = 75;
        this.xPos;
        this.yPos;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.speed = speed/200;
        this.clockwise = round(random(2));
    } 

    display() {
        fill ("#eb3437");
        noStroke();
        ellipse(this.xPos, this.yPos, 5, 5);
    }

    move() {
        this.x = this.r*cos(this.theta);
        this.y = this.r*sin(this.theta);
        this.xPos = this.x+ this.xOffset;
        this.yPos = this.y+ this.yOffset;

        if (this.clockWise == 1) {
          this.theta += this.speed;
        } else  {
          this.theta -= this.speed;
        }
    }
    

}