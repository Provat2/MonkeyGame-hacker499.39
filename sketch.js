const database = firebase.database();
var gameState;
//declaring objects
var monkey, stone, food, background, form;

//declaring images and animations
var monkey_running, monkey_stopped, background_image, food_image, stone_image, ground;

//declaring the groups and powers
var foodGroup, stoneGroup, saver;

//declaring score 
var score;

var person;

//image loads...
function preload(){
  //loading monkey running animation
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  //loading background image
  background_image = loadImage("jungle.jpg");
  
  //loading stone image
  stone_image = loadImage("obstacle.png");
  
  //loading food image
  food_image = loadImage("banana.png");
  
}

//setting up...
function setup(){
  //creating canvas
  createCanvas(displayWidth, displayHeight);

  ground = createSprite(displayWidth/2, displayHeight-200, displayWidth, 10);
  ground.visible = false;
  
  //creating the monkey
  monkey = createSprite(displayWidth/4, displayHeight/2, 20, 20);
  monkey.addAnimation("monkey running", monkey_running);
  monkey.scale = 0.15;
  monkey.setCollider("rectangle",0,0,monkey.width, monkey.height);
  monkey.debug = false;
  monkey.visible = false;
  
  //setting score to Zero
  score = 0;
  
  form = new Form();
  form.display();

  foodGroup = new Group();
  stoneGroup = new Group();
}

//drawing and repetations 
function draw(){  
  if(gameState !== 1 && gameState !== 2){
    background("cyan");
  }
  
  if (gameState === 1){
    var game = new Game();
    game.play();
    if(keyDown("space") && monkey.y >= displayHeight-265) {
      monkey.velocityY = -25;
    }    

    //giving gravity
    monkey.velocityY = monkey.velocityY + 0.9;
    
    //adding score if get the fruit
    if(foodGroup.isTouching(monkey)) {
    foodGroup.destroyEach();
    score += 5;
    monkey.scale = monkey.scale + 0.02;
    }

    if(stoneGroup.isTouching(monkey) && monkey.scale > 0.15){ 
      monkey.scale = 0.15;
      stoneGroup.destroyEach();
      }    
    if (stoneGroup.isTouching(monkey) && monkey.scale === 0.15){
    gameState = 2;
    }
}    




  else if (gameState === 2){
    background("black");
    stoneGroup.setVelocityXEach(0);
    stoneGroup.setLifetimeEach(-1);
    foodGroup.setVelocityXEach(0);
    foodGroup.setLifetimeEach(-1);
    monkey.velocityY = 0;
    fill("white");
    textSize(20);
    text("Press 'r' to restart", 100, displayHeight/4);
    textSize(40);
    text("GAME OVER", displayWidth/2, displayHeight/2);
    text("Total Score: " + score, displayWidth/2, displayHeight/2 + 100);
    textSize(15);
    text("Press space to change player", displayWidth-300, 40);
    if(keyDown("space")){
      console.log("wanted to reset");
      location.reload();
    }
    
    if (keyDown("r")){
      gameState = 1;
      stoneGroup.destroyEach();
      foodGroup.destroyEach();
      score = 0;
    }
  }
  drawSprites();
}

