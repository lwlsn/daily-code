// Monday 2 May

// Bank holiday blues
// document.oncontextmenu = () => false;
let vmin, vmax;
let gl, glsl;
let tex, texSize;
let NUM = 5;
let sz;
let spin=0;


function setup() {
    pixelDensity(2);
    createCanvas(600, 600, WEBGL);
    noStroke();
    gl = drawingContext;
    vmin = min(width, height);
    vmax = max(width, height);
    mx = width / 2;
    my = height / 2;
    sz = (vmin * 0.5) / NUM;

    

    // Create texture .. 
    texSize = 256;
    tex = createGraphics(texSize, texSize);
    tex.background(0);
    tex.noStroke();
    for(let i=0;i<texSize*texSize;i++){
        let u=random(-1,1);
        let x=random(2)<1?u**3:(1-u**3);
        let v=random(-1,1);
        let y=random(2)<1?v**3:(1-v**3);
        let d=abs(1-u)+abs(1-v);
        tex.fill(d*255);
        tex.circle(x*texSize, y*texSize, d * 1.5 + 1);
    }
  
}

function draw() {
    
    background(0);

    let sec = millis() / 1000;


    
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.ALWAYS);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    
    push();
    {
          spin+=0.001;
      rotateY(spin);

      texture(tex);
      
      for (let i = 0; i < NUM; i++) {
        let z = (i - NUM /2+0.5) * sz;
        for (let j = 0; j < NUM; j++) {
          let y = (j - NUM /2 +0.5) * sz;
          for (let k = 0; k < NUM; k++) {
            let x = (k - NUM / 2 +0.5) * sz;
            push();
            {
              let d = dist(0, 0, 0, x, y, z);
              let s = map(sin(d / (vmin * 0.1 / 2 * sqrt(4)) * TWO_PI - sec), -1, 1, 1, 0);
              s = floor(s * 6) / 6;
              translate(x, y, z);
              scale(s * sz);
              box(1);
            }
            pop();
          }
        }
      }
    }
    pop();
  }