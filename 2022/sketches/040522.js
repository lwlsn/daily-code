// Tuesday 5th April 

// Whitby ready

// TOMORROW :: visualise as streams 


let result;
let index = 0; 

let size=40;

function preload() {
    result = loadStrings('assets/sensors.txt');
}


function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    fill(255);
    stroke(255);

    let out = result[index].split(" ");

    text(out[0], 50, 50, width- 50, 80 );
    text(out[2], 50, 100, width- 50, 80 );
    text(out[3], 50, 120, width- 50, 80 );
    text(out[4], 50, 140, width- 50, 80 );
    text(out[5], 50, 160, width- 50, 80 );
    text(out[6], 50, 180, width- 50, 80 );
    text(out[7], 50, 200, width- 50, 80 );
    text(out[8], 50, 220, width- 50, 80 );


    let vals = [];

    for (let i=0; i < 6; i++) {
        vals[i] = parseFloat(out[3+i]);
    }

    // print(vals);


    // Sensor 1 
    push();
        translate(250, 150);
        noFill();
        stroke(255);
        ellipse(0, 0, size * 2);


        let v0 = createVector(0, 0);
        let v1 = createVector( 260 -width/2, 260-height/2);

        drawArrow(v0, v1, 'red', vals[0]*TWO_PI);

    pop();




    // Sensor 2
    push();
        translate(375, 150);
        noFill();
        stroke(255);
        ellipse(0, 0, size * 2);

        let v2 = createVector(0, 0);
        let v3 = createVector( 260 -width/2, 260-height/2);

        drawArrow(v2, v3, 'red', vals[1]*TWO_PI);

    pop();



    // Sensor 3
    push();
        translate(500, 150);
        noFill();
        stroke(255);
        ellipse(0, 0, size * 2);

        let v4 = createVector(0, 0);
        let v5 = createVector( 260 -width/2, 260-height/2);

        drawArrow(v4, v5, 'red', vals[2]*TWO_PI);

    pop();


    // Sensor 4 
    push();
        translate(250, 350);
        noFill();
        stroke(255);
        ellipse(0, 0, size * 2);


        let v6 = createVector(0, 0);
        let v7 = createVector( 260 -width/2, 260-height/2);

        drawArrow(v6, v7, 'red', vals[3]*TWO_PI);

    pop();



    // Sensor 5 
    push();
       translate(375, 350);
       noFill();
       stroke(255);
       ellipse(0, 0, size * 2);


       let v8 = createVector(0, 0);
       let v9 = createVector( 260 -width/2, 260-height/2);

       drawArrow(v8, v9, 'red', vals[4]*TWO_PI);

    pop();


    // Sensor 6
    push();
        translate(500, 350);
        noFill();
        stroke(255);
        ellipse(0, 0, size * 2);


        let v10 = createVector(0, 0);
        let v11 = createVector( 260 -width/2, 260-height/2);

        drawArrow(v10, v11, 'red', vals[5]*TWO_PI);

    pop();
    

    index++;

}


function drawArrow(base, vec, myColor,t) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    rotate(t);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }