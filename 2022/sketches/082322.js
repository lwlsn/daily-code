// Tuesday 23 August 
let row1;


function setup() {
    createCanvas(600, 600);
    noStroke();
    row1 = new InitialSet(10, 10, [color(255), color(255),  color(0), color(11, 138, 72) ], 4);

    row2 = new InitialSet(10, 10, [color(255), color(255),  color(0), color(11, 138, 72) ], 4);

}


function draw() {
    background(220);

    row1.display();

    
}


class InitialSet {
    constructor(x, y,colArray, cols){
        this.x =x;
        this.y =y;
        this.col = colArray;
        this.size = 5;
        this.cols= cols;
    }


    first() {

        // First square
        fill(this.col[0]);
        square(this.x, this.y, this.size); 

        // Second square 
        fill(this.col[1]);
        square(this.x+2*this.size, this.y, this.size); 

        //Third square
        fill(this.col[2]);
        square(this.x, this.y+2*this.size, this.size); 

        //Fourth square
        fill(this.col[3]);
        square(this.x+2*this.size, this.y+2*this.size, this.size); 

    }

    second() {
      
        // To-do implement as recursion
        push(); 
        translate(this.x+this.size*3, 0);
        fill(255);
        this.first();
     
            push(); 
            translate(this.x+this.size*3, 0);
            fill(255);
            this.first();
                push(); 
                translate(this.x+this.size*3, 0);
                fill(255);
                this.first();
                    push(); 
                    translate(this.x+this.size*3, 0);
                    fill(255);
                    this.first();
                        push(); 
                        translate(this.x+this.size*3, 0);
                        fill(255);
                        this.first();
                            push(); 
                            translate(this.x+this.size*3, 0);
                            fill(255);
                            this.first();
                                push();
                                translate(this.x+this.size*3, 0);
                                fill(255);
                                this.first();
                                    push();
                                    translate(this.x+this.size*3, 0);
                                    fill(255);
                                    this.first();
                                        push();
                                        translate(this.x+this.size*3, 0);
                                        fill(255);
                                        this.first();
                                        pop();
                                    pop();
                                pop();
                            pop();
                        pop();
                    pop();
                pop();
            pop();
        pop();


     

    }

    // To do implement this..
    recursion() {
        push(); 
                translate(this.x+this.size*3, 0);
                fill(255);
                this.first();

        pop();

    }





    display() {
        this.first();
        this.second();
      
    }


  
}