// Monday 23 January
// Back at it.. wrong date tho


let rand = [];
var charset = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
charset = charset.split("");

// let charset = ':(,:),:S, :O, :/, >:(';
// let splitString = charset.split(',');

// let drops = [];
// let numDrops = 150;
let hackerfont;

let x= [10, 10, 10], y=[130, 340, 550];
let xSpacing = [];


function preload() {
    hackerfont = loadFont("assets/Hack-Regular.ttf");
}

function setup() {
    createCanvas(600, 600);
    frameRate(20);    
    for (let i=0; i < 6; i++) {
        rand[i] = random(0, 3);
    }

    for (let i=0; i< 3; i++) {
        xSpacing[i] = floor(random(30));
    }

    fill(255);
    // textFont(hackerfont);

   
    

}

function draw() {
    background(20, 70);


    if (frameCount % 200 == 0) {
        for (let i=0; i<6; i ++) {
            rand[i] = random(0, 3);
        }
    } 

    for (let i=0; i < width; i += random(100)) {
        for (let j=0; j< height; j+= 200) {
            for (let k=0; k< 6; k++) {
                createLines(i, j, rand[k], rand[k], 100);
            }
         
        }
        
    }
   

    for (let i=0; i < x.length; i++) {
        for (let j= 0; j <= 30; j += 15) {
            text(random(charset), x[i] + random(-50, 10), y[i] +j);
        }

    }
    

    for (let i=0; i < x.length; i++) {
        x[i] += xSpacing[i];

        if (x[i] > width) {
            x[i] = random(-10,0);
        }
    }
   

  



}


function createLines(xLoc, yLoc, numLines, spacing, sizeOf) {

    let num = numLines*spacing;

  
    for (let i=0; i < num; i += spacing ) {
      stroke(255);
      strokeWeight(random(3));
      line(xLoc + i, yLoc , xLoc+ i, yLoc +  sizeOf );
    }
}


// class Drop {
//     constructor(x,y, speed) {
//         this.x = x;
//         this.y = y;
//         this.xspeed = speed;
//     }

//     fall() {
//         this.x += this.xspeed;
//         this.y = 300;


//         if (this.x > width) {
//             this.x = random(-100, -10);
//         }
//     }

//     show() {
//         textSize(50);
//         fill("#F00");
//         textFont(hacker);
//         text("a", this.x, this.y)
//     }


// }


