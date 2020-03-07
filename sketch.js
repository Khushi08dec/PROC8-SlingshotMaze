const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
var ground2, ground3;
var box1;

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400, 490, 800, 20);
    ground2 = new Ground(520, 250, 150, 20, PI/7);
    ground3 = new Ground(700, 250, 100, 20, -PI/7);
  

}

function draw(){
    background(0);
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();
  
}