// Tuesday 25 Jan
// Burns night

let array = ['🏴󠁧󠁢󠁳󠁣󠁴󠁿', '🥃', '⛰', '🌲', '🐿'] ;
let size = 80;


function setup() {

    createCanvas(600, 600);
    textSize(48);
    background(0);
    for (let i=0; i < size; i++) {
      text(random(array), random(width), random(height));
    }

}


function draw() {

    

}