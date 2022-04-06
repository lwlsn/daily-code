// Wednesday 6th April 

let result;
let index = 0; 
let numTrails = 30;
let size=40;

 // To do- convert to array of arrays 
let sensor1 = [], sensor2= [], sensor3 = [];
let sensor4 = [], sensor5= [], sensor6 = [];


function preload() {
    result = loadStrings('assets/sensors.txt');
}


function setup(){
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
    sensor1.push(vals[0]); 

    for (let i=0; i < numTrails; i++) {
        fill(255, i*10);
        noStroke();
        ellipse(50+i*5, 350- 100*sensor1[i+1], 5,5);
    }

    if (sensor1.length >= numTrails) {
        sensor1 = sensor1.splice(1);
    }


    // Sensor 2
    sensor2.push(vals[1]); 

    for (let i=0; i < numTrails; i++) {
        fill(255, i*10);
        noStroke();
        ellipse(250+i*5, 350-100*sensor2[i+1], 5,5);
    }

    if (sensor2.length >= numTrails) {
        sensor2 = sensor2.splice(1);
    }



    // Sensor 3
    sensor3.push(vals[2]); 

    for (let i=0; i < numTrails; i++) {
        fill(255, i*10);
        noStroke();
        ellipse(450+i*5, 350-100*sensor3[i+1], 5,5);
    }

    if (sensor3.length >= numTrails) {
        sensor3 = sensor3.splice(1);
    }


    // Sensor 4
    sensor4.push(vals[3]); 

    for (let i=0; i < numTrails; i++) {
        fill(255, i*10);
        noStroke();
        ellipse(50+i*5, 550- 100*sensor4[i+1], 5,5);
    }

    if (sensor4.length >= numTrails) {
        sensor4 = sensor4.splice(1);
    }




    // Sensor 5
    sensor5.push(vals[4]); 

    for (let i=0; i < numTrails; i++) {
        fill(255, i*10);
        noStroke();
        ellipse(250+i*5, 550- 100*sensor5[i+1], 5,5);
    }

    if (sensor5.length >= numTrails) {
        sensor5 = sensor5.splice(1);
    }



     // Sensor 6
     sensor6.push(vals[5]); 

     for (let i=0; i < numTrails; i++) {
         fill(255, i*10);
         noStroke();
         ellipse(450+i*5, 550- 100*sensor6[i+1], 5,5);
     }
 
     if (sensor6.length >= numTrails) {
         sensor6 = sensor6.splice(1);
     }

    index++;
}