// Tuesday 30 August 

// Rhythmic circles 

// To-do, add sensor input changes

let phase=0;
 
let result;
let index = 0; 

 // To do- convert to array of arrays 
let sensor1 = [], sensor2= [], sensor3 = [];
let sensor4 = [], sensor5= [], sensor6 = [];


function preload() {
    result = loadStrings('assets/sensors.txt');
}


function setup() {
    createCanvas(600, 600);

}


function draw() {
    background(0);


    let out = result[index].split(" ");
   
    fill("#f2d9a1");
    text(out[0], 50, 50, width- 50, 80 );
    text(out[2], 50, 100, width- 50, 80 ); 
    text(out[3], 50, 120, width- 50, 80 );// sensor 1 
    text(out[4], 50, 140, width- 50, 80 );// sensor 2 
    text(out[5], 50, 160, width- 50, 80 ); // sensor 3
    text(out[6], 50, 180, width- 50, 80 ); // sensor 4
    text(out[7], 50, 200, width- 50, 80 ); // sensor 5
    text(out[8], 50, 220, width- 50, 80 ); // sensor 6

    let vals = [];

    for (let i=0; i < 6; i++) {
        vals[i] = parseFloat(out[3+i]);
    }


    sensor1.push(vals[0]); 


    // Sensor 1 looper
    looper(250, 100, 50, 75, 5);

    // Sensor 2 looper
    looper(450, 100, 50, 75, 6);


    //Sensor 3 looper
    looper(250, 300, 50, 75, 7);

    // Sensor 4 looper
    looper(450, 300, 50, 75, 8);

    //Sensor 5 looper
    looper(250, 500, 50, 75, 9);

    // Sensor 6 looper
    looper(450, 500, 50, 75, 10);


    phase += 0.01;

    index++;


}


function looper(xpos, ypos, min, max, noiseMax) {

    push();
    translate(xpos, ypos);

    stroke(255);
    noFill();


    beginShape();


    for (let i=0; i< TWO_PI; i+=0.1) {
        let xoff = map(cos(i+phase), -1, 1, 0, noiseMax);
        let yoff = map(sin(i+phase), -1, 1, 0, noiseMax);
        let r = map(noise(xoff, yoff), 0, 1, min, max); // map radius 

        // convert polar co-ords around the circle
        let x=r*cos(i);
        let y=r*sin(i);

        vertex(x,y);

    }

    endShape(CLOSE);



    pop();
}   