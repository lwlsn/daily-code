// Thursday 16 June 
let density = 20;

let t = 0.01;


function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 100);

}

function draw() {
    
    background(255, 100);
    noStroke();



    density = map(sin(t), -1, 1, 20,25 );
    
   
    for (x=0; x<=width; x+=density){
        for (y=0; y<=height; y+=density){
          let d= dist(mouseX, mouseY, x, y)/8;
          //first outer black ellipse grid is unmoving grid, though resized by distance from mouse cursor by variable d, as defined above
          fill(0);
        ellipse(x, y, d, d);
          //second, smaller white ellipse grid moves toward mouse cursor
          fill(100);   
        ellipse (x+ mouseX/(width/density)-10, y+ mouseY/(height/density)-10, d/2,d/2);
          //last, smallest black ellipse grid
          fill(0)
          ellipse (x+ mouseX/(width/density)-10, y + mouseY/(height/density)-10, d/4, d/4);
        
        }

    }

    t += 0.01;
}