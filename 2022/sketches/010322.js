// Monday 3rd January 
// Back at it I guess :S

let spanWidth, span = 10;

function setup() {
    createCanvas(600, 600);

    spanWidth = height/ span;

    // frameRate(15);

    noFill();
    stroke(200);

}

function draw() {

    background(0, 50);

    translate(width/2, height/2);
	translate(-span*spanWidth/2,-span*spanWidth/2);

    for (let i=0; i<= span; i++) {
        for (let j=0; j <= span; j++) {
            let x = i*spanWidth, y = j*spanWidth;
            push();
                translate(x, y);
                stroke(200,noise(i*j+frameCount)*100+50);
                let pan = int(noise(i*1000+j*100000)*4+4);
                rotate(pan*PI/2);

                for (let k=0; k< 3; k++) {
                    let p= frameCount/noise(i*j*k)/100;
                    arc(0,0,spanWidth*2/k,spanWidth*2/k, pan*PI/2 + 0 + p,pan*PI/2 +PI/2+p);
                }
            pop();
        }
    }

}

