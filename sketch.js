var superman,supermanImg
var zombieImg,zombie;
var scaredPerson1,scaredPerson2;
var scaredPerson1Img,scaredPerson2Img
var background1,backgroundImg;
var superJumpingImg;
var supermanPunchingImg

function preload()
{
supermanImg=loadImage("images/superman.png")
zombieImg=loadImage("images/zombie.png")
scaredPerson1Img=loadImage("images/unnamed.gif")
scaredPerson2Img=loadImage("images/scared person.png")
backgroundImg=loadImage("images/background 1.jpg")
supermanJumpingImg=loadImage("images/jumping.png")
supermanPunchingImg=loadImage("images/punching.png")
}

function setup() {
  createCanvas(2000, 900);
  background1=createSprite(1000,200)
  background1.addImage(backgroundImg)
  background1.scale=4
  background1.velocityX=-5

 superman=createSprite(170,500,40,70) 
 superman.addImage(supermanImg)
 superman.scale=0.2
superman.velocityX=0


}

function draw() {  
background(0)

if (background1.x<700){
 background1.x=1000 
}

if (keyIsDown(RIGHT_ARROW)){
superman.velocityX=1
}
if (keyWentDown("SPACE")){
 superman.addImage(supermanJumpingImg) 
}
if (keyWentUp("SPACE")){
  superman.addImage(supermanImg) 
 }
if (keyWentDown("P")){
  superman.addImage(supermanPunchingImg)
  superman.scale=0.9 
}
if (keyWentUp("P")){
  superman.addImage(supermanImg)
  superman.scale=0.2 
}



  drawSprites();
  //add styles here

}
 


