class Objects{
    constructor(x,y,width,height){
        var options = {
           'friction':0.8,
           'density':1.5,
           'restitution':1.2,
           isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}