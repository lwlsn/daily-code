// Tuesday 3 May

let tex, texSize;
let gl, glsl;


function preload() {
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

function setup() {
    createCanvas(600, 600, WEBGL);

    pixelDensity(2);

    gl = drawingContext;
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.ALWAYS);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
  
}


function draw() {
    background(0);


    let sec = millis() / 1000;


    push();
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);

    for (let i=-100; i < 100 ; i+= 50 ) {
        for (let j=-100; j < 100; j+= 50) {
            for(let k= -100; k < 100; k+= 50) {
                let d = dist(0, 0, 0, i, j, k);
                let s = map(sin(d / (min(width, height) * 0.1 / 2 * sqrt(4)) * TWO_PI - sec), -2, 2, 2, 0);
                 s = floor(s * 6) / 6;
                texture(tex);
                push();
                translate(i, j,k);
                scale(s);
                sphere(20, 32, 32);
                pop();
            }
           
        }
    
    }

 
    


    pop();


    



}