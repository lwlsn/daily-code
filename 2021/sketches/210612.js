let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js']


// hydra canvas + init
let hc = document.createElement('canvas')
hc.width = window.innerWidth
hc.height = window.innerHeight
document.body.appendChild(hc)
let hydra = new Hydra({detectAudio: false,canvas: hc})

let pg // store hydra texture

// sandbox - start
src(o0)
	.layer(src(s0))
	.scale(.992)
	.modulateScale(src(s0).pixelate(15, 10), .5)
	// .scrollY([1.003, -1.003])
	.moduate(osc(50, 0.1, 0.2))
	.out()
// sandbox - stop



function preload() {
	font = loadFont("includes/demos-data/fonts/RobotoMono-Regular.otf")
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	
	s0.init({src: drawingContext.canvas})
	pg = createGraphics(hc.width, hc.height);
	
	background(0);
	textFont(font);
	textAlign(CENTER, CENTER);
	
}

function draw() {
	
	clear()
	fill(0)
	stroke(255)
	strokeWeight(2)
	textSize(width / 5)

	let offset = 10
	text("Ahhh", width / 2 + sin(frameCount * .03) * offset, height / 2 + cos(frameCount * .03) * offset)

}
