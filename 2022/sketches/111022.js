// We're back 



let pageNo =1;

// To do, make data object type .. 
let basicNotes = [[0,0, 0, 0], //rest
                  [0,0, 0, 1], // c4
                  [0,0,1,0],   // cs4
                  [0,0,1,1],   // d4
                  [0,1,0,0],   // ds4
                  [0,1,0,1],   // e4  
                  [0,1,1,0],   // f4 
                  [0,1,1,1],   // fs4
                  [1,0,0,0],   // g4
                  [1,0,0,1],   // gs4
                  [1,0,1,0],   // a4
                  [1,0,1,1],   // as4 
                  [1,1,0,0],   // b4
                  [1,1,0,1],   // +12
                  [1,1,1,0],   // half length
                  [1,1,1,1]];  // double length
let basicNotesText = ["~","c4", "cs4", "d4", "ds4", "e4", "f4", "fs4", "g4", "gs4", "a4", "as4", "b4", "+12", "half length", "double length"];


let loadNotes = [];
let numLoadNotes = 16;



// To do--> parse between standard notation and binary notation

let loadRainNotes = [   [1,0,1,0], [1,1,1,1], 
                        [0,1,1,1], [1,1,1,1],                                           [1,0,1,0], [1,0,1,0],
                        [0,1,0,0], [1,1,1,1],
                        [1,0,1,0], [1,0,1,0],
                        [0,1,1,1], [1,1,0,0],
                        [1,0,1,0], [1,0,1,0],
                        [0,1,1,1], [1,1,1,1]
                       ];
let displayRainNotes = [];

let loadReichNotes = [[0,1,0,1], [0,1,1,1], [1,1,0,0],[0,0,1,0],  [0,0,1,1],[0,1,1,0] ];
let displayReichNotes = [];



function setup() {
  createCanvas(600, 600);
  
  for (let i=0; i< numLoadNotes; i++) {
    loadNotes[i] = new EighthNote(50, 100+(i*25), basicNotes[i]);
    
  }
  
  for (let i=0; i < loadRainNotes.length; i++) {
    displayRainNotes[i] = new EighthNote(50+(i*22), 100,loadRainNotes[i]);
    
    displayReichNotes[i] = new EighthNote(50+(i*22), 220,loadReichNotes[i]);
  }
  noStroke();
  rectMode(CENTER);
}



function draw() {
  background(220);
  
  if (pageNo == 1) {
    loadPage();
  }

  else {
    patternPage();
  }
  
}

function mouseClicked() {
  pageNo = 2;
}


function loadPage() {
  
  textSize(28);
  text("Encoding Notes",150, 50);
  
  
  textSize(18);
  for (let i=0; i < loadNotes.length; i++) {
      loadNotes[i].display();
  }
  

  
  for (let i=0; i< loadNotes.length; i++) {
  
    text(basicNotesText[i],100, 110+(i*25) );
  }

}

function patternPage() {
  // print("patternPage");
  
  textSize(28);
  fill(0);
  text("Rain Rain Transcription",100, 50);
  
  for (let i=0; i < loadRainNotes.length; i++) {
    displayRainNotes[i].display();
  }
  
  for (let i=0; i < loadReichNotes.length; i++) {
    displayReichNotes[i].display();
  }
  
  
  textSize(28);
  fill(0);
  text("Piano Phase Transcription",100, 200);
}


class EighthNote {
 
    constructor(x, y, noteIn) {
      this.noteIn = noteIn;
      this.x=x;
      this.y=y;
      this.size =10;
    }
    
    
    display() {
      
      
      for (let i=0; i < this.noteIn.length/2; i++) {
        if (this.noteIn[i] == 0) {
          fill(255);
        } else {
          fill(0);
        }
        rect(this.x+i*this.size, this.y, this.size);
      }
      
      for (let i=this.noteIn.length/2; i < this.noteIn.length; i++) {
          if (this.noteIn[i] == 0) {
          fill(255);
        } else {
          fill(0);
        }
        rect(this.x+(i-this.noteIn.length/2)*this.size, this.y+this.size, this.size);
      }
      
      
    }
    
    
    
  }



class SixteenthNote {
 
    constructor(x, y, noteIn) {
      this.noteIn = noteIn;
      this.x=x;
      this.y=y;
      this.size =10;
    }
    
    
    display() {
      
      
      for (let i=0; i < this.noteIn.length/2; i++) {
        if (this.noteIn[i] == 0) {
          fill(255);
        } else {
          fill(0);
        }
        rect(this.x+i*this.size, this.y, this.size);
      }
      
      for (let i=this.noteIn.length/2; i < this.noteIn.length; i++) {
          if (this.noteIn[i] == 0) {
          fill(255);
        } else {
          fill(0);
        }
        rect(this.x+(i-this.noteIn.length/2)*this.size, this.y+this.size, this.size);
      }
      
      
    }
    
    
    
  }