// Sunday 20th Feb

// >>?? ???
let points = [];


function setup() {
    createCanvas(600,600);

    for (let i=0; i < 50; i++){
        points[i] = createVector(random(width), random(height));
    }

}

function draw() {
    background(2, 10);

    stroke(255, 20);


    for (let i=0; i < points.length; i++){
        strokeWeight(5);
        point(points[i].x, points[i].y);


        for (let j=0; j< points.length; j++) {
            strokeWeight(1);
            line(points[i].x, points[i].y, points[j].y, points[j].y);
        }
    }
}

