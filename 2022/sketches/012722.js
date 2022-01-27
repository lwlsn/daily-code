// Thursday 27th January 

// Accidental pattern ..

let barcodes = [];
let randColours = [];
let black, white;
let colourArray= [];
let topColorArray = [];

function setup() {
  
    createCanvas(600, 600);
    noStroke();
    // noLoop();

    //INIT
    for (let i=0; i <1; i++) {
        barcodes[i] = new Barcode(100, 100, 400);
    }

    black = color(0);
    white = color(255);
    colourArray = [black, white];

    for (let i=0; i < 120; i ++) {
        topColorArray[i] = floor(random(2));

    }

    for (let i=0; i < 2000; i++) {
        randColours[i] = random(colourArray);
    }


}


function draw() {
  
 
    background(0);

     for (let i=0; i <1; i++) {
        barcodes[i].display();
    }
}


class Barcode {
    constructor(x, y,size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }


    display() {
        fill(255);
        square(this.x, this.y, this.size); 


        // Corner squares 
        push();
        translate(this.x+30, this.y+30);
        rectMode(CENTER);
        fill(0);
        rect(0, 0, 40, 40);
        fill(255);
        rect(0, 0, 30, 30);
        fill(0);
        rect(0, 0, 20, 20);
        pop();
        

        push();
        translate(this.x+this.size-30, this.y+30);
        rectMode(CENTER);
        fill(0);
        rect(0, 0, 40, 40);
        fill(255);
        rect(0, 0, 30, 30);
        fill(0);
        rect(0, 0, 20, 20);
        pop();

        push();
        translate(this.x+30, this.y+this.size-30);
        rectMode(CENTER);
        fill(0);
        rect(0, 0, 40, 40);
        fill(255);
        rect(0, 0, 30, 30);
        fill(0);
        rect(0, 0, 20, 20);
        pop();


        // smaller squares 
        rectMode(CORNER);
        push();
            translate(this.x, this.y);
        
            
           //  Top half
            
            for (let j=50; j< this.size-50 ; j += 10) {
                for (let k=10; k < 50; k += 10) {
              
                
                    fill(randColours[(j+k)%100]); // fix this line to randomly select colour by column.  
                
                    rect(j, k, 10, 10);
                    

                }
                    
                    
                 
            }

            // Middle half
            for (let j=10; j< this.size-10 ; j += 10) {
                for (let k=50; k <350; k += 10) {
                    
                        fill(randColours[(j+k)%100]); // fix this line to randomly select colour by column.  
                        // fill(randColours[j]%this.size);
                        rect(j, k, 10, 10);
                    }
                 
            }

            // Bottom half 

            for (let j=50; j< this.size-10 ; j += 10) {
                for (let k=350; k < this.size-10; k += 10) {
                    
                        fill(randColours[((j+k)%100)]); // fix this line to randomly select colour by column.  
                        rect(j, k, 10, 10);
                    }
                 
            }  
        
        pop();
     
    }
}


function chooseColour(r) {
    if (r < 0.5) {
        return black;
    }
    else {
        return white;
    }
}