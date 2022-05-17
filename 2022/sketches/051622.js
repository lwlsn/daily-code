// Monday 16th May 

let result;
let index = 0; 

let size=40;
let regionsX,
    regionsY, 
    cells, margin, offset, d;

function preload() {
    result = loadStrings('assets/sensors.txt');
}

function setup() {
    createCanvas(600, 600);
    cells = 6;
    offset = width / 10;
    margin = offset / 3;
    d = (width - offset * 2 - margin * (cells - 1)) / cells;


}

function draw() {
    background(0);
    stroke(255);
    noFill();

    let out = result[index].split(" ");

    text(out[0], 50, 50, width- 50, 80 );
    text(out[2], 50, 100, width- 50, 80 );
    text(out[3], 50, 120, width- 50, 80 );
    text(out[4], 50, 140, width- 50, 80 );
    text(out[5], 50, 160, width- 50, 80 );
    text(out[6], 50, 180, width- 50, 80 );
    text(out[7], 50, 200, width- 50, 80 );
    text(out[8], 50, 220, width- 50, 80 );


    let vals = [];





    for (let i=0; i < 6; i++) {

        vals[i] = parseFloat(out[3+i]);
        
        // background(0, 10);
        // fill(255, 5);
        noFill();
        stroke(255,202);
  
        // noStroke();


        let xRegions = [100, height/2, 500, height/2, 200, 400];
        let yRegions = [300, 100, 300, 250, 500, 500];


        ellipse(xRegions[i]*vals[i] +50, yRegions[i], 10, 10);



        // left arm
        line(xRegions[0]*vals[0] +50, yRegions[0],  xRegions[3]*vals[3] +50, yRegions[3]);
        // head
        line(xRegions[1]*vals[1] +50, yRegions[1],  xRegions[3]*vals[3] +50, yRegions[3]);
        // right arm
        line(xRegions[2]*vals[2] +50, yRegions[2],  xRegions[3]*vals[3] +50, yRegions[3]);
        // left leg
        line(xRegions[4]*vals[4] +50, yRegions[4],  xRegions[3]*vals[3] +50, yRegions[3]);
        // right leg
        line(xRegions[5]*vals[5] +50, yRegions[5],  xRegions[3]*vals[3] +50, yRegions[3]);

        




    }


    // ellipse(vals[0], height/2, 5, 5);

  



    index++;
}


