// Wednesday 15 June
// we back 

let r, r_vel, r_acc; 

let theta, theta_vel, theta_acc;

function setup() {
    createCanvas(600, 600);

    // Initialise values 
    r = height*0.45;
    r_vel = 0;
    r_acc = 0.001;
    theta=0;
    theta_vel=0;
    theta_acc=0.0001;
   
    background(0);
    
}

function draw() {
  

    translate(width/2, height/2);

    // Convert polar to cartesian
    let x = r*cos(theta);
    let y = r*sin(theta);

    ellipseMode(CENTER);
    noStroke();
    fill(200,100);
    ellipse(x, y, 32, 32);

    // Apply acceleration
    theta_vel += theta_acc;
    theta += theta_vel;

    r_vel += r_acc;
    r -= r_vel;

}