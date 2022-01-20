// Wednesday 19th January
// Todays inspo https://www.instagram.com/p/CQGH5QKFslG/


let lineCoords = [];
let numLines = 10;
let circleMax = 400;
let speeds = [];

let x,y;


function setup(){
    createCanvas(600, 600);


    for (let i = 0; i < numLines; i ++ ) {
        lineCoords[i] = createVector(random(circleMax/2, circleMax/2+100), random(TWO_PI) );
        speeds[i] = random(0.005, 0.02);    
    }
  

}

function draw() {
    background(0, 180);

    // background grid
    stroke(255, 5);
    strokeWeight(5);
 
 
    for (let i=0; i < height; i+= 20 ) {
        for (let j=0; j < width; j += 50) {
       
            line(0,i, width,i);
            line(j,0, j, height);
        }
       
    }  
    
    
    // Axes 
    stroke(255, 200);
    noFill();
    strokeWeight(1);
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    ellipse(width/2, height/2, circleMax, circleMax);
   // Spanning Lines 

  
 
    translate(width/2, height/2);
    for (let i=0; i < numLines; i++) {
   
        x=lineCoords[i].x * cos(lineCoords[i].y);
        y=lineCoords[i].x * sin(lineCoords[i].y);
        push(); 
            translate(x, y);
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

        line(0, 0, x , y );

        // More concise way of expressing this? 
        if (lineCoords[i].y > 0 && lineCoords[i].y <= PI/2 ) {
            arc(0, 0, lineCoords[i].x*0.4, lineCoords[i].x*0.4, lineCoords[i].y , PI/2); 
        }

        else if (lineCoords[i].y > PI/2 && lineCoords[i].y <= PI ) {
            arc(0, 0, lineCoords[i].x*0.4, lineCoords[i].x*0.4, lineCoords[i].y , PI);
        }

        else if (lineCoords[i].y > PI && lineCoords[i].y <= 3*PI/2 ) {
            arc(0, 0, lineCoords[i].x*0.4, lineCoords[i].x*0.4, lineCoords[i].y , 3*PI/2);
        }
       

       else {
        arc(0, 0, lineCoords[i].x*0.4, lineCoords[i].x*0.4, lineCoords[i].y , 2*PI);
       } 

       
    }

    for (let i=0; i <numLines; i++) {
        lineCoords[i].y += speeds[i];
   }
    

}