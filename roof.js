class Roof{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.roof=Bodies.rectangle(x,y,width,height,option)
        this.w=width
        this.h=height
        World.add(world,this.roof)
    }

display(){
    var pos=this.roof.position

    rectMode(CENTER)
    fill("blue")
    rect(pos.x,pos.y, this.w,this.h)
}
}