// Friday 13 May :OOO 
// From ..https://openprocessing.org/sketch/1190623


let rootNode;
const nodes = [],
			rt3 = Math.sqrt(3);

function setup() {
	createCanvas(600, 600, WEBGL);
  setAttributes('antialias', true);
	// createEasyCam({distance:400});
	// suppress right-click context menu
  document.oncontextmenu = function() { return false; };
	strokeWeight(2);
	
	rootNode = new Node(0, 0, 0, 1);
	nodes.push(rootNode);
	rootNode.addChildren(6);
 
}

function draw() {
	background(0);
	if (frameCount % 180 === 24) rootNode.stimulate();
	rootNode.draw();
}


class Node {
	constructor(x, y, z, depth) {
		this.pos = new p5.Vector(x, y, z);
		this.depth = depth;
		
		this.born = frameCount;
		this.lastStimulation = -Infinity;
		
		this.children = [];
	}
	
	addChildren(n) {
		for (let i = 0; i < n; i ++) {
			if (frameCount === 4 && Math.random() > 1 / this.depth) continue;
			const coords = random([[1, 0,0], 
														 [1 / 2, rt3 / 2,0], 
														 [-1 / 2, rt3 / 2,0], 
														 [-1, 0,0], 
														 [-1 / 2, -rt3 / 2,0], 
														 [1 / 2, -rt3 / 2,0],
														 [0,0,1],
														 [0,0,-1]]),
						x = this.pos.x + 50 * coords[0],
						y = this.pos.y + 50 * coords[1],
						z = this.pos.z + 50 * coords[2];

			if (nodes.some(node => Math.pow(node.pos.x - x, 2) + Math.pow(node.pos.y - y, 2) + Math.pow(node.pos.z - z, 2) < 1)) continue;
      
			const child = new Node(x, y, z, this.depth + 0);
			this.children.push(child);
			nodes.push(child);
			
			if (frameCount === 2) child.addChildren(10);
		}
	}
	
	stimulate() {
		this.lastStimulation = frameCount;
		if (Math.random() < 0.999 && frameRate()>24) this.addChildren(1);
	}
	
	draw() {
		push();
		const q = frameCount - this.born;
		stroke(0, q < 15 ? 100 * q / 15: 100, 255);

		const t = frameCount - this.lastStimulation;
		if (t === 1) {
			for (const child of this.children) child.stimulate();
		}
		
		for (const child of this.children) {
			push();
			  stroke(35, 140, 250);
			  line(this.pos.x, this.pos.y, this.pos.z,  child.pos.x, child.pos.y, child.pos.z);
			pop();
			
			if (t < 1) {
				push();
				  strokeWeight(1);
				  fill("#A33B20");
				  translate(this.pos.x + (child.pos.x - this.pos.x) * t / 1, this.pos.y + (child.pos.y - this.pos.y) * t / 1, this.pos.z + (child.pos.z - this.pos.z) * t / 1);
				//   noStroke();
                  sphere(1.5);
				pop();
			}
			
			child.draw();
		}
		
		// fill(t < 30 ? 255 * Math.pow(1.1, -t) : 0);
		translate(this.pos.x, this.pos.y, this.pos.z);
		strokeWeight(1);
		sphere(7);
		pop();
	}
}