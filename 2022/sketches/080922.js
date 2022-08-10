// Tuesday 9 August

// Data river part 3 
// To-do : add left/right pertubation ..

let charset = ':(,:),:S, :O, :/, >:(';
let splitString = charset.split(',');


var drops = []; let numofDrops = 300;

function setup() {
  createCanvas(600, 600);
  
  frameRate(18); //15-20 for nice fallspeed
  
  for (var i = 0; i < numofDrops; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  /* Lower opacity background
  for longer trail 
  (causes old characters to fade
  as new backgrounds are layered on)*/
  background('rgba(0, 0, 0, 0.2)');
  
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();


    
    drops[i].show();
  }
}




//Raindrop-like objects
function Drop() {
    this.spawn = function (y, y2) {
      this.x = random(200, 400);
      
      //Spread out the drops
      this.y = random(y, y2);
      
      // Z value used to adjust size and fall speed  for a 3D effect
      this.z = random(0, 20);
      this.size = map(this.z, 0, 20, 9, 20);
      this.yspeed = map(this.z, 0, 20, 10, 30);
    }
    
    //Spread the drops out far at first
    this.spawn(-900, -10);
  
    this.fall = function () {
      this.y = this.y + this.yspeed;
  
      if (this.y > height) {
        this.spawn(-200, -100);
      }
    };
  
    this.show = function () {
      textSize(this.size); //smaller is "farther away"
      fill(96, 192, 247, random(200)); 
      text(random(splitString), this.x, this.y); //change character for each update
    }
  }



// Re-add if using full canvas 
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }