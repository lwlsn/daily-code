// Wed 31 May

// Steaming thru this year ..

let speed = -1, x1 = [], x2 = [], y1= [], ystart=[], yend=[];
let  rots= [];

let nums = 10;

let cols = ['#5B8C5A', '#E3655B', '#F3C98B', '#4C2C69'];

function setup() {
    createCanvas(600, 600);

    let rotsAllowed = [0, PI/6, PI/3, PI/4];

    for (let i=0; i < nums; i++) {
        y1[i] = random(50, 100);
        rots[i] = random(rotsAllowed);
        x1[i] = random( width);
        x2[i] = x1[i]+100; 
        ystart[i] = random(0, 50);
        yend[i] = ystart[i] + round(random(100,200));
    }


    background(0);


    for (let i=0; i<nums; i++) {
        lines(x1[i],  y1[i], x2[i], 10,ystart[i], yend[i], rots[i]);
    }


}

function draw() {
 
   

    if (frameCount%100 == 0) {
        setup();
    }

//     let ystart1= 140, yend1=300; 



//     line(50, ystart1, 50, yend1);
//     line(x2, y1+ystart1, x2, y1+yend1 );
//     line(x2, -y1+ystart1, x2, -y1+yend1);

//     for (let i=ystart1; i <= yend1; i+= increment) {  
//         line(50, i, x2, i+y1 );
//     }

//     y1 += speed;

//     if (y1 < 40 || y1 > 120)  {
//         speed *= -1;
//     }

//    for (let i=ystart1; i<= yend1; i+= increment) {
//         line(50, i, x2,i-y1 );
//    }
}


function lines(x1, y1, x2, increment, ystart, yend, rot) {
    
    strokeWeight(2);
    stroke(random(cols));

    push();
    rotate(rot);
    line(x1, ystart, x1, yend);
    line(x2, y1+ystart, x2, y1+yend );
    line(x2, -y1+ystart, x2, -y1+yend);
    
    for (let i=ystart; i <= yend; i+= increment) {  
        line(x1, i, x2, i+y1);
    }

    for (let i=ystart; i<= yend; i+= increment) {
        line(x1, i, x2, i-y1);
    }

    // y1 += speed;

    // print (y1);

    // if (y1 < ystart)  {
    //     speed *= -1;
    // }

    pop();
}