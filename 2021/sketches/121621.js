// Thursday 16th December

// Happy birthday to my dad :)) 


let stars = [];
let numStars =30;

let r = [];



function setup() {
    createCanvas(600, 600);

    for(let i = 0; i < numStars; i++) {
        r[i] = random( 50.0, 100.0);
        stars[i] = new Star(random(width), random(height), r[i]/50, r[i]/10, 5);
        
    }



}

function draw() {
    background(0);


    // for (let i =0; i < numStars; i++) {
    //     push();
    //     translate(stars[i].x, stars[i].y);
    //     rotate(frameCount / 50.0);
    //     // stars[i](0, 0, 10, 30, 5);
    //     stars[i].update();
    //     pop();
    // }


    for(let i = 0; i < stars.length; i++) {
        stars[i].rotateStar();
        // stars[i].update();

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
            push();
            translate(this.x, this.y);
            rotate(frameCount/r[i]);
            stars[i].show();
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