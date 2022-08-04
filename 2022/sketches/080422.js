// Thursday 4 August

let charArray = ['^_< -☆', '˙ᵕ˙', 'ᖭི༏ᖫྀ' , ' ', '❀', '♡', ' ', '𓍯'];
let gridSize = 30, noiseScale = 300;
let river = [], nodes = 100;


function setup() {
   createCanvas(600, 600);
   angleMode(RADIANS);

   for (let i=0; i < nodes; i++) {
    river[i] = new Node();
   }

}

function draw() {
    background(0,10);

    river.push(new Node());

    for (let i=0; i < nodes; i++) {
        river[i].render();
    }
}


function getNoise(xPos, yPos) {
    let noiseValue =  noise(xPos/noiseScale, yPos/noiseScale);
    noiseValue = constrain(noiseValue, 0.3, 0.7);
	noiseValue = map(noiseValue, 0.3, 0.7, 0,1);
	return noiseValue;


}

class Node {
    constructor( ) {
        this.xPos = random(width);
        this.yPos = random(height);
        this.direction = 0;
        this.speed = 5;
    
    }

    render() {

        // fill(255);
        // rect(this.xPos, this.yPos, 10, 10);
        stroke(255);
        text(random(charArray), this.xPos, this.yPos);
        

        this.direction = getNoise(this.xPos, this.yPos)*720 + random(-30, 30);
        this.xPos += sin(this.direction)*this.speed; 
        this.yPos += cos(this.direction)*this.speed;


    }


 
}