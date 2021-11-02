class Ball{
    constructor(x,y,r){
        var options = {
            density: 1
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;

        World.add(myWorld,this.body);
    }

    display(){
        push ();
        ellipse (this.body.position.x,this.body.position.y,this.r,this.r);
        pop ();
    }
}