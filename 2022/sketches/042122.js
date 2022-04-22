// Thursday 21 April

// stressssed

let t=0;

function setup() {
    createCanvas(600,600);
    noStroke();
    fill("#AB21FF");
}

function draw() {
    background(0);

    for (let x=0; x <= width; x+= 30) {
        for (let y=0; y <= height; y+= 30) {
            // starting point of each circle depends on mouse position
            const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
            const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
            // and also varies based on the particle's location
            const angle = xAngle * (x / width) + yAngle * (y / height);

            // each particle moves in a circle
            const myX = x + 20 * cos(2 * PI * t + angle);
            const myY = y + 20 * sin(2 * PI * t + angle);

            strokeWeight(5);
            ellipse(myX, myY,10); // draw particle
        }
    }

    t += 0.01;
}