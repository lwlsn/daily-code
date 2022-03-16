// Wednesday 16th 
let DIM = 4;
let t = 0.01;

let size = 200;
let isIncreasing=true, increment=0; 

function setup() {
    createCanvas(600, 600, WEBGL);
}

function draw() {
    background(0);

    noStroke();
    fill(255);





    for (let i=0; i <= DIM; i++) {
        for (let j =0; j <= DIM; j++) {
            for (let k = 0; k<= DIM; k++) {

                rotateX(t/210);
                rotateY(t/200);
                // rotateX(noise(t / 190-(i/90))* 2);
                // rotateY(sin(t / 200-(i/100))* 2);
                rotateZ(cos(t / 210 - (i/80))* 10);

                let x1 = map(i, 0, DIM, -size, size);
                let y1 = map(j, 0, DIM, -size, size);
                let z1 = map(k, 0, DIM, -size, size);

                let x2 = map(i, 1, DIM+1, -size, size);
                let y2 = map(j, 1, DIM+1, -size, size);
                let z2 = map(k, 1, DIM+1, -size, size);

                if (increment%100 > 50) {
                    isIncreasing = false;
                }
                else {
                    isIncreasing = true; 
                }
            
                if (isIncreasing) {
                    size += 0.01;
                }
               
                else {
                    size -= 0.01;
                } 

                push();
                translate(x1,y1,z1);
                stroke(255);
                strokeWeight(2);
                line(x1, y1, z1, x2,y2,z2);
                box(5,5);
                line()
                pop();
               
            }
       
        } 
        

        
    }
    

    increment ++;


    t += 0.01;
}