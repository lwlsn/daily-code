// Thursday 20th Jan

// Brain zapped, no energy


let circleMax = 350;

let x, y;

let coords;

// to -do, dictionary
var emotions = { };

function setup() {
    createCanvas(600, 600);

    coords = createVector(random(circleMax/2, circleMax/2+100), random(TWO_PI));

    emotions["happy"] = [3*PI/2, TWO_PI];
    emotions["calm"] = [0, PI/2];
    emotions["sad"] = [PI/2, PI];
    emotions["angry"] = [PI, 3*PI/2 ];

}


function draw() {
    background(25,90);

    // Axes 
    stroke(255, 200);
    noFill();
    strokeWeight(1);
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    ellipse(width/2, height/2, circleMax, circleMax);

    x = coords.x * cos(coords.y);
    y = coords.x * sin(coords.y);

    translate(width/2, height/2);
    push();
        line(0, 0, x, y);
        translate(x, y);
        push(); 
          
            rectMode(CENTER);
            noStroke();
            fill(0);
            ellipse(0,0, 50, 50);
            stroke(255, 200);
            noFill();
            strokeWeight(1);
            line(-10, 0, 10, 0);
            line(0, -10, 0, 10);
            rect(0, 0, 5, 5);
            
        pop();
    pop();

    coords.y += 0.01;


    // Use dictionary for this 
    if (coords.y%TWO_PI >   3*PI/2 &&  coords.y%TWO_PI <= TWO_PI ) {
        text( "happy", 0, 100 );
       flasher("#42f554");

    }

    else if ( coords.y%TWO_PI >  0 &&  coords.y%TWO_PI <= PI/2 ) {
        text( "calm", -100, 200 );
        flasher("#42f5f5");

        
    }

    else if ( coords.y%TWO_PI >  PI/2 &&  coords.y%TWO_PI <= PI ) {

        text( "sad", 0, 200 );
        flasher("#8142f5");
    }

    else if ( coords.y%TWO_PI >  PI &&  coords.y%TWO_PI <= 3*PI/2 ){
        text( "angry", -100, 100 );
        flasher("#f55442");
    }

    
	
}


function flasher(hex) {
    if (frameCount % 200 <30){
        if (frameCount % 4<2){
            background(hex);
        }
    
    }
}