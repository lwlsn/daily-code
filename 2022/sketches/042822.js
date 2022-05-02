// Thursday 28 April

// Latent anger issues

let myData, lon, lat, diam_cm, types, treeCols;

let trees = [];

// preload the csv file
function preload() {
	myData = loadTable('assets/Tree_Inventory-2.csv', 'csv', 'header') ;
}

function setup() {
    createCanvas(600, 600, WEBGL);
    colorMode(HSB);
    lat = myData.getColumn('X');
    lon = myData.getColumn('Y');

    // print([min(lat), max(lat), min(lon), max(lon)]);

    diam_cm = myData.getColumn('dbh_cm');
    types = myData.getColumn('TreeType');

    // print(types);

    let treeCols = {};
    let unique = types.filter(onlyUnique);
    for (let i=0; i<unique.length; i++) {
        treeCols[unique[i]] = floor(random(360));
    } 

    print(treeCols);
    noFill();
    doOnce();
    
}

function draw() {
	background(0) ;
	orbitControl() ;
	for(let i=0;i<trees.length;i++) {
		trees[i].render() ;
	}
	
}


// filter array for uniqure elements
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
  
function doOnce() {
    background(0);
    for(let r=0; r < myData.getRowCount(); r++){
        let row = myData.getRow(r);
        let x = map(row.get('X'), min(lat), max(lat), 10, width-10);
        let y = map(row.get('Y'), min(lon), max(lon), 10, height-10);
        let diam = map(row.get('dbh_cm'), min(diam_cm), max(diam_cm), 1, 20);
        let tCol = color(treeCols[row.get('TreeType')], 100, 100, 0.8);
        trees.push(new Tree(width/2-x,height/2-y,diam, tCol));

    }
}


class Tree{
	constructor(x, y, diam, col, name) {
		this.x = x ;
		this.y = y ;
		this.diam = diam ;
		this.col = col ;
		this.name = name ;
	}
	
	render() {
		stroke(this.col) ;
		ellipse(this.x, this.y, this.diam) ;
	}
}