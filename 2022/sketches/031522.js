// Tuesday 15th March 
let DIM = 12;

let t = 0.01; 

function setup() {
    createCanvas(600, 600, WEBGL);
    noFill();
    stroke(255,0,0);
}

function draw() {
    background(0);

    
    rotateY(t);
    rotateZ(t);

    for (let i=0; i < DIM; i++) {
        for (let j=0; j < DIM; j++) {
            for (let k=0; k < DIM; k++) {
                let x = map(i, 0, DIM, -width/2, width/2);
                let y = map(j, 0, DIM, -height/2, height/2);
                let z = map(k, 0, DIM, -100, 100);

                point(x, y,z);
                circle(x, y,z);
            }
        
        }
    }


    t += 0.01;
}