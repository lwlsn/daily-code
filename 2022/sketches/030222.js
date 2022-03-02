// Wednesday 2 March

let detailX, v;

let randMaterials = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();

  for (let i=0; i <= 144; i++) {
      randMaterials[i] =  [random(230, 255), random(0, 100), random(0, 100)];
  }

  print(randMaterials);
}

function draw() {
    background(0);
    
    rotateY(millis() / 1000);
    rotateX(millis() / 5000);

    let val = frameCount%100;
  
 
    detailX=abs(round(12*sin(val/100))+3);

    ambientLight(200);

    
    for (let i=-300; i< 300; i+=50){
        for (let j=-300; j<300; j+= 50){
           
            let v = (i+j+600)/50; 
          

            push()
            translate(i, j, 0);
            ambientMaterial(randMaterials[v]);
            torus(10, 5, detailX, 12);
            pop()

        }
    }


}