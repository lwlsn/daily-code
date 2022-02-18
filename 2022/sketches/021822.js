// Friday 18th February

// Eunice being a lil bxtch. 

let N = 100, M = 100, RR= 300;

let X = [], Y=[];
let R, A, Q=0, I, II;

function setup() {
    createCanvas(600, 600);
    background(0);
    fill(0,0,0,10) ; stroke(255) ;

    // Initialise arrays randomly to (-300, 300);
    for (I =0; I < N; I++) {
        X[I] = random(-300, 300);
        Y[I] = random(-300, 300);
    }

}

function draw() {

    rect(0,0,599,599);


    for ( I=0; I < N ; I++ ){
        for (II=0; II< M; II++) {
            R = sqrt(pow(X[I],2)+pow(Y[I],2)); //dist between x and y at point i
            A = atan(Y[I]/X[I]); // arctang

            // Negative x 
            if ( X[I] < 0 ){ 
                A = A+PI; 
            }  
            //Positive x , negative y
            if ( X[I] >= 0  && Y[I] < 0){ 
                A = A+(2*PI); 
            } 

            // scale angle and radius
            A = A/2 + Q; 
            R = R * sqrt(2);

            // calc polar coords
            X[I] = R*cos(A); 
            Y[I] = R*sin(A);
            // centre to 0
            Y[I] = Y[I] - RR; 

            point(X[I]+450,Y[I]+450); 

        } // j 
    }// i
    if( R > 30000 ){ 
        X[I] = random(-300,+300); 
        Y[I] = random(-300,+300); 
    }
    Q = random(-1,1);
	RR = mouseY*2 ;


    // print();

    
}