
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var chain1, ball1;
var chain2, ball2;
var chain3, ball3;
var chain4, ball4;
var chain5, ball5;
var roof;



function preload()
{
	
}

function setup() {
	createCanvas(655, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	roof = new roofz(500, 150,700,50);
	roof1 = new roofz(200, 150,100,50);
	roof2 = new roofz(300, 150,100,50);
	roof3 = new roofz(400, 150,100,50);
	roof4 = new roofz(600, 150,100,50);
	
	ball1 = new ball(500,500);
	ball2 = new ball(200,500);
	ball3 = new ball(300,500);
	ball4 = new ball(400,500);
	ball5 = new ball(600,500);
	
	chain1 = new rope(roof1.body,ball2.body,0,30)
	chain2 = new rope(roof2.body,ball3.body,0,30)
	chain3 = new rope(roof3.body,ball4.body,0,30)
	chain4 = new rope(roof4.body,ball5.body,0,30)
	chain5 = new rope(roof.body,ball1.body,0,30)
	
}	


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  
  console.log(mouseX,mouseY)

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display(); 
  chain2.display(); 
  chain3.display(); 
  chain4.display(); 
  chain5.display();

  drawSprites();
  keypressed();
 
}

function keypressed(){
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball5.body,ball5.body.position,{x:100,y:-45});
	}
}

