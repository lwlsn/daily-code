// Thursday 10th March 


let R;
let perspectiveK = 0.4;

let rectR = 10;
let generMode = true;


function setup() {
    createCanvas(600, 600);
    R=Math.min(width,height)/3;

    sphereFun = sphericalCoordinate(perspectiveK,width,height,width/2,height/2,PI, PI);
  
	vMax=Math.max(width,height);
	vRad=vMax/PI;
	

	rectMode(RADIUS);

	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 0;

	frameRate(120);

}

function draw() {
    drawingContext.shadowBlur = 2;
	drawingContext.shadowColor = "#00000066"
	
	background(0,8);

    noFill();
	stroke(255);

    if(generMode==true){
        dx=random()*width;
        dy=random()*height;
        dR=R;
        dR2=random()*R;
        noCursor();
    } else{
        
        cursor();
            
        dx=-width/2+mouseX;
        dy=mouseY;
        dR=R;
        dR2=noise(mouseX/10+mouseY/10)*R;
    }

    let d=10;
	for(let i=0,ii=10;i<ii;i++){
		
		let k=1-i/ii;
		stroke(168,k*255);

		strokeWeight(k*2);
		point(Math.floor(width*noise(frameCount*k)/d)*(d+1),Math.floor(height*noise(frameCount*k*k)/d)*(d+1));
		point(Math.floor(width*Math.random()/d)*(d+1),Math.floor(height*Math.random()/d)*(d+1));

		
		
		strokeWeight(k*2);
		[x1,y1]=sphereFun(dx+rectR,dy+rectR,dR-dR2*i/ii);
		[x2,y2]=sphereFun(dx-rectR,dy+rectR,dR-dR2*i/ii);
		[x3,y3]=sphereFun(dx-rectR,dy-rectR,dR-dR2*i/ii);
		[x4,y4]=sphereFun(dx+rectR,dy-rectR,dR-dR2*i/ii);

		push();
		translate(width/2,height/2)
			// rect(Dx,Dy,rectR/perspect,rectR/perspect);
		fill(0,k);
		noStroke();
		drawingContext.shadowBlur = dR2*k;
		drawingContext.shadowColor = "#00000099"
		circle(0,0,R*k*(noise(frameCount*k)*1+1));
		
		drawingContext.shadowBlur = dR2*k;
		drawingContext.shadowColor = "#FFFFFFff"
		
		stroke(255,k*255);
		noFill();
		quad(x1, y1, x2, y2, x3, y3, x4, y4);

		pop();
		
		
	}


    
}



function sphericalCoordinate(perspectiveK,W,H,midX,midY,radianX, radianY){
	
	return function(ix,iy,R){
		let x = ix - midX;
		let y = iy - midY;

		let whMin = Math.min(W, H);
		// let whMax = Math.max(W, H);
		// x=constrain(x, -whMin/2, whMin/2);
		// y=constrain(y, -whMin/2, whMin/2);

		let radx = x / (whMin / 2) * (radianX / Math.PI);
		let rady = y / (whMin / 2) * (radianY / Math.PI);


		let dx = R * Math.sin(radx * Math.PI / 2) * Math.cos(rady * Math.PI / 2);
		let dy = R * Math.sin(rady * Math.PI / 2);// * Math.cos(radx *Math.PI/2 ) ;
		let dz = R * Math.cos(radx * Math.PI / 2) * Math.cos(rady * Math.PI / 2); // * Math.sin(rady);

		let perspect = Math.pow(perspectiveK, dz / R); //Math.pow(map(R,0,whMax/2,1,perspectiveK),dz/R*2);
		let Dx = dx / perspect;
		let Dy = dy / perspect;
	
		return [Dx,Dy,perspect];
	}
}

function mouseClicked(){
    generMode=!generMode;
}
        
function windowResized(){
    setup();
}
    