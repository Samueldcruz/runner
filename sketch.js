// defining variable object(Step1, On top)
// load Animation (Step2 , in function preload) 
// create the image for runner (Step3 , function setup)
// create the image for path(Step4)
var RunnerImg;
var RunnerImg_Move;
var pathImg;
var path1;
var path2;
var path3;
var path4;
var path5;
var path6;
function preload(){
  //pre-load images
  RunnerImg_Move = loadAnimation("Runner-1.png","Runner-2.png") ;    
  pathImg = loadAnimation("path.png","path.png");
}

function setup(){
  createCanvas(1000,800,5,90)
  // Moving Background (2nd Layer)
  path1=createSprite(200,200,50,900);
  path1.addAnimation(pathImg);
  path1.velocityY = 9;
  path1.scale=2.1;

  path2=createSprite(900,200,50,900);
  path2.addAnimation(pathImg);
  path2.velocityY = 9;
  path2.scale=2.1;

  
  path3=createSprite(550,200,50,900);
  path3.addAnimation(pathImg);
  path3.velocityY = 15;
  path3.scale=0.1;

  
  path4=createSprite(550,400,50,900);
  path4.addAnimation(pathImg);
  path4.velocityY = 15;
  path4.scale=0.1;

  
  path5=createSprite(550,600,50,900);
  path5.addAnimation(pathImg);
  path5.velocityY = 15;
  path5.scale=0.1;

  
  
  path6=createSprite(550,800,50,900);
  path6.addAnimation(pathImg);
  path6.velocityY = 15;
  path6.scale=0.1;


//(1st Layer, Front ayer)
  RunnerImg=createSprite(550,500,200,10);
  RunnerImg.addAnimation("running",RunnerImg_Move); 
  RunnerImg.scale=0.2;     

  
  drawSprites();
}


function draw() {
  background("blue");
  drawSprites();

// To repeat the Path
  if(path1.y > 400 ){
    //path1.y = height/2;
    path1.y =0;
  }


// To repeat the Path
if(path2.y > 400 ){
  //path2.y = height/2;
  path2.y =0;
}


// To repeat the Path
if(path3.y > 900 ){
  //path3.y = height/2;
  path3.y =0;
}


// To repeat the Path
if(path4.y > 900 ){
  //path4.y = height/2;
  path4.y =0;
}


// To repeat the Path
if(path5.y > 900 ){
  //path5.y = height/2;
  path5.y =0;
}


// To repeat the Path
if(path6.y > 900 ){
  //path6.y = height/2;
  path6.y =0;
}


}

