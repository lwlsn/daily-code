// "Friday 25th" February 

let walker = [];
let num = 50;



function setup() {
    createCanvas(600, 600);
    for (let i = 0;i < num; i++){
		walker[i] = new Walker();
	}
    background(0);
}


function draw() {
    for (let i = 0;i < num; i++){
		walker[i].draw();
	}

}

class Walker {
    constructor() {
        // Start at centre.. 
        this.position = createVector(width/2, height/2);
        this.color = color(random(255), random(100, 255), random(200, 255), 10 );
    }

    draw() {
        for (let i=0; i< 10; i++) {
            this.velocity = createVector(random(-1, 1), random(-1, 1 ));
            this.position.add(this.velocity);

            noStroke();
            fill(this.color);
            ellipse(this.position.x, this.position.y, 2, 2);

        }
    }
}