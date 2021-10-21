const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide,rightSide;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	ball = Bodies.circle(200,400,20,20,20,ball_options);

    ground = new Ground(400,695,800,10)
	leftSide = new Ground(750,635,10,110)
	rightSide = new Ground(550,635,10,110)

    var ball_options={
	 isStatic : false,
	 restitution: 0.3,
	 friction : 0,
	 density:1.2
	}

	World.add(engine.world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine)

  ellipse(ball.position.x, ball.position.y, 20,20)
  ground.display()
  leftSide.display()
  rightSide.display()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:-0.03})
	}
}




