
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
                               

	engine = Engine.create();                                             
	world = engine.world;
                                                                                                                                                                                                 
                                                                                                                                        
   paperObject=new Trash(100,200,30);
   ground=new Ground(1,700,2000,30);

  Engine.run(engine);
                 
  box1=new Box(650,676,250,20);
	box2=new Box(770,646,20,80)               
  box3=new Box(530,646,20,80);                
                  
                                                                                                
                
}
              
                          
function draw() {            
  rectMode(CENTER);
  background(0);
                                                  
  paperObject.display()                                                                                                                                                          
  ground.display();
  box1.display()
  box2.display()
  box3.display()                  
  
  drawSprites();
 
}

function keyPressed(){
  if (keyCode=== UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:20,y:-70})
  }
}



