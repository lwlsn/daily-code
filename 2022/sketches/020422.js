// Friday 4th February 

// Train from sheff 

let hackerfont;
let chars = ['a','g', 't', 'c'];
let charrArray = [];
let t, theta;
let maxFrameCount = 100; // speed of animation
let numInArray =  14*5;

function preload() {
    hackerfont = loadFont('assets/Hack-Regular.ttf'); 
}

function setup() {
    createCanvas(600, 600);

    for (let i=0; i < numInArray; i++) {
        charrArray[i] = random(chars);

    }

    // frameRate(20);

}

function draw() {
    background(0);

    translate(width/2, height/2); // translate 0,0 to center
    t = frameCount/maxFrameCount;
    theta = TWO_PI*t;

    stroke(55);
    fill(255, 180); 



    for (let x = -375; x <= 375; x +=26 ) {
        for (let y = -300; y <= 305; y+= 55) {
         
          
          
          let offset = 50*x+y+y;
          let transparencyMap = map(y, -300, 305, 100, 255);
          let hueMap = map(x, -375, 375, -50, 50 );
          
          let x2= map(cos(-theta+offset), 0, 1, 0, 25);
          let y2= map(sin(-theta+offset), 0, 1, 0, 17);
          let sz= map(sin(-theta+offset), 0, 1, 15, 30);
        
          fill(179+hueMap,  transparencyMap);
          textSize(sz);
        //   let r = floor(random(14*5));
        //   print(r);
          text(random(charrArray), x+x2, y-y2);
        
          
        }
      }


    
}