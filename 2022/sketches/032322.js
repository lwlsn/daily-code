// Wednesday 23 March

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
    colorMode(HSB);



   
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

    calculateLines() {
        for (let i=0; i < 4; i++) {
            this.r[i] = noise(50) + 50;
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
        // ortho();
        push();
    
            scale(1.5); strokeWeight(2);
            noFill();
    
            for (let i=0; i < 40; i++ ) {
                push();
                rotateX(noise(t/1000-i)*8);
                rotateY(noise(t/1000-i)*4);
                rotateZ(noise(t/1000-i)*4);
                stroke("#709775");

                if (random(1000)>700) stroke("#696D7D");
                if (random(100)>99) {
                    rotateX(random(1)*0.05);
                    rotateY(random(1)* 0.05);
                    rotateZ(random(1)* 0.05);
                }
              
                if (noise(100) >90) {
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