// Tuesday 17th May

let result;
let index = 0; 
let r = 10;
let theta = 0.01;

let face = ["🥳","😇","😎","🤖","🐲","👽","💩","👦","👩"], faceSelect;

let size=40;
let regionsX,
    regionsY, 
    cells, margin, offset, d;

function preload() {
    result = loadStrings('assets/sensors.txt');
}

function setup() {
    createCanvas(600, 600);
    offset=100;
    faceSelect = random(face);

   
}

function draw() {
    background(0);
    stroke(255);
    noFill();

    let out = result[index].split(" ");
    textSize(12);
    textAlign(CORNER);
    // text(out[0], 50, 50, width- 50, 80 );
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
        
    
        noFill();
        stroke(255,202);
  


        let xRegions = [150, height/2, 450, height/2, 200, 400];
        let yRegions = [300, 150, 300, 250, 500, 500];

        //Sensors
        ellipse(xRegions[i]*vals[i] + offset, yRegions[i], 10, 10);
        // Lower abdomenon
        ellipse(xRegions[3]*vals[3] + offset, yRegions[3]+100, 10, 10);


        // left arm
        line(xRegions[0]*vals[0] + offset, yRegions[0],  xRegions[3]*vals[3] + offset, yRegions[3]);
        line(xRegions[0]*vals[0] + offset, yRegions[0], xRegions[0]*vals[0]+r*cos(theta), yRegions[0]+r*sin(theta));
        // head
        line(xRegions[1]*vals[1] + offset, yRegions[1],  xRegions[3]*vals[3] + offset, yRegions[3]);
        // right arm
        line(xRegions[2]*vals[2] + offset, yRegions[2],  xRegions[3]*vals[3] + offset, yRegions[3]);
        line(xRegions[2]*vals[2] + offset, yRegions[2],  xRegions[2]*vals[2] + 2*offset + r*cos(theta), yRegions[2] + r*sin(theta));
        // torso 
        line(xRegions[3]*vals[3] + offset, yRegions[3], xRegions[3]*vals[3] + offset, yRegions[3]+100);
        // left leg
        line(xRegions[4]*vals[4] + offset, yRegions[4],  xRegions[3]*vals[3] + offset, yRegions[3]+100);
        line(xRegions[4]*vals[4] + offset, yRegions[4],  xRegions[4]*vals[4] +offset/2, yRegions[4]+offset);
        // right leg
        line(xRegions[5]*vals[5] + offset, yRegions[5], xRegions[3]*vals[3] + offset, yRegions[3]+100);
        line(xRegions[5]*vals[5] + offset, yRegions[5],  xRegions[5]*vals[5] +offset, yRegions[5]+offset);

        

        // face 
        textSize(64);
        textAlign(CENTER);
        text(faceSelect, xRegions[1]*vals[1] + offset,  yRegions[1]);

        theta += 0.01;


    }




    index++;
}


