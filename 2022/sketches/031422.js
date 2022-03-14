// Monday 14th March 

// Like ????? 
let DIM=12;

let t=0.01

function setup() {
  createCanvas(600, 600, WEBGL);


}

function draw() {

  background(0);
  stroke(255, 2);
  

  rotateX(t);
  rotateY(t);

  for (let i=0; i <DIM; i++) {
    for (let j=0; j < DIM; j++) {
      for (let k=0; k< DIM; k++) {
        let x = map(i, 0, DIM, -100, 100);
        let y = map(j, 0, DIM, -100, 100);
        let z = map(k, 0, DIM, -100, 100);
       
        strokeWeight(1);
        point(x,y,z);
      }
    }
  }
  
  t += 0.01;
  
}










// Old source, how to do dynamic time in OOP?? 
// let box;
// let boxes = [];
// let t = 0.01;

// function setup() {
//     createCanvas(600, 600);
//     stroke(255, 180);
//     noFill();
//     rectMode(CENTER);

//     for (let i= 0; i < 25; i ++) {
//         boxes[i] = new Box (random(width), random(height), random(200, 300), random(200, 300));
       
//     }

   
// }


// function draw() {

//     background(0);

//     for (let i= 0; i < 25; i ++) {
   
//         boxes[i].display();
//     }

  

//     t += 0.01;

// }


// class Box {


//     constructor(x, y, sizeX, sizeY) {
//         this.x = x; 
//         this.y = y;
//         this.sizeX = sizeX*noise(t); 
//         this.sizeY = sizeY*cos(t);
//     }



//     display() {

//         for (let i=1; i >= 0.1; i-= 0.05){
//             rect(this.x, this.y, this.sizeX*i, this.sizeY*i);
//         }
    
    
    
//         push();
//         translate(this.x, this.y);
//         line(-this.sizeX*0.075, -this.sizeY*0.075, -this.sizeX/2, -this.sizeY/2);
//         line(-this.sizeX*0.075, this.sizeY*0.075, -this.sizeX/2, this.sizeY/2);
//         line(this.sizeX*0.075, -this.sizeY*0.075, this.sizeX/2, -this.sizeY/2);
//         line(this.sizeX*0.075, this.sizeY*0.075, this.sizeX/2, this.sizeY/2);
//         pop();
        
//     }


  
// }