// Wednesday 17 August
// 2d-water 
// To-do tomorrow https://www.youtube.com/watch?v=UcdigVaIYAk

let cols, rows;
let current;
let previous;

let dampening =0.985;

let trajectory = [];

let xoff = 0.0; 
let yoff = 0.0;


let backgroundImg;

function preload() {
    backgroundImg=loadImage('assets/koi.jpeg');
}

function setup() {

    pixelDensity(1);
    createCanvas(600, 600);

    image(backgroundImg, 0, 0, width, height);
    noStroke();
    cols = width; 
    rows = height;

    // Initialise with zeroes 
    current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
    previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));



}

function draw() {
    

    let nX = round(random(width)), nY = round(random(height));
    // print(nX)
    background(0);

    previous[nX][nY] = 600;  

    loadPixels();
    for (let i = 1; i < cols - 1; i++) {
        for (let j = 1; j < rows - 1; j++) {
            current[i][j] =  (previous[i - 1][j] +
                previous[i + 1][j] +
                previous[i][j - 1] +previous[i][j + 1]) / 2 
                - current[i][j];
            current[i][j] = current[i][j] * dampening;
            let index = (i + j * cols) * 4;
            pixels[index + 0] = current[i][j];
            pixels[index + 1] = current[i][j];
            pixels[index + 2] = current[i][j];
        }
    }
    updatePixels();
    let temp = previous;
    previous = current;
    current = temp;

    // To do random trajectories
    // xoff = xoff + 0.01;
    // yoff = yoff + 0.01;
    // let nX = round(randomGaussian(0.5, 0.1)*width);
    // let nY = round(noise(yoff)*height);

    //   stroke(255);





}

function mouseDragged() {
    previous[mouseX][mouseY] = 500;
  }