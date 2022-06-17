// Fri 17 June 

let margin = 50, xspace=15, yspace=10;

function setup() {
    createCanvas(600, 600);
    noStroke();


    
}

function draw() {
    background(0,10);

    for (let x=margin; x < width-margin; x += xspace) {
        for (let y=margin; y< height-margin; y+= yspace) {
            let r = random(1);
            if (r < 0.05) {
                fill(255, 0, 0);
            } 
            else if (r > 0.05 && r < 0.5) {
                fill(255);
            }
            else {
                fill(0);
            }

            rect(x, y, 10, 10);
         
        }
  
    }


    yspace = map(mouseY, 0, height, 10, 20);
    xspace = map(mouseX, 0, width, 15, 25);



}