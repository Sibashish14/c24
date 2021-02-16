class Hammer{
    constructor(){
        var options = {
           'friction':0.8,
           'density':1.5,
        }
        this.body=Bodies.rectangle(600,350,40,100,options);
        this.width=100;
        this.height=40;
        World.add(world,this.body);
    
    }
    display(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}