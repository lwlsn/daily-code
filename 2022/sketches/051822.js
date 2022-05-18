// Wednesday 18th May 

// mjm day 


let hackerfont;

let charArray = ['0', 't','𓍊𓋼𓍊𓋼𓍊', '˙ᵕ˙', 'm' , ' '];

let x= 10, y=10;
let levelX = 15;
let levelY = 10;

let column = 0;

let r,r2;


function preload() {
    hackerfont = loadFont('assets/Hack-Regular.ttf');
}



function setup() {
    createCanvas(600, 600);
    fill(255);
    textFont(hackerfont);
    frameRate(60);
   
    // noLoop();
}

function draw() {
    background(0);


    r = random(1);
    r2 = random(1);

    for (let xval=x; xval < width/2-levelX; xval += levelX ) {

        for (let yval =y; yval < height; yval += levelY) {
        if (r >= 0 && r < 0.25) {

            if (r2 >= 0 && r2 < 0.8) {
                text(random(charArray), xval, yval);
            }
            else {
                text(charArray[0], xval, yval);
            }
           
        }
        else {
            text(random(charArray), xval, yval);
        }
      }
    
    }


    for (let xval=width/2+ levelX; xval < width; xval += levelX ) {

        for (let yval =y; yval < height; yval += levelY) {
        if (r >= 0 && r < 0.75) {

            if (r2 >= 0 && r2 < 0.8) {
                text(charArray[0], xval, yval);
            }
            else {
                text(random(charArray), xval, yval);
            }
           
        }
        else {
            text(charArray[1], xval, yval);
        }
      }
    
    }


   

    // else if (r >= 0.25 && r < 0.4) {
    //     text(charArray[1], x, y);
    // }

    // else if (r >= 0.4 && r < 0.45 ) {
    //     text(charArray[2], x, y);
    // }

    // else if (r >=0.45 && r < 0.5) {
    //     text(charArray[3], x, y);
    // }
    // else {
    //     text(charArray[4], x, y);

    // }
    // x += levelX;


  
    //     if (y >= height) {
         
    //         x = width/2 +levelX; 
    //         y= 10;
         
    //         column = 1;
    //     }
    // }
    // else if (column == 1) {
    //     if (x >= width){
    //         x = width/2 +levelX;
    //         y += levelY;
    //     }

    //     if (y >= height) {
    //         x = 10;
    //         y= 10;
    //         column = 0;
    //         background(0);
    //     }
    // }


    

}