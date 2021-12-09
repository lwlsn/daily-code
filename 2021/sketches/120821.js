// Interpretation of https://github.com/sasj/Daily-Art-Processing/blob/master/sketch_161016/sketch_161016.pde

let t, theta; // constants
let maxFrameCount = 200;  // change for fast/slow animation

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background("#242949");
  
  translate(width/2, height/2); // translate 0,0 to center
  t = frameCount/maxFrameCount;
  theta = TWO_PI*t;
  
  for (let x = -175; x <= 175; x += 25 ) {
    for (let y = -100; y <= 155; y+= 50) {
     
        
        
      // let fromColour = color(44, 73, 127);
      // let toColour = color(179, 197, 229);
      
      
      let offset = 50*x+y+y;
      let transparencyMap = map(y, -100, 155, 100, 255);
      let hueMap = map(x, -175, 175, -50, 50 );
      
      let x2= map(cos(-theta+offset), 0, 1, 0, 25);
      let y2= map(cos(-theta+offset), 0, 1, 25, 0);
      let sz= map(sin(-theta+offset), 0, 1, 15, 45);
    
      fill(179+hueMap, 197+hueMap, 229+hueMap, transparencyMap);
      ellipse(x+x2, y-y2, sz, sz);
        
    
      
    }
  }
  
}