//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const engine = Engine.create();
const world = engine.world;

//variables
var invisibleGround, ground;
var tree;
var person, personImage;
var stone;
var slingshot;
var mango01, mango02, mango03, mango04, mango05, mango06, mango07, mango08, mango09, mango10, mango11, mango12;


function setup() {

	//canvas
	createCanvas(800, 700);


	/*BODIES*/

	//ground
	ground = new Ground(400, 700, 800, 20);
	invisibleGround = new InvisibleGround(400, 700, 800, 10);

	//tree
	tree = new Tree(620, 430);

	//person
	person = new Person(200, 620);

	//stone
	stone = new Stone();

	//slingshot
	slingshot = new Slingshot(stone.body, {x: 160, y: 550});

	//mangoes
	mango01 = new Mango(680, 220);
	mango02 = new Mango(600, 220);
	mango03 = new Mango(720, 300);
	mango04 = new Mango(640, 300);
	mango05 = new Mango(560, 300);
	mango06 = new Mango(680, 380);
  mango07 = new Mango(600, 380);
	mango08 = new Mango(520, 380);
  mango09 = new Mango(760, 380);
	mango10 = new Mango(720, 460);
	mango11 = new Mango(640, 460);
	mango12 = new Mango(560, 460);


	//run engine
	Engine.run(engine);
  
}


function draw() {

  //background
  background("lightBlue");


  /*DETECT COLLISIONS*/
  detectCollision(stone, mango01);
  detectCollision(stone, mango02);
  detectCollision(stone, mango03);
  detectCollision(stone, mango04);
  detectCollision(stone, mango05);
  detectCollision(stone, mango06);
  detectCollision(stone, mango07);
  detectCollision(stone, mango08);
  detectCollision(stone, mango09);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);


  /*DISPLAY*/

  //ground 
  ground.display();

  //tree
  tree.display();

  //person
  person.display();

  //stone
  stone.display();

  //slingshot
  slingshot.display();

  //mangoes
  mango01.display();
  mango02.display();
  mango03.display();
  mango04.display();
  mango05.display();
  mango06.display();
  mango07.display(); 
  mango08.display();
  mango09.display();
  mango10.display();
  mango11.display();
  mango12.display();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function detectCollision(bodyStone, bodyMango){
	var mangoBodyPos = bodyStone.body.position;
	var stoneBodyPos = bodyMango.body.position;

  if(((stoneBodyPos.x < mangoBodyPos.x + 45) && (stoneBodyPos.x > mangoBodyPos.x - 45)) && 
  ((stoneBodyPos.y < mangoBodyPos.y + 45) && (stoneBodyPos.y > mangoBodyPos.y - 45))){
		console.log("ukit");
		Matter.Body.setStatic(bodyMango.body, false);
	  }

	// var distance = dist(stoneBodyPos.x, stoneBodyPos.y, mangoBodyPos.x, mangoBodyPos.x);
	// if (distance <= bodyStone.r + bodyMango.r){
	// 	Matter.Body.setStatic(bodyMango.body, false);
	// 	console.log("collision detected");
	// }
}


function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 160, y: 550});
		slingshot.attach(stone.body);
	}
}
