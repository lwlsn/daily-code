// Ven 6 MAi

let points = [];
let speeds = [];
let count = 100, nodeSize =5;
let margin = 50; 


function setup() {
    createCanvas(600,600);
    

    for (let i=0; i< count-2; i++) {
        points[0] = createVector(margin, height/2);
        points[1] = createVector(0, height/2);
        points[i+2] = createVector(random(2*margin, width-2*margin), random(2*margin, height-2*margin));
        points[count-1] = createVector(width-margin, height/2);
        points[count] = createVector(width, height/2);
        speeds[i+2] = createVector(random(-0.5,0.5), random(-0.5, 0.5));
        speeds[0] = 0, speeds[1] = 0, speeds[count-1] = 0, speeds[count] =0;
    }
}

function draw() {
    background(0);

    stroke(255, 50);
    fill(0);


    for (let i=0; i < points.length; i++){ 

   
        points[i].x += speeds[i].x;
        points[i].y += speeds[i].y;
    
        for (let j=0; j< points.length; j+=10) {

   
          
            circle(points[i].x,points[i].y,nodeSize);
            line(points[i].x, points[i].y, points[j].x, points[j].y);

           
    
    
            if (points[i].x > width-margin ) {
                points[i].x = margin;
            }
    
            if (points[i].x < margin ) {
                points[i].x = width-margin;
            }
    
            if (points[i].y > height-margin) {
                points[i].y = margin;
            }
    
            if (points[i].y < margin ) {
                points[i].y = height-margin;
            }
  
        }
    }
}