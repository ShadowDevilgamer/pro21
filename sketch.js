
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const body = Matter.body
var ball; 
var groundObj;
var leftSide;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Matter.Bodies.circle(200,200,20,20, ball_options);

	var ball_options = {
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2,

	}
	//Create the Bodies Here.
	
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.Set.Velocityball = 5;
}
}
function draw() {
  rectMode(CENTER);
  background(0);
  display()
  groundObj.display();
  drawSprites();
 
}



