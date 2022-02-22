// Tuesday 2 February 

// gr8 date 

let X = [], Y= [];
let N = 5000;

let XX = [], YY = [];


function setup() {
    createCanvas(600, 600);

    for (let i=0; i< N; i++) {
        X[i] = random(width);
        Y[i] = random(height);
        XX[i] = random(1);
        YY[i] = random(1);
    }



}


function draw() {

    background(0);

    for (let i=0; i< N; i++) {

        XX[i] *= cos(random(1));
        YY[i] *= sin(random(1));


        stroke(255, 255, 255,i%200); 
       strokeWeight(i/200);      
        point(X[i]+XX[i], Y[i] +YY[i]);


        XX[i] += 1;
        YY[i] += 1;
    
    }

    



}

function respawn() {

}