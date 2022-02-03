// Wednesday 2 February 2022 
// Hmm webGL you tricky.. 



function setup() {
    createCanvas(600, 600, WEBGL);

    noStroke();

  }
  
  function draw() {
    background(0);
     // Lighting, Camera, Material
  
    // pointLight(255, 255, 255, mouseX - width / 2, mouseY-height/2, 200);
    ambientLight(200);
    ambientMaterial(100);

    // Base
    rotateY(frameCount * 0.01);
    push();
    box(200, 250, 20);
    pop();

    // Cutout
    push();
    translate(100, -125, 0);
    ambientMaterial(0);
    rotateZ(PI/4);
    box(50, 50, 20);
    pop();    


    // Sticker
    push();
    translate(0, 70, 11);
    ambientMaterial(255);
    plane(150, 100);
        push()
        translate(0, 40, 0);
        ambientMaterial(255, 0, 0);
        plane(150, 20);

        translate(0, -40, 0);
        stroke(255, 0, 0);
        // fill(255,0,0);
        line(-50, 20, 0, 50, 20, 0);
        line(-50, 10, 0, 50, 10, 0);
        line(-50, 0, 0, 50, 0, 0);
        noStroke();
        pop();

    pop();


    // Top part 

    push();
    translate(0, -90, 11);    
    ambientMaterial(50);
    plane(110, 70);

        push();
        translate(10, 0, 0.5);
        ambientMaterial(180);
        plane(80, 70);
        pop();


        push();
        translate(30, 0, 1);
        ambientMaterial(20);
        plane(20, 50);
        pop();
    pop();


    // Back 
    push();
    translate(0, 0, -11);
    fill(240);
    ellipse(0, 0, 50, 50, 50);

    fill(100);
    translate(0, 0, -1);
    ellipse(0, 0, 20, 20, 50);
    pop();

  }