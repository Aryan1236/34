class Monster{
  constructor(x, y, width, height) {
      var options = {

          restitution:0.4,
          friction:1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Monster-01.png");
      World.add(world, this.body);
    }
    display(){
      push();
      var angle = this.body.angle;
      var pos= this.body.position;
      
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}