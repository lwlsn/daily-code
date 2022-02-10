// Thursday 10th February

//..? help from https://openprocessing.org/sketch/1255858

let N = 1000 ; let M = 100 ; let RR = 300 ;

let X = []; let Y = [];

let R, A, I, II, Q, QQ, P, PP, S, SS;
let cosS, sinS, cosSS, sinSS;

function setup() {
    createCanvas(600, 600);
    background(0);
    fill(0,0,0,10); 
    stroke(255);
    strokeWeight(2);

    // Initialise random co-ordinates for X and Y matrices
    for (I=0; I < N; I++) {
        X[I] = random(-300, 300);
        Y[I] = random(-300, 300);
    }

    // Initialise coefficients 
    Q = sqrt(2);
    QQ = RR/ Q;
    P = random(0, PI);
    PP = random(0,PI); 
    S = random(0,PI); 
    SS = random(0,PI) ; 

}

function draw() {

    rect(0,0,599,599);

    cosS = cos(S); sinS = sin(S); cosSS = cos(SS); sinSS = sin(SS);

    for (I=0; I < N; I++) {
        for (II=0; I < N; I++) {
            A = atan(Y[I]/X[I]);
            R = sqrt(pow(X[I],2)+pow(Y[I],2));
            R = R/Q;
            if (X[I] < 0) {
                A = A*2 + P; 
                X[I] = R*cos(A) - (QQ*cosS);
                Y[I] = R*sin(A) - (QQ*sinS);
            } else {
                A = A*2 + PP; 
                X[I] = R*cos(A) - (QQ*cosSS);
                Y[I] = R*sin(A) - (QQ*sinSS);
            }
            point(X[I]+300,Y[I]+300) ; 
        } // end II loop
        if( R > 30000 ){ X[I] = random(-300,+300) ; Y[I] = random(-300,+300); }
    } // end I loop
    P = P + 0.0003 ; PP = PP + 0.0005 ; S = S + 0.0007 ; SS = SS + 0.0011 ;

    // Reinitiliase initial co-ordinates after 400 frames 
    if (frameCount%400 ==  0) {
        setup();
    }
}