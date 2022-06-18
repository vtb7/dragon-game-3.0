var dragon,dragonImg;
var sky,skyImg;
var archer,archerImg;
var arrow,arrowImg;
var boundry1,boundry2
function preload(){
  dragonImg=loadImage("assets/Dragon.png")
  skyImg=loadImage("assets/Sky.jpg")
  arrowImg=loadImage("assets/Arrow.png")
  archerImg=loadImage("assets/Archer.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  sky=createSprite(200,200,windowWidth,windowHeight)
  sky.addImage(skyImg)
  sky.scale=0.9
  sky.velocityX=-2
  dragon=createSprite(1317,239)
  dragon.addImage(dragonImg)

  archer=createSprite(150,300)
  archer.addImage("archer",archerImg)

  boundry1=createSprite(1090,44,800,20)
  boundry2=createSprite(1090,689,800,20)
}

function draw() {
  console.log(mouseX,mouseY);
  background(180);
  drawSprites()
  if (sky.x < 0){
    sky.x = sky.width/3;
  }
  //archer movement
  if(keyIsDown(UP_ARROW)) 
  archer.y=archer.y-5

  if(keyIsDown(DOWN_ARROW)) {
    archer.y=archer.y+5
  }

  if(keyDown("space")){
    arrow=createSprite(archer.x+100,archer.y+15);
    arrow.addImage(arrowImg);
    arrow.velocityX=6;
    arrow.scale=0.4
  }
    }
  
  
   
     
   
