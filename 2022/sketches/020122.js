// Tuesday 1 Feb

// 3 dimension animations with boxes.!

function setup() {
    createCanvas(600, 600, WEBGL);
    noStroke();
}

function draw() {
    background(0);

    // Lighting and Material
    let locX = sin(frameCount*0.01)*600 - height / 2;
    let locY = cos(frameCount*0.01)*600 - width / 2;

    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, locX, locY, 100);
    specularMaterial(250); 

    // Animation
    rotateY(frameCount * 0.01);

    for (let j = 0; j < 10; j++) {
        push();
        for (let i=0; i< 50; i++) {
            translate(
                sin(frameCount*0.02+ j)*50,
                cos(frameCount*0.02+j)*50,
                i*0.01 
            );
            rotateZ(frameCount * 0.005);
            push();
            box(5,5, 5);
            pop();
        }
        
        pop();
    }

}