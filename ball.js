class ball {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':1,
          'density':2
      }
      this.body = Bodies.circle(x, y, 50, options, 100);
      this.width = 100;
      this.height = 100;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      ellipse(0, 0, this.width, this.height,100);
      pop();
    }
  };
  