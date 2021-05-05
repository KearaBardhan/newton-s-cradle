class Bob{
    constructor(x,y){
        var option={
            
            restitution:1,
            friction:0,
            density:0.1
        }
      this.bob= Bodies.circle(x,y,25,option) 
     
      this.r=25;
      World.add(world,this.bob) 
        
    }
    display(){
        var pos= this.bob.position
        var angle=this.bob.angle
         
        
       fill("lightblue") 
       ellipseMode(RADIUS)
       ellipse(pos.x,pos.y,this.r,this.r)
       


        
    }
}