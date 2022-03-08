// Monday 7th March 

let stars = [];
let numStars = 100;
let r = [];
let poles = [];



function setup() {
    createCanvas(600, 600);
    noStroke();
    fill(255, 100);
    


    for(let i = 0; i < numStars; i++) {
        r[i] = random( 50.0, 100.0);
        stars[i] = new Star(random(width), random(height), r[i]/50, r[i]/10, r[i]/10);
        
    }

    for (let i=0; i<5; i++) {
        
        let xpos = 300*i

        poles[i] = new Pylon(xpos, 300, 20, 300);
    
  
    }

    print(poles);


   
}

function draw() {
    background("#1F2947");

    for(let i = 0; i < stars.length; i++) {
        noStroke();
        fill(255, 100);
        stars[i].show();
        // stars[i].rotateStar();
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


    }


    update() {
        this.x +=1;
        this.y += 1;
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
    

    }

}