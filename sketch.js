const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var rabbit,button;
var bg,melonImg,buttomImg,rabbitImg;
var bunnyEat,bunnyBlink,bunnySad;

function preload(){
  bg=loadImage("background.png");
  buttonImg=loadImage("cut_button.png");
  melonImg=loadImage("melon.png");
  rabbitImg=loadImage("Rabbit-01.png");
  bunnyEat=loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  bunnyBlink=loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  bunnySad=loadAnimation("sad_1.png","sad_2.png","sad_3.png");
  bunnyEat.playing=true;
  bunnyBlink.playing=true;
  bunnySad.playing=true;
  bunnyEat.looping=false;
  bunnySad.looping=false;
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  imageMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  ground=new Ground(width>>1,height-20,width,20);
  rope=new Rope(6,{x:200,y:30});

  var fruitOption={density:0.001};
  fruit=Bodies.circle(300,300,15,fruitOption);
  Composite.add(rope.body,fruit);
  fruitCon=new Link(rope,fruit);

  rabbit=createSprite(width>>1,height-110);
  bunnyBlink.frameDelay=15;
  bunnyEat.frameDelay=14;
  bunnySad.frameDelay=20;
  rabbit.addAnimation("blink",bunnyBlink);
  rabbit.addAnimation("eat",bunnyEat);
  rabbit.addAnimation("sad",bunnySad);
  rabbit.changeAnimation("blink");
  rabbit.scale=0.25;

  button=createImg("cut_button.png");
  button.position(180,30);
  button.size(50,50);
  button.mouseClicked(drop);
}

function draw() 
{
  background(51);
  image(bg,width>>1,height>>1,width,height);
  Engine.update(engine);

  ground.show();
  rope.show();
  fill("#00ff00");
  if(fruit!=null){
    image(melonImg,fruit.position.x,fruit.position.y,80,80);
  }
  if(collide(fruit,rabbit)==true){
    rabbit.changeAnimation("eat");
  }
  if(fruit && fruit.position.y>=650){
    rabbit.changeAnimation("sad");
  }
  drawSprites();
}

function drop(){
  fruitCon.detach();
  fruitCon=null;
  rope.break();
}

function collide(body,sprite){
  if(body!=null){
    var d=dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
    if(d<=80){
      World.remove(world,fruit);
      fruit=null;
      return true;
    }
    else{
      return false;
    }
  }
}

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
