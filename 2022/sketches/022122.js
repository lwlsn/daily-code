// Monday 21 February 
// sooo tired ... 

let hearts = [];
let sizes = [];
let num = 200;

function setup() {
    createCanvas(600, 600);
   

    for (let i=0; i < num; i++) {
        hearts[i] = new Heart(random(width), random(height), random(100));
    }



}

function draw() {

    background(0);

    fill(255,0,0,100);
    stroke(255, 0, 0);

    for (let i=0; i < num; i++) {
        // hearts[i] = new Heart(random(width), random(height), random(100));
        hearts[i].display();
        hearts[i].move();
    }

}



class Heart {
    constructor(x,y, size){
        this.x = x;
        this.y= y;
        this.size = size;
    }

    display() {
    beginShape();
    vertex(this.x,this.y);
    bezierVertex(this.x+this.size/3, this.y-(this.size/5), this.x+this.size/3, this.y+(this.size/3), this.x, this.y+(this.size/2));
    bezierVertex(this.x-this.size/3, this.y+(this.size/3), this.x-this.size/3, this.y-(this.size/5), this.x, this.y);
    endShape(CLOSE);
    }


    move() {
        this.y += 2*sin(random(1));
        if (this.y > height) {
            this.y= 0;
        }

        this.x += pow(-1,floor(random(2))) *sin(random (1))/2;

        if (this.x > width) {
            this.x= 0;
        }
        if (this.x < 0) {
            this.x = width;
        }
    
    }    
}