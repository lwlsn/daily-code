// Friday 18th March 
let l1, l2;

let t = 0;

function setup() {
    createCanvas(600, 600, WEBGL);

    l1 = new Line();
    l2 = new Line();

    smooth();
    colorMode(HSB);

    background(0);
}

function draw() {


    l1.display();

    t += 0.001;


    if (frameCount %20 == 0) {
        background(0);
    }


}


class Line {
    constructor() {
        // this.t = 0;
        this.r = [];
    }



    x1(t) {
        return sin(t/this.r[0]) * (this.r[0]+this.r[1]); 

    }

    y1(t) {
        return cos(t / this.r[1]) * (this.r[2]+this.r[3]); 
    }

    x2(t) {
        return sin(t/this.r[2]) * (this.r[0]+this.r[1]); 
    }

    y2(t) {
        return cos(t / this.r[3]) * (this.r[2]+this.r[3]); 
    }


    display() {
        ortho();
        push();
    

        for (let i=0; i < 4; i++) {
            this.r[i] = random(50) + 50;
        }
            scale(1.5); strokeWeight(2);
            noFill();
    
            for (let i=0; i < 44; i++ ) {
                push();
                rotateX(sin(t/1000-i)*4);
                rotateY(sin(t/1000-i)*4);
                rotateZ(sin(t/1000-i)*4);
                stroke(255-(i/8)-50 % 255, 255, 255);

                if (random(1000)>999) stroke(255);
                if (random(100)>99) {
                    rotateX(random(1)*0.05);
                    rotateY(random(1)* 0.05);
                    rotateZ(random(1)* 0.05);
                }
                if (random(100)>99&&random(100)>90) {
                    shearX(random(1));
                    shearY(random(1));
                }
                translate(this.x1(t+i), this.y1(t+i)); 
                box(10, 10, noise(t/1000-i)*200);
                translate(this.x2(t+i), this.y2(t+i));
                box(2, 2, noise(t/9000-i)*100);
                pop();
            }
          
        pop();

    }

   
}