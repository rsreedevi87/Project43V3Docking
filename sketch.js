var iss, sp;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(600, 350);
  sp = createSprite(285,240);
  sp.addImage(scimg);
  sp.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;
}
function draw() {
  background(bg);
  
  sp.addImage(scimg);
  if(!hasDocked){
    sp.x = sp.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    sp.y = sp.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      sp.addImage(scimg3);
    sp.x = sp.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      sp.addImage(scimg2);
    sp.x = sp.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      sp.addImage(scimg1);
  }
}
  if(sp.y <= (iss.y+70) && sp.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}