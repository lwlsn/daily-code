// Thurs 3 March 

let rotations = [];

let topColour = [238, 100, 82]; 

let bottomColour = [8, 178, 227];

function setup() {
    createCanvas(600, 600, WEBGL);
    noStroke();

    for (let i=0; i < 6; i++) {
        rotations[i] = [random(1000, 5000), random(1000,5000), random(1000,5000)];

    }


}

function draw() {
    background(0);


    translate(-240, -200, 0);
    push();
    rotateIndividual(rotations[0][0],  rotations[0][1], rotations[0][2]);
    create3DCone(topColour, bottomColour, 40, 100, 20, 20);
    pop();


        
    translate(240, 0, 0);
    push();
    rotateIndividual(rotations[1][0],  rotations[1][1], rotations[1][2]);
    create3DCone(topColour, bottomColour, 40, 100, 20, 20);
    pop();

    translate(240, 0, 0);
    push();
    rotateIndividual(rotations[1][0],  rotations[1][1], rotations[1][2]);
    create3DCone(topColour, bottomColour, 40, 100, 20, 20);
    pop();

 

    translate(-240 * 2, 200, 0);
    push();
    rotateIndividual(rotations[3][0],  rotations[3][1], rotations[3][2]);
    create3DCone(topColour, bottomColour, 40, 100, 20, 20);
    pop();


    translate(240 , 0, 0);
    push();
    rotateIndividual(rotations[4][0],  rotations[4][1], rotations[4][2]);
    create3DCone(topColour, bottomColour, 40, 100, 20, 20);
    pop();

    translate(240 , 0, 0);
    push();
    rotateIndividual(rotations[5][0],  rotations[5][1], rotations[5][2]);
    create3DCone(topColour, bottomColour, 40, 100, 20, 20);
    pop();


    translate(-240 * 2, 200, 0);
    push();
    rotateIndividual(rotations[3][0],  rotations[3][1], rotations[3][2]);
    create3DCone(topColour, bottomColour, 40, 100, 20, 20);
    pop();

    translate(240 , 0, 0);
    push();
    rotateIndividual(rotations[4][0],  rotations[4][1], rotations[4][2]);
    create3DCone(topColour, bottomColour, 40, 100, 20, 20);
    pop();

    translate(240 , 0, 0);
    push();
    rotateIndividual(rotations[5][0],  rotations[5][1], rotations[5][2]);
    create3DCone(topColour, bottomColour, 40, 100, 20, 20);
    pop();


}


function create3DCone(col1, col2, xpos, ypos) {
    shininess(20);
    ambientLight(50);
    specularColor(col1[0], col1[1], col1[2]);
    pointLight(col1[0], col1[1], col1[2], 0, xpos-50, ypos-20);
    specularColor(col2[0], col2[1], col2[2]);
    pointLight(col2[0], col2[1], col2[2], 0, xpos,ypos-20);
    specularMaterial(255);

    cone(xpos, ypos);



}

function rotateIndividual(i1, i2, i3) {
    rotateX(millis()/i1);
    rotateY(millis()/i2);
    rotateZ(millis() / i3);

}

function hexToRgb() {
    hex = hex.replace('#', '');

    var bigint = parseInt(hex, 16);

    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return color(r, g, b);
}