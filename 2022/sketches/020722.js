// Monday 7 Feb 
let c1 = 0.4, c2 = 0.95, c3 = 10.0, rho= 1.0;
let x1 = 0.1, y1 = 0.1;
let scalar = 80;
let xoff = 210, yoff = 270;


function setup() {
    createCanvas(600, 600);
  
}


function draw() {

    background(0);
    for (let i=0.1; i< 5000; i++) {

    
        let temp = c1 -c3 / (1.0 + x1*x1 + y1*y1);
        let sin_temp = sin(temp);
        let cos_temp = cos(temp);

        let xt = rho + c2 * (x1 * cos_temp - y1 * sin_temp);
        y1 = c2 * (x1 * sin_temp + y1 * cos_temp);
		x1 = xt;

        let j = x1 * scalar + xoff;
        let k = y1 * scalar + yoff;

       
        strokeWeight(2);
        stroke(255);
        point(j, k);
        

    }
    c3 += 0.05;
    c2 -= 0.001;

    // print(c3);   
}