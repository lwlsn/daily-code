// Wednesday 5th December.
// I want it to snow...  


let f=0; 

function setup() {
    createCanvas(600, 600);
    noStroke();
}


function draw() {
    background(0, 100);


    for (let i=0; i < 8; i++) {
        for (let k=0; k < 128; k++ ) {
            fill(32*i);
            let x = noise(i, k, 0);
            let y = noise(k, i, 16);
            let r = noise(32, i, k);
            let z;

            x = fract(x*8);
            y = fract(y*8);
            r = fract(r*8);

            z=(f*(1+y)+1200*noise(i,256,k))%height;

            circle(width*x, z, floor(random(2+4*r)));
        }
    }

    f++;


}