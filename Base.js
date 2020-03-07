class Ground {
    constructor(x, y, width, height, angle){

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options),
        this.width = width,
        this.height = height,
        this.color = fill(random(0, 255), random(0, 255), random(0, 255))
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }

    display(){
       var pos = this.body.position
       // var angle = this.body.angle

        
        //rotate(angle);
        //rectMode(CENTER);
        //rect(pos.x, pos.y, this.width, this.height);

        var angle = this.body.angle;
      
        rotate(angle);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
   
        


    }

}