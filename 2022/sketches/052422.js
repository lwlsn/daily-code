// Tuesday 24th (ish)

let triangleLen = 20;
let triangleSpace = 40;

let margin=50;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0, 20);

    let invert  = frameCount%200;
    let invertS = map(sin(invert/10), -1, 1, -mouseX/20, mouseX/20);
    let invertC = map(cos(invert/10), -1, 1, -mouseY/20, mouseY/20);

    fill(255, 50);
   
    for (let i=margin; i < width-margin; i += triangleLen+3/2*triangleSpace  ) {
        for (let j= margin ; j <= height-margin; j += 2*triangleLen +3/2* triangleSpace) {
            triangle(i, j, i+triangleLen/2, j+(invertS), i+triangleLen, j);
        }
      
    
    }


    for (let i=margin+triangleSpace; i < width-margin; i+= triangleLen+3/2*triangleSpace ) {

        for (let j= margin +triangleSpace ; j <=height-margin; j += 2*triangleLen +3/2* triangleSpace) {
         
            triangle(i, j, i+triangleLen/2, j+(invertC),i+triangleLen, j);
        }
         
    }
 

}