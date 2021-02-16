class Ground{
    constructor(x,y,width,height){
        var options = {
           isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=1200;
        this.height=10;
        World.add(world,this.body);
    
    }
    display(){
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}