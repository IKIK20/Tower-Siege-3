const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, polygon_image, score=0;

function setup() {
  var canvas = createCanvas(1400,800);

  

  engine = Engine.create();
  world = engine.world;

  polygon= Bodies.circle(100,200,30)
  polygon.scale=2
  polygon_image= loadImage("polygon2.png")

  World.add(world,polygon)
  //console.log(polygon.velocityX)

  slingshot= new SlingShot (polygon,{x:150,y:200})

  base= new Ground(810,500,410,20)
  ground= new Ground(700,750,1400,20)

  box1= new Box(850,470,80,80)
  box2= new Box(900,470,80,80)
  box3= new Box (800,470,80,80)
  box4= new Box (750,470,80,80)
  box5= new Box (730,470,80,80)

  box6= new Box (850,450,80,80)
  box7= new Box (820,450,80,80)
  box8= new Box (800,420,80,80)
  box9= new Box (760,450,80,80)

}

function draw() {
  background("white");
  Engine.update(engine);

  textSize(30)
  text("SCORE:"+ score, 750,40)

  imageMode(CENTER)
  image(polygon_image,polygon.position.x,polygon.position.y,40,40)

  base.display()
  ground.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()

  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   slingshot.fly()
}

function keyPressed(){
if(keyCode===32){
  slingshot.attach()
}
}
