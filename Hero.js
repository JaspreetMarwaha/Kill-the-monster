class Hero{
    constructor(x,y,width,height){
      var options ={ isStatic: false,
    frictionAir:1,
    density:1
}
      
      this.body=Bodies.circle(this.x,this.y,(this.r)/2,options);
      
      this.r=r;
      this.x=x;
      this.y=y;
      this.image=loadImage("Hero.jpg");
      World.add(world,this.body);
   
    }
    display()
    {
        var angle=this.body.angle;
        var position=this.body.position;
        push();
        translate(this.body.position.x,this.body.position.y);

        imageMode(CENTER);
        image(this.image,0, 0,this.width, this.height);
    }
  
  
  }
  