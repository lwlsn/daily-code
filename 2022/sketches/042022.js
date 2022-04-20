// Wednesday 20th April

let mountainStartAtY1; 
let mountainStartAtY2;
let startAtY, vanishingX;
const mountainDH1 = 40;
const mountainDH2 = 60;
const mountainDX = 200;

let MOON;

let randNoises1, randNoises2;

// const randNoises1 = [...Array(mountainDX)].fill(null).map((_, ind) => p.noise(ind * 0.1) * mountainDH1)
//   const randNoises2 = [...Array(mountainDX)].fill(null).map((_, ind) => p.noise(1000 + ind * 0.15) * mountainDH2)


function setup() {
    createCanvas(600, 600);

    mountainStartAtY1 = height*0.1;
    mountainStartAtY2 = height*0.14;
    startAtY = height/3;
    vanishingX = width*0.8;

    randNoises1 = [...Array(mountainDX)].fill(null).map((_, ind) => noise(ind * 0.1) * mountainDH1);
    randNoises2 = [...Array(mountainDX)].fill(null).map((_, ind) => noise(1000 + ind * 0.15) * mountainDH2);


    MOON = {
        centerX: width * 0.8,
        centerY: height/4,
        R: width * 0.1,
        movingFactor: width * 0.08 
    }
}

function draw() {
    background(0);

    //MOON
    stroke(255,100)
    fill(255,220)
    const mXoff = map(mouseX, 0, width, 0, MOON.movingFactor);
    const mYoff = map(mouseY, 0, height, 0, MOON.movingFactor);
    const moonX = MOON.centerX - mXoff;
    const moonY = MOON.centerY - mYoff;
    ellipse(moonX, moonY, MOON.R, MOON.R);


    //MOUNTAINS
    drawMountain(mountainStartAtY1 + mYoff * 1.5, randNoises1, 180)
    drawMountain(mountainStartAtY2 + mYoff * 1.8, randNoises2, 100)


    // PLAIN
    const linesNumVertical = 12;
    const linesNumHorizontal = 16;
    const spacing = 1;
    let currentY = startAtY;

    stroke(255)
    fill(255, 100)
    rect(0, startAtY + mYoff, width, height);

    for (let _i = 0; _i < linesNumVertical; _i++) {
      const i = _i + 1;
      line(0, currentY + mYoff, width, currentY + mYoff);
      currentY += spacing * i * i;
    }

    let currentAngle = 0;
    for (let _i = 0; _i <= linesNumHorizontal; _i++) {
      const i = _i + 1;
      const R = 1.42 * width;
      const x2 = vanishingX + R*cos(currentAngle) + mXoff * 3;
      const y2 = startAtY + R*sin(currentAngle) + mYoff * 3;
      line(vanishingX, startAtY + mYoff, x2, y2)
      currentAngle += PI/linesNumHorizontal;
    }
}

function drawMountain(startY, randNoises, fillColour)  {
    stroke(255);
    fill(fillColour);
    beginShape();
    const wOff = 60;
    vertex(-wOff, startY);
    const segW = (width + wOff*2) / randNoises.length;
    for(const [ind, val] of randNoises.entries()) {
        vertex(segW * (ind+1), startY + val);
    }
    vertex(width+wOff, height);
    vertex(-wOff, height);
    endShape(CLOSE);

}