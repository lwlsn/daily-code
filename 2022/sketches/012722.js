// Thursday 27th January 

let barcodes = [];
let randColours = [];

function setup() {
  
    createCanvas(600, 600);
    noStroke();

    for (let i=0; i <1; i++) {
        barcodes[i] = new Barcode(100, 100, 400);
    }

    for (let j=0; j< 1000; j++) {
        randColours[j] = randomColour(random(1));
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
            let r = random(1);
            
            // Top half
            for (let j=50; j< this.size-50 ; j += 10) {
                for (let k=10; k < 50; k += 10) {
                    
                        fill(randColours[(j+k)%100]);
                        rect(j, k, 10, 10);
                    }
                 
            }

            // Middle half
            for (let j=10; j< this.size-10 ; j += 10) {
                for (let k=50; k <350; k += 10) {
                    
                        fill(randColours[(j+k)%100]); // fix this line to randomly select colour by column.  
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

function randomColour(r) {
    if (r < 0.5) {
        return 0;
    } else {
        return 255;
    }
}