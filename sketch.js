var path, pathImg;
var mainCar,mainCarImg;
var car2, car2Img;
var car3, car3Img;
var car4, car4Img;
var car5, car5Img;
var gameOver, gameOverImg;
var PLAY=1;
var END=0;
var gameState=PLAY;
var distance=0;
var car2CG,car3CG,car4CG;

function preload(){
pathImg=loadImage("path.png");
mainCarImg=loadImage("carImage.jpg")
car2Img=loadImage("car2.jpg")
car3Img=loadImage("car3.jpg")
car4Img=loadImage("car4.jpg")
car5Img=loadImage("car5.jpg")
gameOverImg =loadImage("gameOver.png");
}

function setup() {
    createCanvas(400,600);
    path=createSprite(200,200);
    path.addImage(pathImg);
    path.velocityY =4;

    mainCar=createSprite(70,150);
    mainCar.addImage(mainCarImg);
    mainCar.scale=0.5;
    mainCar.setCollider("rectangle",0,0,40,40);

    gameOver = createSprite(650,150);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.8;
    gameOver.visible = false;  

    car2CG=new Group();
    car3CG=new Group();
    car4CG=new Group();
    car5CG=new Group();
}

function draw(){
  background("white")  
  if(gameState===PLAY){
          
   distance = distance + Math.round(getFrameRate()/50);
   path.velocityY = -(6 + 2*distance/150);
        mainCar.mouseX = World.mouseX;
        
        edges= createEdgeSprites();
        mainCar.collide(edges);
        if(path.y > 400 ){
          path.y = height/2;
        }

        var selectCar = Math.round(random(1,4));
  
        if (World.frameCount % 150 == 0) {
            if (selectCar == 1) {
              car2();
            } else if (selectCar == 2) {
              car3();
            } else if (selectCar == 3) {
                car4();
            } else {
              car5();
            }
          }
          
           if(car2CG.isTouching(mainCar)){
             gameState = END;
             car2.velocityY = 0;
            }
            
            if(car3CG.isTouching(mainCar)){
              gameState = END;
              car3.velocityY = 0;
            }
            
            if(car4CG.isTouching(mainCar)){
              gameState = END;
              car4.velocityY = 0;
            }
            if(car5CG.isTouching(mainCar)){
                gameState = END;
                car5.velocityY = 0;
              }
            
        }else if (gameState === END) {
            gameOver.visible = true;
          
            textSize(20);
            fill(255);
            text("Press Up Arrow to Restart the game!", 500,200);
          
            path.velocityY = 0;
            mainCar.velocityX = 0;
          
            car2CG.setVelocityXEach(0);
            car2CG.setLifetimeEach(-1);
          
            car3CG.setVelocityXEach(0);
            car3CG.setLifetimeEach(-1);
          
            car4CG.setVelocityXEach(0);
            car4CG.setLifetimeEach(-1);
        
  }
  if(keyDown("UP_ARROW")) {
    reset();
  }
}

function car2(){
    car2=createSprite(1100,Math.round(random(50, 250)));
    car2.scale =0.06;
    car2.velocityX = -(6 + 2*distance/150);
    car2.addImage(car2Img);
    car2.setLifetime=170;
    car2CG.add(car2);
}

function car3(){
    car3=createSprite(1100,Math.round(random(50, 250)));
    car3.scale =0.06;
    car3.velocityX = -(6 + 2*distance/150);
    car3.addImage(car3Img);
    car3.setLifetime=170;
    car3CG.add(car3);
}

function car4(){
    car4=createSprite(1100,Math.round(random(50, 250)));
    car4.scale =0.06;
    car4.velocityX = -(6 + 2*distance/150);
    car4.addImage(car4Img);
    car4.setLifetime=170;
    car4CG.add(car4);
}

function car5(){
    car5=createSprite(1100,Math.round(random(50, 250)));
    car5.scale =0.06;
    car5.velocityX = -(6 + 2*distance/150);
    car5.addImage(car5Img);
    car5.setLifetime=170;
    car5CG.add(car5);
}
function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    mainCyclist.addImage("mainCarImg");
    
    car2CG.destroyEach();
    car3CG.destroyEach();
    car4CG.destroyEach();
    car5CG.destroyEach();
    
    distance = 0;
   }