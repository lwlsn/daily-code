// Tuesday 22 March 22
// Twos day 

let l1, l2;

let t = 0;
let incr = 0;


function setup() {
    createCanvas(600, 600, WEBGL);

    l1 = new Line();
    l2 = new Line();

    l1.calculateLines();
    l2.calculateLines();

    smooth();
    // colorMode(HSB);

   
}

function draw() {
    background(0);
    l1.display();
    l2.display();

    t += 0.0001;
    incr += 0.03;

}



class Line {
    constructor() {
        // this.t = 0;
        this.r = [];
        this.showLines = false;

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

    calculateLines() {
        for (let i=0; i < 4; i++) {
            this.r[i] = noise(50) + 50;
        }
    }


    display() {
        ortho();
        push();
    
            scale(1.5); strokeWeight(2);
            noStroke();
    
            for (let i=0; i < 44; i++ ) {
                push();
                rotateX(sin(t/1000-i)*4);
                rotateY(sin(t/1000-i)*4);
                rotateZ(sin(t/1000-i)*4);
                fill("#FF3562");

                if (random(1000)>700) fill("#693668");
                if (random(100)>99) {
                    rotateX(random(1)*0.05);
                    rotateY(random(1)* 0.05);
                    rotateZ(random(1)* 0.05);
                }
                if (random(100)>99&&random(100)>90) {
                    shearX(random(1));
                    shearY(random(1));
                }
                if (random(100) > 90 && random(100)>90) {
                    this.showLines = !this.showLines;
                  }
                if (this.showLines) stroke(20);
                
             
                translate(this.x1(t+i), this.y1(t+i)); 
                sphere(noise(t/1000-i)*10);
                box(10, 10, noise(t/1000-i)*200);
                translate(this.x2(t+i), this.y2(t+i));
                box(2, 2, noise(t/9000-i)*100);

                sphere(noise(t/9000-i)*50);
                pop();
            }
          
        pop();

    }

   
}