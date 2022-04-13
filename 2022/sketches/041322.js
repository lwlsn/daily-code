// Wednesday 13 April 

// 0OooO0OooO0

function setup() {
    createCanvas(600, 600);
    // noLoop(); 


    background(0);
    let margin = 50;
    let n = 5;
    let s = (width-2*margin)/n;

    let d1 = 0;
    let d2 = s/2;  

    if (random() < 1/2) {
		[d1, d2] = [d2, d1];
	}

    // Thick Tiles, no outline
    noStroke();
    for (let x = margin+d1; x < width-margin-d1; x += s) {
      for (let y = margin+d1; y < height-margin-d1; y += s) {
        fill(255);
        makeTile(x, y, s);
      }
    }


    // Tile Outlines
    noFill();
    stroke("#6E0E0A");
    strokeWeight(4);
    for (let x = margin+d2; x < width-margin-d2; x += s) {
      for (let y = margin+d2; y < height-margin-d2; y += s) {
        makeTile(x, y, s);
      }
    }
}


function draw() {

    let frameRefresh = frameCount%100;
    if (frameRefresh == 0) setup();
}


function makeTile(x,y,s) {
    beginShape();
    vertex(x+s/2, y);
    if (random() < 1/2) vertex(x+s, y);
    vertex(x+s, y+s/2);
    if (random() < 1/2) vertex(x+s, y+s);
    vertex(x+s/2, y+s);
    if (random() < 1/2) vertex(x, y+s);
    vertex(x, y+s/2);
    if (random() < 1/2) vertex(x, y);
    endShape(CLOSE);

}