// Tuesday 8 February 


let N = 1000, RR = 250, dQ = 0.02;

let X = [];
let Y = [];

let R, A, Q;


function setup() {

    createCanvas(600, 600);
    background(0);
    
    fill(0,0,0,10) ; 
    stroke(255,0,0) ;
    strokeWeight(2);
    for ( let i = 0 ; i < N ; i++ ){
        X[i] = random(-300,+300);  // initialise random coords 
        Y[i] = random(-300,+300);
      }
      Q = -PI;
}


function draw() {
    
    rect(0,0,599,599);
  

    for (let i=0; i < N; i++) {
        Y[i] = (RR+Y[i])/2 ; // add offset 
        R = sqrt(pow(X[i],2)+pow(Y[i],2)); // distance between x, y coords  
        A = atan(Y[i]/X[i]);
        if ( X[i] < 0 ) {
            A = A+PI; 
        }  
        A = A*2 + Q;   
        X[i] = R*cos(A); 
        Y[i] = R*sin(A);

        point(X[i]+300,Y[i]+300) ; 
    }

    Q = Q + dQ ; 
    
}