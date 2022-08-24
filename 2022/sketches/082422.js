// Wednesday 24 August 

let rows = [], numrows =25;

function setup() {
    createCanvas(600, 600);
    noStroke();

    for (let i=0; i <numrows; i++) {
        rows[i] = new InitialSet(10, 10+(20*i), [color(255), color(255),  color(0), color(11, 138, 72) ], 4);
    }


    background(220);


    for (let i=0; i <numrows; i++) {
               rows[i].display();
    }
}

function draw() {
   


}


class InitialSet {
    constructor(x, y,colArray, cols){
        this.x =x;
        this.y =y;
        this.colArray = colArray;
        this.size = 5;
        this.cols= cols;
    }


    first(col) {

        // First square
        fill(col[0]);
        square(this.x, this.y, this.size); 

        // Second square 
        fill(col[1]);
        square(this.x+2*this.size, this.y, this.size); 

        //Third square
        fill(col[2]);
        square(this.x, this.y+2*this.size, this.size); 

        //Fourth square
        fill(col[3]);
        square(this.x+2*this.size, this.y+2*this.size, this.size); 

    }

    second() {
      
        // To-do implement as recursion
        push(); 
        translate(this.x+this.size*3, 0);
        this.colArray = rotateLeft(this.colArray);
        this.first(this.colArray);
     
            push(); 
            translate(this.x+this.size*3, 0);
            this.colArray = rotateLeft(this.colArray);
            this.first(this.colArray);

                push(); 
                translate(this.x+this.size*3, 0);
                this.colArray = rotateLeft(this.colArray);
                this.first(this.colArray);

                    push(); 
                    translate(this.x+this.size*3, 0);
                    this.colArray = rotateLeft(this.colArray);
                    this.first(this.colArray);

                        push(); 
                        translate(this.x+this.size*3, 0);
                        this.first(this.colArray);

                            push(); 
                            translate(this.x+this.size*3, 0);
                            this.colArray = rotateLeft(this.colArray);  
                            this.first(this.colArray);

                                push();
                                translate(this.x+this.size*3, 0);
                                this.colArray = rotateLeft(this.colArray);    
                                this.first(this.colArray);
                                    
                                    push();
                                    translate(this.x+this.size*3, 0);
                                    this.colArray = rotateLeft(this.colArray);
                                    this.first(this.colArray);
                                        
                                        push();
                                        translate(this.x+this.size*3, 0);
                                        this.colArray = rotateLeft(this.colArray);
                                        this.first(this.colArray);
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
    // recursion() {
    //     push(); 
    //             translate(this.x+this.size*3, 0);
    //             fill(255);
    //             this.first();

    //     pop();

    // }





    display() {

    
        this.first(this.colArray);
        this.second();
      
    }


  
}


function rotateLeft(inArray) {

    let outArray = [];
   
    outArray[0] = inArray[1];
    outArray[1] = inArray[3];
    outArray[2] = inArray[0];
    outArray[3] = inArray[2];

   return outArray;
}

function rotateRight(inArray) {

    let outArray = [];

    outArray[0] = inArray[inArray.length-1];

     
    for (let i=1; i <= inArray.length-1; i++) {
        outArray[i] = inArray[i-1];
       
    }

    return outArray;

}