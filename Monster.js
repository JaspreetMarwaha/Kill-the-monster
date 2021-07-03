class Monster{
    constructor(x,y,width,height){
      var options ={ isStatic: false,
    restitution:1,
    friction:1
}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      
      this.height = height;
      this.width=width;
      this.x = x;
      this.y=y;
      this.image=loadImage("Monster.jpg");
      World.add(world,this.body);
   
    }
    display()
    {
        
        push();
        translate(this.body.position.x,this.body.position.y);

        imageMode(CENTER);
        image(this.image,0, 0,this.width, this.height);
        pop();
    }
  
  
  }
  