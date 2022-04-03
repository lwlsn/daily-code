// Friday 1 April 

// Baseline data visualisations 

let result;


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


    for (let i=10; i < width; i += 200){
        for (let j=10; j < width; j+= 100){
            text(random(result), i, j, 80, 80);
        }
       
    }
   


  

}