// Tuesday 21 June

function setup() {
    createCanvas(600, 600, WEBGL);
    background(0);
}

function draw() {

  

    push();
        let fillConst = (random(20) + +noise(frameCount/50)*100 +frameCount/3)%360;
        fill(fillConst);
        let r = 300-frameCount/2;
        let ang = frameCount/20;
        let currentScale = 1 -frameCount/500 +random(0.1,0.2) +noise(frameCount/50)/2;
        // translate(width/2, height/2);
        scale(currentScale)
	    rotate(ang)
		translate(r,0)
		// ellipse(0,0,200,200)
        rotateX(frameCount%1000);
        box(30);
    pop();

}