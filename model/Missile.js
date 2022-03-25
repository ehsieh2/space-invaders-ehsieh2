import Sprite from "./Sprite.js"

class Missile extends Sprite{
    constructor(x,y) {
        super(x, y, 10, 20, 0, -5);
        this.image.src = "../assets/missile.png";
    }

    onScreen() {
        return this.y < 0;
    }
}

export default Missile;