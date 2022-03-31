// Thurs 31 March

// Happy bday Gemma 


let particles = [];


function setup() {
    createCanvas(600,600, WEBGL);
    background(0);
    // fill(255);
    // colorMode(RGB,360,10,100);
    noStroke();

    let wmargin = width * 0.3;
	let hmargin = height * 0.3;
	let w = width-2*wmargin;
	let h = height-2*hmargin;
	let d = height-2*hmargin;
	let step = 20;


   for (let x=-w/2;x<w/2;x+=step){
		for (let y=-h/2;y<h/2;y+=step){
			for (let z=-d/2;z<d/2;z+=step){
				particles.push(new Particle({x,y,z,}));
			}
		}
	}
}

function draw() {

    background(0)
	orbitControl();
	particles.forEach(p=>{
		p.move();
		p.draw();
	})


}



class Particle {

    constructor({
          x=10,
          y=10,
          z=10,
          size=2,
          speed=5,
      }={}) {
          //this.position;
          this.x = x;
          this.y = y;
          this.z = z;
          this.color = color(
              random(180,200),
              random(0,100),
              random(50,150)
          );
          this.speed = speed;
          this.size = size;
    }
      
      draw(){
          fill(this.color);
          noStroke();
          push();
            translate(this.x,this.y,this.z);
            sphere(this.size);
          pop();
          
          //ellipse(this.x,this.y,this.size,this.size);
      }
      move(){
          ['x','y','z'].forEach(o=>{
              this[o] += random(-this.speed/1,this.speed) ;
              this.speed -= random(0,1)/100;
              //this.size += random(-1,1)/1;
            //   if (this[o] <0) {this[o]=0;}
              if (this[o] >width) {this[o]=height;}
          })	
      }
          
  }