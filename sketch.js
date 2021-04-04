var starImg,bgImg;
var star, starBody;
var fairy, fairyImg
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png")

	music = loadSound("JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);
    music.loop
	

	
    fairy = createSprite(120,620,50,50)
	fairy.addAnimation("1",fairyImg)
	fairy.scale = 0.15

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    music.play()

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
  

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 



  //console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.isTouching(fairy)){
	  Matter.Body.setStatic(starBody, true);
  }
 // fairy.debug = true
  fairy.setCollider("circle", 0, 0 ,500)


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
	}





	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 30
	}    

	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 30
	}    



	//writw code to move fairy left and right

	
}
