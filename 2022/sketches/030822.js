// Tuesday 8th March 

// Happy bday mum

let stars = [];
let numStars =100;

let r = [];

let houses = [], sizes = [], colours= ["#8E3B46", "#CDEAC0", "#7678ED", "#05204A","#B497D6", "#8B2635"]; 

let poles = [];

function setup() {
    createCanvas(600,600);
    noFill();
    stroke(255,100);


    for(let i = 0; i < numStars; i++) {
        r[i] = random( 50.0, 100.0);
        stars[i] = new Star(random(width), random(0, height*2/3), r[i]/50, r[i]/10, r[i]/10);
        
    }

    for (let i=0; i < width; i+= 150) {
        sizes[i] = floor(random(300, 350));

    
        houses[i] = new House(i, sizes[i], 150,height-sizes[i],  random(colours));
    }

    for (let i=0; i<5; i++) {
        
        let xpos = 300*i
        poles[i] = new Pylon(xpos, 250, 20, 350);
    
    }
}


function draw() {

    background("#1F2947");


    noStroke();
    fill(255, 100);
    
    for(let i = 0; i < stars.length; i++) {
   
        stars[i].show();
    }


    for (let i=0; i < width; i+= 150) {
        houses[i].display();
    }

    for (let i=0; i<4; i++) {
       
        poles[i].show();
    
    
    }

}

class Star {

    constructor(x , y, radius1, radius2, npoints) {
        this.x = x;
        this.y = y;
        this.radius1 = radius1;
        this.radius2 = radius2;
        this.npoints = npoints;

    }

    show() {
        let angle = TWO_PI/ this.npoints;
        let half_angle = angle / 2.0;
        beginShape();
        for (let a=0; a< TWO_PI; a+= angle) {
            let sx = this.x + cos(a)*this.radius2;
            let sy = this.y + sin(a)*this.radius2;
            vertex(sx, sy);
            sx = this.x + cos(a + half_angle) * this.radius1;
            sy = this.y + sin(a + half_angle) * this.radius1;
            vertex(sx, sy);
        }
    
        endShape(CLOSE);
    }
    

    rotateStar() {
       
       
        for (let i = 0; i <numStars; i++) {
            translate(this.x, this.y);
            push();
            rotate(frameCount/r[i]);
            pop()
        }
    

        // this.show();
        // pop();

    }


    update() {
        this.x +=1;
        this.y += 1;
    } 

}

class House {
    constructor(x,y, sizeX, sizeY, mainColour) {
        this.x=x;
        this.y=y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.mainColour = mainColour;
       
    }

    body() {
        fill("#F3F7F5");  // slate grey
        rect(this.x, this.y, this.sizeX, this.sizeY); 

    }

    grids() {
        for (let i=0; i <this.sizeX; i+=10) {
            for (let j=0; j < this.sizeY; j+=10) {
                push();
                translate(this.x, this.y);
                stroke(2);
                strokeWeight(1);
                line( i, 0, i, this.sizeY );
                line(0, j, this.sizeX, j);
                pop();
                stroke(255,100);
            }
        }
    }

    windows() {
        fill("#a3afd1"); // match night sky blue

        let windowStartX = this.x +this.sizeX/12;
        let windowStartY = this.y+ this.sizeY/8;
        let windowSizeX = this.sizeX-this.sizeX/6
        let windowSizeY = this.sizeY/3;
        stroke("#C19A6B"); // wood frames 
        strokeWeight(4);
        rect(windowStartX , windowStartY ,windowSizeX , windowSizeY);
        noStroke();
        stroke(255);
        push();
        translate(windowStartX, windowStartY);
        // Main body 
        line(0, windowSizeY/2, windowSizeX, windowSizeY/2);
        line(windowSizeX/2, 0, windowSizeX/2, windowSizeY);
        strokeWeight(2);
        line(windowSizeX/4, 0, windowSizeX/4, windowSizeY);
        line(windowSizeX*3/4, 0, windowSizeX*3/4, windowSizeY);


        // Railings 
        for (let i=0; i < windowSizeX; i+=10) {
            line(i, windowSizeY/2, i, windowSizeY);
        }
        pop();

        strokeWeight(1);
        noStroke();
       
    }

    banner() {
        let startX = this.x;
        let startY = this.y +this.sizeY/2;
        
        
        push();
        translate(startX, startY);
        fill(this.mainColour); // main colour here
        rect(0, 0, this.sizeX, 20);
        pop();
        
    }

    door() {

        let doorStartX = this.x+ this.sizeX/4;
        let doorStartY = this.y + this.sizeY*(2/3);
        let doorX = 60;
        let doorY = 100;
       
        push();
        translate(doorStartX, doorStartY);
        fill("#5c3c15"); // door colour (darker)
        strokeWeight(2);
        stroke(this.mainColour); // match banner 
        rect(0, 0, doorX, doorY);

        // Left panel 
        // noStroke();
        // fill("#C19A6B"); // door colour (lighter)
        // rect(-this.sizeX/4,0, 36, 100);
        // for (let i=0; i < 100; i+= 5) {
        //     stroke(2);
        //     strokeWeight(1);
        //     line(0, i, -this.sizeX+36, i);
        // }

        // // Right panel
        // noStroke();
        // rect(doorStartX+24,0, 52, 100);
        // for (let i=0; i < 100; i+= 5) {
        //     stroke(2);
        //     strokeWeight(1);
        //     line(doorStartX+24, i, doorStartX+24+52, i);
        // }



        pop();


    }

    display() {
        this.body();
        this.grids();
        this.windows();
        this.banner();
        this.door();
    }


}




class Pylon {
    
    constructor(x, y, width, length) {
        this.x = x;
        this.y = y;
        this.width= width;
        this.length=length;

    }


    curveBetween(x1, y1, x2, y2, d, h, flip) {
        //find two control points off this line
        var original = p5.Vector.sub(createVector(x2, y2), createVector(x1, y1));
        var inline = original.copy().normalize().mult(original.mag() * d);
        var rotated = inline.copy().rotate(radians(90)+flip*radians(180)).normalize().mult(original.mag() * h);
        var p1 = p5.Vector.add(p5.Vector.add(inline, rotated), createVector(x1, y1));
        //line(x1, y1, p1.x, p1.y); //show control line
        rotated.mult(-1);
        var p2 = p5.Vector.add(p5.Vector.add(inline, rotated).mult(-1), createVector(x2, y2));
        //line(x2, y2, p2.x, p2.y); //show control line
        bezier(x1, y1, p1.x, p1.y, p2.x, p2.y, x2, y2)
      }


    show() {
        // Poles
        strokeWeight(1);
        fill("#baa79e");
        rect(this.x, this.y, this.width, this.length);
        fill("#f2edeb");
        rect(this.x, this.y+this.length*(2/3), this.width, this.length/3);


        // cables 
        stroke(0); // black stroke
        noFill();
        strokeWeight(2);
        this.curveBetween(this.x, this.y, this.x+300, this.y, 0.3, 0.15, 0);
        this.curveBetween(this.x, this.y, this.x+300, this.y, 0.5, 0.15, 0);
        this.curveBetween(this.x, this.y+10, this.x+300, this.y+10, 0.3, 0.15, 0);
        this.curveBetween(this.x, this.y+10, this.x+300, this.y+10, 0.3, 0.2, 0);
        this.curveBetween(this.x, this.y+50, this.x+300, this.y+10, 0.3, 0.2, 0);
        this.curveBetween(this.x, this.y+50, this.x+300, this.y+10, 0.3, 0.2, 0);
    

        noStroke();
    }

}