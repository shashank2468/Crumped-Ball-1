
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3,paper1,ground;
var world;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1  =  new Paper(200,450,70);

	ground =  new Ground(600,height,1200,20);

	dustbin1 = new Dustbin(870, 580, 30, 130);

	dustbin2 = new Dustbin(800, 535, 120, 30);

	dustbin3 = new Dustbin(950, 535, 120, 30);


	Engine.run(engine);
  
}


function draw() {
 
  background(0);

  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==38){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-125});

		
	}
}



