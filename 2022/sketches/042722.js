// Wednesday 27 April

// Ep release dayy


let myData;

let spots = [];

let lon, lat, change, ele;

function preload() {
    myData = loadTable('assets/snow-depth.csv', 'csv', 'header');
}

function setup() {
    createCanvas(600, 600);
    colorMode(HSB);

    // get the data
	lat = myData.getColumn('latitude');
	lon = myData.getColumn('longitude');
	change = myData.getColumn('slope_percentperyear');
	ele = myData.getColumn('elevation') ;


    for (let r=0; r<myData.getRowCount(); r++) {
        let row = myData.getRow(r);
        let x = map(row.get('latitude'), min(lat), max(lat), 10, width-10);
        let y = map(row.get('longitude'), min(lon), max(lon), 10, height-10);
        let diam = map(row.get('slope_percentperyear'), min(change), max(change), 3, 11);
        let c = map(row.get('elevation'), min(ele), max(ele), 30, 255); 

        noFill();
        spots.push(new Spot(x,y,diam,c) );
    }


  
}

function draw() {
    background(0);

	for(let i=0; i<spots.length; i++) {
		spots[i].render() ;
	}
    
}


class Spot {
    constructor(x,y,diam, clr) {
        this.x = x;
        this.y = y;
        this.diam = diam;
        this.clr = clr;
        this.t = random(TWO_PI);

    }

    delta(theta, a,b,m, n1, n2, n3) {
        return pow(pow(abs(cos(m * theta / 4.0) / a), n2) + 
				pow(abs(sin(m*theta / 4.0) / b), n3), -1.0 / n1);
    }


    render() {
        stroke(this.clr);
        strokeWeight(random(2,5));

        push();

        translate(this.x, this.y);
        beginShape();

        for (let theta= 0.01; theta <= TWO_PI; theta += 0.01) {
            let rad = this.delta(theta,
                1, //a
                1, //b
                this.diam *10, //m
                0.6 *10, //n1
                sin(this.t) * 0.2 - 0.01, //n2  //use cos and sin to oscillate shape
                cos(this.t) * 0.2 - 0.01// n3
            )

            let x1 = rad*cos(theta)*50;
            let y1 = rad*sin(theta)*50;
            vertex (x1,y1);
        }

        endShape();


        pop();

        this.t += 0.01;

    }
}