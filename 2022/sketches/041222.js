// Tuesday 12 April 

// miss u whitby

// Inspo.. https://openprocessing.org/sketch/1236670

function setup() {
    createCanvas(600, 600);
    noStroke();
    // noLoop();

    let s = 50;
    
    for (let y = 0; y < height; y += s) {
      let x = 0;
      while (x < width) {
        let w = random([1, 2])*s;
        if (x + w > width) {
          w = width-x;
        }
        makeRect(x, y, w, s);
        x += w;
      }
    }
  }
  
  function draw() {
 
    let frames = frameCount%100;

    if (frames == 0) {
        setup();
    }
  }
  
  function makeRect(x, y, w, h) {
    let colors = [0, 255];
    let r = floor(random(4));
    let n = random([2, 2, 4, 4, 4, 4, 8]);
    
    switch (r) {
      case 0:
        n *= 2;
        // horizontal lines
        for (let i = 0; i < n; i++) {
          fill(colors[i%2]);
          rect(x, y+h*i/n, w, h/n);
        }
        break;
      case 1:
        // vertical lines
        n *= 2;
        for (let i = 0; i < n*w/h; i++) {
          fill(colors[i%2]);
          rect(x+h*i/n, y, h/n, h);
        }
        break;
      case 2:
        // checkerboard
        for (let i = 0; i < n*w/h; i++) {
          for (let j = 0; j < n; j++) {
            fill(colors[(i+j)%2]);
            square(x+h*i/n, y+h*j/n, h/n);
          }
        }
        break;
      case 3:
        // crossed checkerboard
        for (let i = 0; i < n*w/h; i++) {
          for (let j = 0; j < n; j++) {
            fill(colors[0]);
            square(x+h*i/n, y+h*j/n, h/n);
            fill(colors[1]);
            triangle(x+h*i/n, y+h*j/n, x+h*(i+1)/n, y+h*j/n, x+h*i/n, y+h*(j+1)/n);
          }
        }
        break;
    }
    
    shuffle(colors, true);
    
    if (random() < 0.2) {
      fill(colors[0]);
      let w1 = floor(random(w-h)/h)*h
      square(x+w1, y, h);
      if (random() < 0.01) {
        fill(colors[1]);
        circle(x+w1+h/2, y+h/2, h*3/4);
      }
    }
    
    if (random() < 0.1 && r != 3) {
      fill(colors[1]);
      let corner = random();
      if (corner < 1/4) {
        // top left
        triangle(x, y, x+h, y, x, y+h);
      } else if (corner < 2/4) {
        // bottom left
        triangle(x, y, x+h, y+h, x, y+h);
      } else if (corner < 3/4) {
        // top right
        triangle(x+w-h, y, x+w, y, x+w, y+h);
      } else {
        // bottom right
        triangle(x+w-h, y+h, x+w, y, x+w, y+h)
      }
    }
  }