// Wednesday 9th March 

let t=0, size=0;

function setup() {
    createCanvas(600,600, WEBGL);
    
    // colorMode(HSB);
    smooth();
}

function draw() {
    background(0);
    sticks();


    t++;

    
}



function x(t) {
    return sin(t / 50) + sin(t) * width/3; 
}
  
function y( t) {
    return cos(t/ 50) * height/3; 
}


function sticks() {

    for (let i = 0; i < 21; i ++) {
        // size = noise(t/100-(i/50)) * 1500;
        size += 0.01;
        push();
        rotateX(sin(t / 190-(i/90))* 2);
        rotateY(sin(t / 200-(i/100))* 2);
        rotateZ(cos(t / 210-(i/70))* 2);
        stroke(sin(t/10)*20+130-(i/10), 255, 255);
        translate(x(t+i), y(t+i));
        box(1, 1, size);
        pop();
      }
      if (size > 700) size = 0;


}