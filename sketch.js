let steps = 32;
let radius = 200;

let pg;

let font;

function preload(){
  pg = createGraphics(circumference(radius)*2,100);
}

function setup() {
  let canvas = createCanvas(800, 800,WEBGL);
  canvas.parent("sketch-container");
  angleMode(DEGREES);
  noStroke();
  pg.noStroke();
  pg.background(255);
  pg.fill(0);
  pg.textSize(80);
  pg.textAlign(CENTER,CENTER)
}

function draw() {

  let inputstring = document.getElementById("input").value;
  let seed = document.getElementById("inputseed").value;
  background(0);
  orbitControl();

  pg.background(255);
  pg.text(inputstring, 0,0,pg.width,pg.height);

  texture(pg);
  translate(0,250,0);
  randomSeed(seed);
  for(let i = 0; i < 6; i++){
    push();
    rotateY(frameCount/2+i*200)
    translate(0,-i*100,0);
    cylinder(radius*random(0.5,1),50,24,1,false,false);
    pop();
  }
}

function circumference(radius){
  return circumference = 2*PI*radius;
}
