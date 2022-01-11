// Tuesday 11th January 
// Manifest ur dreams


let rad = 0;
let step = 0.02;

let rGen=0, aGen = 0;
let radiusOffset = 0;

function setup() {
    createCanvas(600, 600);
    frameRate(30);

    stroke(255);
    noFill();
    

}

function draw() {

    background(0);

    aGen = cos(rad)*0.15;
    rGen = (cos(rad)*0.2)/aGen;

 
    push();
        translate(width/2, height/2);
        

        radiusOffset -= 1 + rGen;
        for (let i=50; i < 500; i+= 50){
           arc(aGen, aGen , i*rGen, i*rGen, rad%10, (rad+ radiusOffset)%10);


        }
      
    pop();

    rad += step;



}