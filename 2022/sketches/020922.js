// Wednesday 9th Feb
// More attractor maps - tinkerbell map.. 
// coefficients
let c1 = 0.9, c2 = -0.6012, c3 = 2, c4= 0.5;

// variables
let x0 = -0.72, y0 = - 0.64;
let x=0, y=0;
let x1 = x0, y1=y0; // ? 

let xoff = 300, yoff = 300;


let Q, A, R;
let X = [], Y= [];
let dQ = 0.02;
let N= 4000;


function setup() {
    createCanvas(600, 600);
    background(0);

    fill(0,0,0,10) ; 
    stroke(255,0,0) ;
    strokeWeight(2);

    Q = -PI;
    frameRate(120);
}

function draw() {


    x = (pow(x1,2) - pow(y1,2) + c1*x1 + c2*y1);
    y = (2*x1*y1 + c3*x1 + c4*y1);
    x1 = x;
    y1 = y;


    // point(xoff*x1 + width/2, yoff*y1 + height/2);
    for (let i=0; i < N; i++) {
        X[i] = x ; // add offset 
        Y[i] = y; // distance between x, y coords  
        R = sqrt(pow(X[i],2)+pow(Y[i],2)); // distance between x, y coords  
        A = atan(Y[i]/X[i]);
        if ( X[i] < 0 ) {
            A = A+PI; 
        }  
        A = A*2 + Q;   
        X[i] = 100*R*cos(A); 
        Y[i] = 100*R*sin(A);

        point(X[i]+xoff,Y[i] +yoff) ; 
    }

    Q = Q + dQ ; 

}

