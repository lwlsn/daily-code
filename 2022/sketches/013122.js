// Monday 31 January 

function setup() {
    createCanvas(600, 600, WEBGL);
    noStroke();
}


function draw() {
    background(0);


    let locX = sin(frameCount*0.01)*600 - height / 2;
    let locY = sin(frameCount*0.01)*600 - width / 2;

    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, locX, locY, 100);
    specularMaterial(250); 

    translate(-200, -100, 0);
    push();
        rotateX(frameCount*0.01);
        rotateZ(frameCount*0.01);
        torus(60, 20);
    pop();

    translate(200, 0, 0);
    push();
        rotateY(frameCount*0.01);
        rotateZ(frameCount*0.01);
        torus(60, 20);
    pop();

    translate(200, 0, 0);
    push();
        rotateX(frameCount*0.01);
        rotateZ(frameCount*0.01);
        torus(60, 20);
    pop();


    translate(-200*2, 200, 0);
    push();
        rotateY(frameCount*0.025);
        rotateZ(frameCount*0.025);
        torus(60, 20);
    pop();

    translate(200, 0, 0);
    push();
        rotateX(frameCount*0.025);
        rotateZ(frameCount*0.025);
        torus(60, 20);
    pop();

    translate(200, 0, 0);
    push();
        rotateY(frameCount*0.025);
        rotateZ(frameCount*0.025);
        torus(60, 20);
    pop();


}