class Sprite {
  constructor(x, y, width, height, dx, dy) {
    //super(x, y, width, height, color);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;
    this.dy = dy;

    this.image = new Image(width,height);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  draw(ctx) {
    // ctx.beginPath();
    // ctx.rect(this.x, this.y, this.width, this.height);
    // ctx.fillStyle = this.color;
    // ctx.fill();
    // ctx.closePath();
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  intersect(thing2) {
    if (thing2.height <= 0 || thing2.width <= 0 || this.height <= 0 || this.width <= 0) {
      return false; //not valid images
    }

    const thingHeight = thing2.height + thing2.y;
    const thingWidth = thing2.width + thing2.x;
    const thisWidth = this.width + this.x;
    const thisHeight = this.height + this.y;

    return (thingWidth < thing2.x || thingWidth > this.x) && (thingHeight < thing2.y || thingHeight > this.y) && (thisWidth < this.x || thisWidth > thing2.x) && (thisHeight < this.y || thisHeight > thing2.y);
  }
}

export default Sprite;
