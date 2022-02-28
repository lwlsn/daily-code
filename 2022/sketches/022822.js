//Monday 28th Feb

// Year moving way too fast

let v1; 



function setup() {
    createCanvas(600, 600);
    background(0);

    fill(255);
    stroke(255, 100);
    
    v1 = createVector(width/2, height/2);

}


function draw() {

    translate(v1.x, v1.y);
    rotate(frameCount/10)

    strokeWeight(randomGaussian(2));


    let offset = 50+4*drunk(50, 100, 2); 

    line(0, 0, offset-v1.x,offset-v1.y);




}


//max drunk simulator.. attempt 1
function drunk(min, max, step) {


    let val = min+ max/2; 

    let r2 = random(1); 

    if (r2 < 0.25) {

        let r = randomGaussian(1);


        if (r < 0.5 ) {
         val -= 2*step; 
        }
        else {
            val += step;
        }

    
    }

    else {

        let r = randomGaussian(1);


        if (r < 0.5 ) {
         val -= step; 
        }
        else {
            val += 2*step;
        }


    }
    


    return val;
}