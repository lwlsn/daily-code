// Wed 8 JUne
// I'm def cursed

function setup() {
    createCanvas(600, 600);
    background(0);
    stroke(255); 
    noFill();
    let theta=random(2000)
    let resetter=theta
    let power=200
    for(let y=50; y<250; y+=3){
        theta= resetter
        beginShape()
        for(let x=0; x<width; x+=0.5){
            curveVertex(x, y+ noise(theta)*power) 
            theta+=0.01
    }
    endShape()
    power-=3;
  }



    // Reflections

    for(let y=253; y<450; y+=3){
        theta= resetter
       beginShape()
      for(let x=0; x<width; x+=0.5){
      curveVertex(x+ sin(y)*2, y - (noise(theta) *power)) 
        theta+=0.01
      }
      endShape() 
       power+=3
      
      } 


    //water waves

  let wavetheta=random(1000)
  for(let y= 350; y<height; y+=5){
   beginShape() 
    let middle=random(width)
   
  for(let x=middle-y/4; x<middle+y/4; x+=0.1)  {
    curveVertex(x, y+ noise((x-y)/40) + sin((x-y)/60)*2)
    wavetheta+=0.005
  }
   endShape()
   }
   

}

function draw() {


    
}