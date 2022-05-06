// Thursday 5 May 

let points = [];
let speeds = [];
let nodeSize = 5;
let count = 40;
let r; 

let t = 0;


function setup() {
    createCanvas(600,600);

    for (let i=0; i <count; i++){
        points[i] = createVector(random(width), random(height));
        speeds[i] = createVector(random(-0.5,0.5), random(-0.5, 0.5));
    }

}

function draw() {
    background(2, 20);

    stroke(255, 10);


    r = random(100);
    for (let i=0; i < points.length; i++){
        strokeWeight(5);
        point(points[i].x, points[i].y);


        for (let j=0; j< points.length; j++) {
            strokeWeight(1);

            if (r > 50) {
                line(points[i].x, points[i].y, points[j].y, points[j].y);
                fill(0);
                circle(points[i].x,points[i].y,nodeSize);



                points[i].x += speeds[i].x;
                points[i].y += speeds[i].y;
        
        
                if (points[i].x > width ) {
                    points[i].x = 0;
                }
        
                if (points[i].x < 0 ) {
                    points[i].x = width;
                }
        
                if (points[i].y > height) {
                    points[i].y = 0;
                }
        
                if (points[i].y < 0 ) {
                    points[i].y = height;
                }
            }
            
        }

       
    }


    t += 0.01;
}
