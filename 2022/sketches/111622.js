// Using webGL in hydra
// p1 = new P5({mode: 'WEBGL'})

p1.draw = () => {
    p1.background(0,0,0, 0);
    p1.noFill();
    p1.strokeWeight(3);
    for (let i=0; i<5; i++) {
      p1.stroke((50*i*time)%255);
      p1.translate(i*20, i*10, 20);
      p1.rotateX(time*(i+0.5));
      p1.rotateY(time*0.2);
      p1.box(200);
    }
  }
  
  // p1.show()
  
p1.hide()
  
s0.init({src: p1.canvas})
  
voronoi().out(o1)
  
src(s0)
  .repeat(1,2)
  .scrollY(-0.0001)
  .blend(solid(), 0.001)
  .modulate(o0, -0.003)
   .out()
  