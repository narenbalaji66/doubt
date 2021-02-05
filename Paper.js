class Paper{
    constructor(x,y,radius){
   var options={
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
   }
   this.x=x
   this.y=y
   this.radius=radius
   this.body=Matter.Bodies.circle(x,y,radius,options)
   World.add(world,this.body)
    }
  display(){
var position=this.body.position
push()
translate(position.x,position.y)
strokeWeight(3)
fill("purple");
ellipse(0,0,this.radius*2,this.radius*2)
  }

}