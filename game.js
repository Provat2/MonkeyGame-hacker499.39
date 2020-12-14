class Game{
    constructor(){}
    play(){
        background(background_image);
        monkey.visible = true;
        textSize(20);
        fill("white");
        text("score: " + score, displayWidth-120, 170);
        textSize(15);
        text(person, monkey.x, monkey.y - 47);
        text("Player Name: " + person, 70, displayHeight - 120);
        this.foods();
        this.stones();
        monkey.collide(ground);
    }
    stones(){
        if (frameCount % 120 === 0){
        stone = createSprite(displayWidth, displayHeight-243, 10, 10);//creating
        stone.addImage("stone image", stone_image);//adding image
        stone.scale = 0.2 ;//scaling
        
        stone.velocityX = -(7 + (score/2));//velocity
        stone.lifetime = 600;//lifetime    
        
        stoneGroup.add(stone);//adding to groups
        }
    }
    foods(){
        if (frameCount % 170 === 0) {
        food = createSprite(displayWidth, displayHeight-248, 10, 10);//creating
        food.addImage(food_image);//adding image
        food.scale = 0.1;//scaling 
        
        food.velocityX = -(7 + (score/2));//velocity
        food.lifetime = 600;//lifetime
        
        foodGroup.add(food);//adding to groups
        }
    }
  
}