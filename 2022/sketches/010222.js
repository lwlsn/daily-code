// Sunday 2nd January 
// Hangover day 2 


let colorArray = ["#0a0a0a","#ffffff", "#ffffff", "#ffffff", "#ff0505"];

function setup() {
    createCanvas(600, 600);

    frameRate(8);

}


function draw() {

    background(0);

    push();

    for (let i=0; i< width; i+= 20) {
        for (let j=0; j < height; j+= 20){
            
            let scaleX = map(mouseX, 0, width, 0.15, 1);
            let scaleY = map(mouseY, 0, height, 0.15, 1);
        
            rotate(PI/2);
            fill(random(colorArray));
            rect(i, j, 20*scaleX, 20*scaleY);
          
      
        }
    }

    pop();



}