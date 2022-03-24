// Thursday 24 March 


let l;


function setup() {
    createCanvas(600,600, WEBGL);
    l = new Shaper(random(width), random(height));
    l.randomPlacement();
}

function draw() {
    background(2);
    l.display();


    if (frameCount %100 == 0) {
        setup();
    }

}


class Shaper {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.r = [];
        this.t =0;
    }

    randomPlacement() {
        for (let i=0; i < 4; i++) {
            this.r[i] = noise(50) + random(50);
        }
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
        this.t += 0.01;

        push();
            // ortho();
            scale(1.5); 
            noFill();
            push();
            for (let i=0; i < 104; i++ ) {
                push();
                rotateX(sin(this.t/1000-i)*8);
                rotateY(cos(this.t/1000-i)*4);
                rotateZ(sin(this.t/1000-i)*4);
                // stroke("#709775");
                let from = color(97, 112, 125);
                let to = color(170, 62, 152);
                stroke(lerpColor(from, to, i/144));
                translate(this.x1(this.t+i), this.y1(this.t+i)); 
                box(10, 10, noise(this.t/1000-i)*200);
            }

            pop();
        pop();    
    }
}