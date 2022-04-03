//Sunday 3 April

// On the LNER .. 

let result;
let index = 0; 



function preload() {
    result = loadStrings('assets/sensors.txt');
}

function setup() {    
    createCanvas(600, 600);

    // print(result);

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

    let display = [];

    for (let i=0; i < 4; i++) {
        display[i] = parseFloat(out[3+i]);
        ellipse(250 + i*50, 100/display[i], 10, 10);
    }

    // print(display[0]);



    // for (let i=0; i < 4; i++) {
    //     display[i] = parseFloat(out[3+i]);
    // }

   



    index++;




  

}