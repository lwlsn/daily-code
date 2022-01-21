// Friday 21 Jan 22 
// Cool date, inspo https://www.instagram.com/p/CTU_QuZsFas/

let hackerfont;

let charArray = ['0', ' ', 'T', 'd', 'm' ];

let x= 10, y=10;
let levelX = 15;
let levelY = 10;

let column = 0;


function preload() {
    hackerfont = loadFont('assets/Hack-Regular.ttf');
}



function setup() {
    createCanvas(600, 600);
    fill(255);
    background(20);
    textFont(hackerfont);
}

function draw() {


    let r = random(1);
    let r2 = random(1);

    if (r >= 0 && r < 0.5) {

        if (r2 >= 0 && r2 < 0.8) {
            text(charArray[0], x, y);
        }
        else {
            text(random(charArray), x, y);
        }
       
    }


    else if (r >= 0.5 && r < 0.7) {
        text(charArray[1], x, y);
    }

    else if (r >= 0.7 && r < 0.8 ) {
        text(charArray[2], x, y);
    }

    else if (r >=0.8 && r < 0.9) {
        text(charArray[3], x, y);
    }
    else {
        text(charArray[4], x, y);

    }

    x += levelX;

    if (column == 0) {
        if (x >= width/2 - levelX){
            x = 10;
            y += levelY;
    
        }
    
        if (y >= height) {
         
            x = width/2 +levelX; 
            y= 10;
         
            column = 1;
        }
    }
    else if (column == 1) {
        if (x >= width){
            x = width/2 +levelX;
            y += levelY;
        }

        if (y >= height) {
            x = 10;
            y= 10;
            column = 0;
            background(0);
        }
    }

    print(column);
    

}