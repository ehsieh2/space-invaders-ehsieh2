import Sprite from "./Sprite.js";

class Alien extends Sprite {
    constructor(x,y,dy) {
        super(x,y,40,40,0,dy);
        this.image.src = "../assets/invader.png";
    }

    move(cWidth) {
        this.dx = Math.random() * 2;
        // randomize jiggle direction
        // if (Math.random() < 0.5) {
        //     this.dx = -this.dx;
        // }

        super.move();

        if (this.x <= -1) {
            this.x = 0;
        } else if (this.x + this.width > cWidth) {
            this.x = cWidth - this.width;
        }
    }

    hits(shot) {
        return this.intersect(shot);
    }
}

export default Alien;