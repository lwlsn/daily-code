// Mon 6 June 
// 6/6 


let r;

let bumpiness = 0.2, thetaVal = 6, phyVal = 5;  

function setup() {
    createCanvas(600, 600, WEBGL);
    colorMode(HSB);
    stroke(199, 10, 88);
    // stroke(321, 20, 100);
    strokeWeight(3);
    noFill();

    r = width/3;
    pixelDensity(1);
}

function draw() {
    
    clear();
    background(0);
 
    orbitControl(4, 4);//Mouse control

    // Frame count rotation
    rotateX(65+frameCount/4);
	rotateY(65+frameCount/4);
	rotateZ(65+frameCount/4);

    // display
    for (let theta=0; theta< PI; theta += 0.02) {
        beginShape(POINTS);
        for (let phy=0; phy< TWO_PI; phy += 0.02) {
            let a = (0, mouseX, 0.2, 0.01);
            let b = (0, mouseY, 6, 0.1);


            let x = r*(1+bumpiness*sin(mouseX/100*theta)*sin(mouseY/100*phy)) * sin(1*theta) * cos(phy);
            let y = r*(1+bumpiness*sin(mouseX/100*theta)*sin(mouseY/100*phy)) * sin(1*theta) * sin(phy);
            let z = r*(1+bumpiness*sin(mouseX/100*theta)*sin(mouseY/100*phy)) * cos(1*theta);


            vertex(x,y,z);

    
        }
        endShape();
    }



}