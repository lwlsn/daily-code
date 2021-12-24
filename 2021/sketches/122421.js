// Friday 24th December 

// Christmas eveeee

let santas = [];
let numSantas = 20;

let reindeer = [];
let numReindeer = 40; 

let trees = [];
let numTrees = 100;

let angle = 0.0


function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < numSantas; i++) {
        santas[i] = new Emoji(random(width), random(height), "🎅");
    }

    for (let i = 0; i < numReindeer; i++) {
        reindeer[i] = new Emoji(random(width), random(height), "🦌");
    }


    for (let i = 0; i < numTrees; i++) {
        trees[i] = new Emoji(random(width), random(height), "🌲");
    }

}


function draw() {
    background("#2B2D42");

    for (let i = 0; i < numSantas; i++) {
        santas[i].show();
        santas[i].rain();
    }


    for (let i = 0; i < numReindeer; i++) {
        // reindeer[i].show();
        reindeer[i].rotate();
    }



    for (let i = 0; i < numTrees; i++) {
        trees[i].show();
    }
    

}



class Emoji {

    constructor(x,y,string) {
        this.x = x; 
        this.y = y;
        this.emo = string;
    }

    show() {
        push();
        textSize(32);
        translate(this.x, this.y);
        text(this.emo, 0, 0 );
        pop();
   
    }

    rain() {

        this.y ++;

        if (this.y > height) {
            this.y =0;
        }
    }

    // To-do

    rotate() {
        push();
        textSize(32);
        translate(this.x, this.y);
        rotate(radians(angle));
        text(this.emo, 0, 0 );
        angle += 0.02;
        pop();
        
    }


}