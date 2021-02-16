
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var circle1,circle2,circle3,circle4,circle5,circle6;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var op3={
        'restitution':1.2,
        'friction':0.8,
        'density':0.7,
    }
    circle1 = Bodies.circle(600,685,5,op3);
    var op4={
        'restitution':1.2,
        'friction':0.8,
        'density':0.7,
    }
    circle2 = Bodies.circle(606,685,5,op4);
    var op5={
        'restitution':1.2,
        'friction':0.8,
        'density':0.7,
    }
    circle3 = Bodies.circle(609,685,5,op5);
    var op6={
        'restitution':1.2,
        'friction':0.8,
        'density':0.7,
    }
    circle4 = Bodies.circle(612,685,5,op6);
    var op7={
        'restitution':1.2,
        'friction':0.8,
        'density':0.7,
    }
    circle5 = Bodies.circle(615,685,5,op7);
    var op8={
        'restitution':1.2,
        'friction':0.8,
        'density':0.7,
    }
    circle6 = Bodies.circle(618,685,5,op8);
    World.add(world,circle1);
    World.add(world,circle2);
    World.add(world,circle3);
    World.add(world,circle4);
    World.add(world,circle5);
    World.add(world,circle6);
	Engine.run(engine);
    ground= new Ground(600,695,1200,40);
    hammer = new Hammer();
    brick = new Objects(700,600,80,100);
    stone = new Objects(750,600,150,120);
   
}

function draw() {
  background(0);
  
  ground.display();
  fill("yellow");
  hammer.display();
  fill("brown");
  brick.display();
  fill("grey");
  stone.display();
  fill("brown");
  ellipseMode(CENTER);
  ellipse(circle1.position.x,circle1.position.y,5,5);
  ellipse(circle2.position.x,circle2.position.y,5,5);
  ellipse(circle3.position.x,circle3.position.y,5,5);
  ellipse(circle4.position.x,circle4.position.y,5,5);
  ellipse(circle5.position.x,circle5.position.y,5,5);
  ellipse(circle6.position.x,circle6.position.y,5,5);
  }



