// Monday 20th December 
// Avoiding Omicron
// adapted from .. https://github.com/sasj/Daily-Art-Processing/blob/master/sketch_161003/sketch_161003.pde


let t, theta;
let numb=3;
let maxFrameCount = 200;
let radius = 150;

function setup() {
    createCanvas(600, 600);
    noFill();
    strokeWeight(2);
    strokeJoin(ROUND);
    strokeCap(ROUND);
}


function draw() {
    background("#40454F");

    translate(width/2, height/2);

    t = frameCount/maxFrameCount;
    theta = TWO_PI*t;


    for (let i=0; i < 360; i +=  20) {
        let angle = radians(i);


        for (let i =0; i < 3; i++) {
            let x = (radius* cos(angle))*i;
            let y = (radius*sin(angle))*i;
            shape(x,y, HALF_PI + radians(i));
        }
 


    }


}



function shape(xpos, ypos, a) {

    push();
    translate(xpos, ypos);
    rotate(a);

    for (let x = -50; x < 56; x += 100) {
        for (let y = -50; y < 56; y += 100) {
            for (let i=0; i <= numb-1; i++) {

                let offset = (TWO_PI/numb*(i));
                let offset2 = (TWO_PI/numb*(i))*2;

                let pos1 = map(sin(-theta + offset), -1, 1, -75, 75);
                let pos2 = map(cos(-theta + offset), -1, 1, 50, -50 );
                let pos3 = map(sin(theta+offset2), -1, 1, -50, 50);
                let pos4 = map(cos(theta+offset2), -1, 1, 100, -50);

                 /* modulo for two colors */
                if (i % 3 == 0) {
                     stroke('#BEE9E8');
                } 
                else if (i %  3 == 1) {
                   stroke('#62B6CB');
                }
                else {
                    stroke('#5FA8D3');
                }
                triangle(0, pos4, pos2, pos3, pos1, pos2);
 


            }
        }
    }

    pop();
}