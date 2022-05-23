// Monday 23 May 
let t=1;

function setup() {
    createCanvas(600, 600);


    background(220);
}

function draw() {

    let x = 100 * abs(sin(radians(t)));
    let y = 200 * abs(cos(radians(t)));

  

    for (let i=0; i < width; i++) {
        stroke(x*(sin(t*sin(t+i))));
        line(i,0,i,height/2);
        stroke(y*(cos(t*sin(t+i))));
        line(i,height/2,i,height);

      
    }


    t++;


}
