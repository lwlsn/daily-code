// Tuesday 1 Feb 

// ?? 

let t;

function setup() {
    createCanvas(600, 600);
    background(0);
    stroke(255, 10);
    noFill();
    t=0;
    noiseSeed(99);


}

function draw() {

    for (let i=0; i<= width; i+= 150) {
        for (let j=0; j <= height; j += 150) {
           
            beziate(i, j, 200);
        }
       
    }

   

    t += 0.005;

    // clear the background every 500 frames using mod (%) operator
    if (frameCount % 500 == 0) {
      background(0);
    }
 
}

function beziate(xpos, ypos, size) {

    push();
    translate(xpos, ypos);
    
    stroke(random(180, 255), random(0, 255), random(0, 255), 60);
    var x1 = size * noise(t + 15);
    var x2 = size * noise(t + 25);
    var x3 = size * noise(t + 35);
    var x4 = size * noise(t + 45);
    var y1 = size * noise(t + 55);
    var y2 = size * noise(t + 65);
    var y3 = size * noise(t + 75);
    var y4 = size * noise(t + 85);
  
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    pop();
  
  

}