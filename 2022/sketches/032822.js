// Monday 28 March 

let DIM=20;

let t=0.01

function setup() {
    createCanvas(600, 600, WEBGL);
}

function draw() {

  background(0);


//   rotateX(noise(t/2)*5);
//   rotateY(noise(t)*5);

    rotateX(sin(t)/5+ noise(t));
    rotateY(cos(t)*2);

  for (let i=0; i <DIM; i++) {
    for (let j=0; j < DIM; j++) {
      for (let k=0; k< DIM; k++) {
        let x = map(i, 0, DIM, -400, 400);
        let y = map(j, 0, DIM, -400, 400);
        let z = map(k, 0, DIM, -400, 400);
       
        strokeWeight(1);
        stroke(255, 20, 20, 100);
        point(x,y,z);
      }
    }
  }
  
  t += 0.01;
}