// Friday 26 August 

// To do -- move forward each line. 

let rows = [], numrows =25;

let colorArray = [];

function setup() {
    createCanvas(600, 600);
    noStroke();

    // for (let i=0; i <numrows; i++) {
    //     rows[i] = new InitialSet(10, 10+(20*i), [color(255), color(255),  color(0), color(11, 138, 72) ], 4);
    // }

    colorArray = [color(255), color(255),  color(0), color(11, 138, 72) ]

    rows[0] = new InitialSet(10, 10+(20*0), colorArray, 4);

    for (let i=1; i < numrows; i++ ) {

        let colorNew = rotateRight(colorArray);

        rows[i] = new InitialSet(10, 10+(20*i), colorNew, 4);
        colorArray = colorNew;
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
        this.xR= x + width/2;
        this.cols= cols;
    }


    first(col) {


        // First square
        fill(col[0]);
        square(this.x, this.y, this.size); 
        this.weave();

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


    weave() {

        fill(this.colArray[2]);
        square(this.xR, this.y, this.size*3);
    }



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

    outArray[0] = inArray[2];
    outArray[1] = inArray[0];
    outArray[2] = inArray[3];
    outArray[3] = inArray[1];

    return outArray;

}