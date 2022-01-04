// Tuesday 4th January 
// Re-engage the brain ..?


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0, 70);

    noFill();
    push();
        translate(width/2, height/2);
        stroke(255);
        strokeWeight(2);


    

        for (let i=0; i < 10 ; i+=2) {
            for (let k = 50; k <= 300; k+= 50) {
        
                rotate(frameCount%1000/i);
                arc(0, 0,k, k, PI, 0 );
        
            }
          
        }


        for (let i=1; i < 12; i+=2) {
            for (let k = 75; k <=height; k+= 50) {
                // rotate(frameCount%2000/i);
                arc(0, 0,k, k,0, PI );
            }
          
        }


    pop();
}