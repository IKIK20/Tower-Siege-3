class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility= 255
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER)
       // console.log(this.body.speed)
        fill("pink")
        if(this.body.speed< 3){
          rect(this.body.position.x,this.body.position.y,this.width,this.height)}
        else {
            World.remove(world,this.body)
            push()
            this.visibility= this.visibility-5
            tint(255,this.visibility);
            pop()
          }
        }
        score(){
          if(this.visibility<0 && this.visibility>-105){
              score=score+1
              console.log("hi")
          }
        }
 }