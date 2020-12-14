class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.title = createElement('h1');
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
        this.title.html("Monkey G0 Happy Login");
        this.title.position(displayWidth/2 - 100, 0);
    
        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
    2
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.title.hide();
            person = this.input.value();
            gameState = 1;
        });
  
    }
  }
  