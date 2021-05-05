class Rope{
    constructor(pointA, bodyB){
        var option={
            pointA:pointA,
            bodyB:bodyB,
            stiffness:0.1,
         
        }

        this.rope=Constraint.create (option)
        this.point=pointA
        World.add(world,this.rope)

    }
    display(){
        var pointA=this.point
        var pointB=this.rope.bodyB.position
        fill(0)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}