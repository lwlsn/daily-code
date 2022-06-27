// Mon 27 June 


let f=0;

function setup() {
    createCanvas(600, 600, WEBGL);
    noStroke();
}

function draw() {
    background(0);

    let locX = mouseX - width / 4;
    let locY = mouseY - height / 4;

    ambientLight(50);
    [2,1,-2].map(i=>spotLight(width,height,width,0,99*i,width,0,-.5*i,-1))
    spotLight(66 , 135 , 245, locX, locY, 100, -1, -1, 1, Math.PI / 16);

    let D = width*2;
    box(D);

    let v=33;
    for (let z=0; z< D;  z+= 2) {
        push()
        n=noise(z,f/99)
        V=(n*3)*v
        rotate(V+n*PI*4+f/4)
        translate(V+99,0,-width+(z+90*f)%D)
        box(1,40-n*30,30)
        pop( v=-v)

    } 

    f += 0.01;
}