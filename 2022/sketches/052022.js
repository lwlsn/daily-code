// Friday 20 May

// Sketch based on: https://openprocessing.org/sketch/544669

let table = [];
let mood = [], subject = [], song= [];

var heart;
var backgroundimg;
var postit;
var postit2;

let moods = [];

var isHearts = false;

function preload() {
    
    table[0] = loadTable("https://www.openprocessing.org/sketch/535053/files/decapitate-2001-12.csv", "csv", "header");
    table[1] = loadTable("https://www.openprocessing.org/sketch/535053/files/decapitate-2002-12.csv", "csv", "header");
    table[2] = loadTable("https://www.openprocessing.org/sketch/535053/files/decapitate-2003-12.csv", "csv", "header");
    table[3] = loadTable("https://www.openprocessing.org/sketch/535053/files/decapitate-2004-12.csv", "csv", "header");
    table[4] = loadTable("https://www.openprocessing.org/sketch/535127/files/decapitate-2004-1.csv", "csv", "header");
    table[5] = loadTable("https://www.openprocessing.org/sketch/535127/files/decapitate-2004-2.csv", "csv", "header");
	heart = loadImage("https://www.openprocessing.org/sketch/538551/files/Emoji_u1f494_svg.png");
	backgroundimg	= loadImage("https://openprocessing-usercontent.s3.amazonaws.com/files/user47030/visual544669/h4cdcbc439bd482e172b486675b797295/computer.jpg");
	postit=loadImage("https://openprocessing-usercontent.s3.amazonaws.com/files/user47030/visual544669/h4cdcbc439bd482e172b486675b797295/post3.jpg");
	postit2=loadImage("https://openprocessing-usercontent.s3.amazonaws.com/files/user47030/visual544669/h4cdcbc439bd482e172b486675b797295/postit.jpg");

}

function setup() {
    createCanvas(600, 600);

    cursor ('https://www.openprocessing.org/sketch/538551/files/Emoji_u1f495_svg.png');

    for (let i=0; i< 6; i++) {
        mood[i] = table[i].getColumn('current_mood');
        subject[i] = table[i].getColumn('subject');
        song[i] = table[i].getColumn('current_music');
    }

}

function draw() {
    background(0);
    // computer();

	

    if (moods.length <  500) {
        moods.push (new Moods());
    }
}


function computer() {

    image(backgroundimg, 0, 0, width, height);

    if (frameCount%100 > 0 && frameCount%100< 10)   {
         backgroundimg.filter(INVERT);
        //  postit.filter(INVERT);
    }
  
    fill (255);
    image(postit, 80, 450, 50, 50);
    textFont('Courier');
	text( "moods as recorded" + "\n" +" in livejournal" + "\n" + "2001 to 2004", 80, 150 );


}


class Moods {

    constructor() {
        this.colors=['#A33B8E','#DF74D2','#F06ED5', '#DCB1D5'];
        this.one = random(mood[0]);
        this.two = random(mood[1]);
        this.three = random(mood[2]);
    	this.four= random (mood[3]);
	    this.five= random (mood[4]);
	    this.six=random (mood[5]);
	    this.color = color (random(this.colors));
	    this.posX= random (100, 600);
	    this.posY=random (100, 550);
	    this.lifespan=155;
        
    }

    update() {
        this.lifespan--;
    }

    //consider lerping a base color and another analogous color here
	compositeColors(){
		var r = red(this.color);
		var g = green(this.color);
		var b = blue(this.color);
		this.color = color(r,g,b, this.lifespan);
	}


}