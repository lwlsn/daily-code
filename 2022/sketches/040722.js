//Thurs 7th April 


let result;
let index = 0; 
let numTrails = 150;
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



    noStroke();
    fill(255);

    let out = result[index].split(" ");

    text(out[0], 50, 50, width- 50, 80 );
   
    text(out[2], 50, 100, width- 50, 80 ); 
    fill("#084887");
    text(out[3], 50, 120, width- 50, 80 );// sensor 1 
    fill("#F58A07");
    text(out[4], 50, 140, width- 50, 80 );// sensor 2 
    fill("#EE92C2");
    text(out[5], 50, 160, width- 50, 80 ); // sensor 3
    fill("#F0F0C9");
    text(out[6], 50, 180, width- 50, 80 ); // sensor 4
    fill("#F2BB05");
    text(out[7], 50, 200, width- 50, 80 ); // sensor 5
    fill("#6E0E0A"); 
    text(out[8], 50, 220, width- 50, 80 ); // sensor 6


    let vals = [];

    for (let i=0; i < 6; i++) {
        vals[i] = parseFloat(out[3+i]);
    }

    // print(vals);

    // Sensor 1
    sensor1.push(vals[0]); 

    for (let i=0; i < numTrails; i++) {
        // fill(255, i*1);
        noStroke();
        fill(8,72, 135, i*5);
        ellipse(50+i*3, 500- 250*sensor1[i+1], 5,5);
    }

    if (sensor1.length >= numTrails) {
        sensor1 = sensor1.splice(1);
    }

  


    // Sensor 2
    sensor2.push(vals[1]); 

    for (let i=0; i < numTrails; i++) {
        fill(245,138, 7, i*5);
        noStroke();
        ellipse(50+i*3, 500-250*sensor2[i+1], 5,5);
    }

    if (sensor2.length >= numTrails) {
        sensor2 = sensor2.splice(1);
    }



    // Sensor 3
    sensor3.push(vals[2]); 

    for (let i=0; i < numTrails; i++) {
        fill(236,146, 194, i*5);
        noStroke();
        ellipse(50+i*3, 500-250*sensor3[i+1], 5,5);
    }

    if (sensor3.length >= numTrails) {
        sensor3 = sensor3.splice(1);
    }


    // Sensor 4
    sensor4.push(vals[3]); 

    for (let i=0; i < numTrails; i++) {
        fill(240, 240, 201, i*5);
        noStroke();
        ellipse(50+i*3, 500- 250*sensor4[i+1], 5,5);
    }

    if (sensor4.length >= numTrails) {
        sensor4 = sensor4.splice(1);
    }




    // Sensor 5
    sensor5.push(vals[4]); 

    for (let i=0; i < numTrails; i++) {
        fill(242, 187, 5, i*5);
        noStroke();
        ellipse(50+i*3, 500-250*sensor5[i+1], 5,5);
    }

    if (sensor5.length >= numTrails) {
        sensor5 = sensor5.splice(1);
    }



     // Sensor 6
     sensor6.push(vals[5]); 

     for (let i=0; i < numTrails; i++) {
         fill(110, 14, 10, i*5);
         noStroke();
         ellipse(50+i*3, 500- 250*sensor6[i+1], 5,5);
     }
 
     if (sensor6.length >= numTrails) {
         sensor6 = sensor6.splice(1);
     }

    index++;
}