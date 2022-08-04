// to do: Monday 
// https://www.youtube.com/watch?v=ZI1dmHv3MeM
// continue tomorrow 

let phase=0;

function setup() {
    createCanvas(600, 600);
    slider = createSlider(5, 10, 0, 0.1);

}


function draw() {
    background(0);
   
    let min= 100, max = 200
    let space = 20, num=6;


    for (let i=0; i < num; i++) {
        noiseLoop(min +i*space, max+i*space);
    }



    phase += 0.01;
}



function noiseLoop(min, max) {

    push();
    translate(width/2, height/2);
    stroke(255);
    noFill();
    beginShape();

    let noiseMax = slider.value();
    for (let a=0; a < TWO_PI; a+= 0.1) {
        let xoff = map(cos(a+phase), -1, 1, 0, noiseMax);
        let yoff = map(sin(a+phase), -1, 1, 0, noiseMax);
        let r = map(noise(xoff, yoff), 0, 1, min, max);
        let x= r*cos(a);
        let y= r*sin(a);

        
        vertex(x,y);
        

    } 
    endShape(CLOSE);

    pop();

}