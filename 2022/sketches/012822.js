//Friday 28 January

const CELL_SIZE = 1;
const QR_ARRAY_LENGTH = 20;

const CELL_COLOR = 'black';


// QR data module
const gQRModules = [];

let gTargetRow = 0;
let gTargetColumn = 0;

let gMarkXPos = 100;
let gMarkYPos = 200;
let gMarkXDirection = -1;
let gMarkYDirection = -1;


function setup() {
    createCanvas(600, 600);
    fill( CELL_COLOR );
    noStroke();

}


function draw() {
    background(255);
    drawQR();
}

function mousePressed() {
    redraw();
}


  // Draw QR code
function drawQR() {
  
    // Row
    for( let k = 0; k < QR_ARRAY_LENGTH; k++ ){
      
      // Column
      for( let l = 0; l < QR_ARRAY_LENGTH; l++ ){
  
        // For the first time
        const index = k * QR_ARRAY_LENGTH + l;
        if( gQRModules[ index ] === undefined ){
          gQRModules[ index ] = QRCode.create( generateRandomData() ).modules;
        }
  
        const qrModule = gQRModules[ index ];
        const size = qrModule.size;
        const dataArray = qrModule.data;
  
        const C4 = 4 * CELL_SIZE;
        const C29 = 29 * CELL_SIZE;
        const offsetX = C4 + C29 * k;
        const offsetY = C4 + C29 * l;
        
        // QR matrix row
        for( let j = 0; j < size; j++ ){
  
          // QR matrix column
          for( let i = 0; i < size; i++ ){
            
            if( dataArray[ size * j + i ] ){
              square( offsetX + CELL_SIZE * i, 
                      offsetY + CELL_SIZE * j, 
                      CELL_SIZE )
            }
  
          }
  
        }
  
      }
  
    }
  
  }

  // Generate random data
function generateRandomData() {

    // Memo: There was no alignment patter in the data size below 34.
    const size = 35;
    let data = '';
    
    for( let i = 0; i < size; i++ ){
      data += floor( random( 9 ) );
    }
  
    // console.log( data );
    return data;
  
  }
  