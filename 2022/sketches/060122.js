// Wed 1 June 
// May's all gone :(

let rInc=0, aInc=0, boxSize, tex;  

function preload() {
    tex = loadImage('assets/cracks.png');
}


function setup() {
    createCanvas(600, 600, WEBGL);
    boxSize = width < height ? width / 10 : height / 10;
    noStroke();
}

function draw() {
    background(0);
    orbitControl(1, 1, 0);
    pointLight(255, 255, 255, 0, -500, 500);
    ambientLight(130);
    rotateY(rInc / 10);
    translate(-2 * boxSize, -2 * boxSize, -2 * boxSize);

    let bw =0, vCount = 0;
    for (z=0; z<5; z++) {
        bw++;
        for (y=0; y<5; y++) {
            bw++;
            for (x=0; x<5; x++) {
                if (vCount%2 != 0) {

                    xx = abs(sin(x * (PI / 5) + aInc));
                    yy = abs(sin(y * (PI / 5) + aInc));
                    zz = abs(sin(z * (PI / 5) + aInc));

                    if (x === 5) xx = 0;
                    if (y === 5) yy = 0;
                    if (z === 5) zz = 0;


                    // Avoid near zero scale flickering
                    xx = xx < 0.02 ? xx = 0.02 : xx;
                    yy = yy < 0.02 ? yy = 0.02 : yy;
                    zz = zz < 0.02 ? zz = 0.02 : zz;

                  //  Draw 

                    push();

                    let whiteCol = [0, 255][bw++ % 2];
                    fill(255,whiteCol,whiteCol);

                    translate(x * boxSize, y * boxSize, z * boxSize);

                    /** Scale Variations */
                    scale(xx,yy,zz);

                    /** Box Variations */
                    box(xx * boxSize, yy * boxSize, zz * boxSize);

                    scale(1, 1 / yy, 1)
                    translate(0, (boxSize * 10) - y * (boxSize * 2), 0)
                    fill(xx * 255 - (5 - y) * 20 - 110,
							 xx * whiteCol - (5 - y) * 20 - 110,
							 xx * whiteCol - (5 - y) * 20 - 110);
                    box(xx * boxSize, yy * boxSize, zz * boxSize);
                    pop();

                }

                vCount ++;
            }
        }



    // FLOOR Element with Alpha mask
    push();
	texture(tex);
	ambientLight(66);
	rotateX(-HALF_PI);
	translate(-boxSize*3, -boxSize*7, boxSize*5);
	rect(0, 0, boxSize*10);
    pop();

    aInc += 0.02;
    rInc += 0.025;
    }

}