
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundObj
var circle
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	let options = {
		restitution:0.3,
		friction:0,
		density:1.2
	  };

	//Create the Bodies Here.
	groundObj=new ground(width/2,670,width,20)
	leftSide = new ground(1100,600,20,120)
	rightSide = new ground(900,600,20,120)
	circle = Bodies.circle(200,200,20,options)
	World.add(world,circle)
	
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 groundObj.display();
 leftSide.display();
 rightSide.display();
 ellipse(circle.position.x,circle.position.y,20)
}

function keyPressed() {
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(circle,{x:0,y:0},{x:65,y:-100});

	}
}

