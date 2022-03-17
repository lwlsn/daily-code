// Thursday 17th March 

let num = 21; 

let t=0, size=0;

let randArray = [];

function setup() {
   createCanvas(600, 600, WEBGL);

   background(0);
   stroke(255, 10);


    
   for (let i=0; i < num; i++) {
       randArray[i] = random(10);
   }

}

function draw() {


  


    for (let i = 0; i < num; i++ ) {
        // size = noise(t/100-(i/50)) * 1500;
        size += 0.01;
        push();
        rotateX(sin(t / 190-(i/90))* 2);
        rotateY(sin(t / 200-(i/80))* 2);
        rotateZ(cos(t / 210-(i/70))* 2);
        
      

        translate(x(t+i+randArray[i]), y(t+i+randArray[i]));
        box(1, 1, size);
        pop();
      }

      //reset; 
      if (size > width) size = 0;


    t++;

    if (frameCount %150 == 0) {
        background(0);
    }

}




function x(t) {
    return sin(t / 50) + sin(t) * width/3; 
}
  
function y( t) {
    return cos(t/ 50) * height/3; 
}