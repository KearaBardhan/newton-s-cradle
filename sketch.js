
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,300)
	bob2=new Bob(250,300)
	bob3=new Bob(300,300)
	bob4=new Bob(350,300)
	bob5=new Bob(400,300)

	roof=new Roof(300,80,300,20)

	rope1=new Rope({x:200,y:80}, bob1.bob)
	rope2=new Rope({x:250,y:80},bob2.bob)
	rope3=new Rope({x:300,y:80},bob3.bob)
	rope4=new Rope({x:350,y:80},bob4.bob)
	rope5=new Rope({x:400,y:80},bob5.bob)




	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(255);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  
 
}

function keyPressed(){
	if (keyCode===32){
		Body.applyForce(bob1.bob,bob1.bob.position,{x:-50,y:50})
	}
}


