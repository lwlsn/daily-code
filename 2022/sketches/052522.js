
// Wednesday 25 May 


let triangleLen = 20;
let triangleSpace = 40;

let margin=50;

function setup() {
    createCanvas(600, 600, WEBGL);
    noStroke();
}

function draw() {
    background(0, 220);

    let invert  = frameCount%200;
    let invertS = map(sin(invert/10), -1, 1, -mouseX/200, mouseX/200);
    let invertC = map(cos(invert/10), -1, 1, -mouseY/200, mouseY/200);

    fill(255, 180);

    push();
    rotateX(frameCount * 0.01);
    // rotateZ(frameCount * 0.01);
   
    for (let i=-width/2+ margin; i < width/2-margin; i += triangleLen+3/2*triangleSpace  ) {
        for (let j= -height/2+margin ; j <= height/2-margin; j += 2*triangleLen +3/2* triangleSpace) {

            for (let k= -width/2 + margin; k < width/2 + margin;k += triangleLen+3/2*triangleSpace ) {

                push();
                translate(i,j,k);
                cone(10*invertS,30);
                pop();
            }
        }

    }


    for (let i=-width/2+margin+triangleSpace; i < width/2-margin; i+= triangleLen+3/2*triangleSpace ) {

        for (let j= -height/2+ margin +triangleSpace ; j <=height/2-margin; j += 2*triangleLen +3/2* triangleSpace) {
         
            for (let k= -width/2 + margin +triangleSpace; k < width/2 + margin;k += triangleLen+3/2*triangleSpace ) {
                push();
                translate(i,j,k);
                rotate(180);
                sphere(10*invertC, 30);
                pop();
           
            }
        }
         
    }

    pop();
 

}