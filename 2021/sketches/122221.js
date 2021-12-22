// Wednesday 22nd December 

// Cold :S  q

let colorArray = ["#0a0a0a", "#ffffff", "#ff0505"];



function setup() {
    createCanvas(600, 600);
    // noStroke();

    frameRate(20);

}

function draw() {
    background(0);

    // print(colorArray[randIndices[0]]);

    for (let i=50; i< width-50; i+= 20) {
        for (let j=50; j < height-50; j+= 20){
          
            let rand = floor(random(10));
            if (rand >= 0 && rand < 4) {
                fill(colorArray[0]);
            }
            else if (rand >= 4  && rand < 8) {
                fill(colorArray[1]);
            }
            else {
                fill(colorArray[2]);
            }
            rect(i, j, 20, 20);
      
        }
    }
}