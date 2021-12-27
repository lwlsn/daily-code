// Monday 27th December 
// I'm so sick of being home already

let data = [];

function setup() {
   createCanvas(600, 600);
   frameRate(20);
}

function draw() {
    background(0);


    let numOfColumns = parseInt(map(mouseX, 0, width, 1, 8)); 
    let numPerColum = parseInt(map(mouseY, 0, height, 1 , 40));

    for (let i=0; i < numOfColumns; i++) {
        let x1 = width/numOfColumns *(i-1);
        let x2 = width/ numOfColumns;

        data[i] = new Column(x1, x2, random(height/10), numPerColum);
        data[i].display();
    }

}


class Column {

    constructor(x, rectWidth, rectHeight, num) {
        this.x = x;
        this.rectWidth = rectWidth;
        this.rectHeight = rectHeight;
        this.num = num;
    }

    display() {
        for (let i=0; i < this.num; i++ ){
            fill(random(220, 255), 255, random(240, 255));
            rect(this.x, random(height), this.rectWidth, this.rectHeight);
        }
    }
}