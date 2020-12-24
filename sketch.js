
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,rope1,rope2,rope3,rope4,rope5,roof1,engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


bd=40

startposx=width/2;
startposty=height/4+400;
roof1=new roof (width/2,height/4,width/7,20);
bobObject1=new bob(startposx-bd*2,startposty ,bd);
  bobObject2=new bob(startposx-bd,startposty ,bd);
  bobObject3=new bob(startposx,startposty ,bd);
  bobObject4=new bob(startposx+bd,startposty ,bd);
  bobObject5=new bob(startposx+bd*2,startposty ,bd);
constraint1={
  bodyA:bobObject1.body,
  bodyB:roof1.body,
pointB:{x:-bd*2,y:0}
}

constraint2={
  bodyA:bobObject1.body,
  bodyB:roof1.body,
pointB:{x:-bd,y:0}
}

constraint3={
  bodyA:bobObject1.body,
  bodyB:roof1.body,
pointB:{x:0,y:0}
}

constraint4={
  bodyA:bobObject1.body,
  bodyB:roof1.body,
pointB:{x:bd,y:0}
}

constraint5={
  bodyA:bobObject1.body,
  bodyB:roof1.body,
pointB:{x:bd*2,y:0}
}
var pendulum1=Constraint.create(constraint1)
var pendulum2=Constraint.create(constraint2)
var pendulum3=Constraint.create(constraint3)
var pendulum4=Constraint.create(constraint4)
var pendulum5=Constraint.create(constraint5)
World.add(world,pendulum1)
World.add(world,pendulum2)
World.add(world,pendulum3)
World.add(world,pendulum4)
World.add(world,pendulum5)
 


  rope1=new rope(bobObject1.body,roof1.body,-bd*2,0);
  rope2=new rope(bobObject2.body,roof1.body,-bd,0);
  rope3=new rope(bobObject3.body,roof1.body,0,0);
  rope4=new rope(bobObject4.body,roof1.body,bd,0);
  rope5=new rope(bobObject5.body,roof1.body,bd*2,0);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof1.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 bobObject1.display()
 bobObject2.display()
 bobObject3.display()
 bobObject4.display()
 bobObject5.display()
 
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW) {
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
}
}
function drawline(constraint){
bobBodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position
roofBodyOffset=constraint.pointB
roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y
line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY)
}