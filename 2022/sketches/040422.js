// Monday 4th of April

// 04/04/22 all fours 

let data, min, max;

let size = 40;
let t = 0.01;

function setup() {
    createCanvas(600, 600);
    data = createVector(random(1), random(1));
    print(data);

}

function draw() {
    background(0);

    push();
    
    translate(width/2, height/2);
  
    let v0 = createVector(0, 0);
    let v1 = createVector(sin(t)*200 - width/2, sin(t)*200 - height/2);
  
    drawArrow(v0, v1, 'red', t);
    v1.normalize();
    drawArrow(v0, v1.mult(size), 'blue', t);
  
    noFill();
    stroke(255);
    ellipse(0, 0, size * 2);
 

    pop();


    t+= 0.01;
  }
  
  // draw an arrow for a vector at a given base position
  function drawArrow(base, vec, myColor,t) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    rotate(t);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }

// function draw() {
//     background(0);


//     // for (let i=0; i < 4; i++ ) {
//     //     data[i] += 0.01;
//     //     // data[i] = map(data[i], min, max, 0, 1);
//     //     // data[i] += noise(1);
//     // }

//     data = [3,4,10, 2];

//     data = normalizeArray(data);

//     print(data);


// }


// function normalize(min, max) {
//     var delta = max - min;
//     return function (val) {
//         return (val - min) / delta;
//     };
// }

// function normalizeArray(array) {
//     var minValue = Math.min(...array); //if you use underscore _.min(array)
//     var maxValue =  Math.max(...array);//if you use underscore _.max(array)
//     return array.map(normalize(minValue, maxValue));
// }

