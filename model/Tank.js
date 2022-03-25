import Sprite from "./Sprite.js";

class Tank extends Sprite {
    constructor(x,y) {
        super(x,y,50,50,0,0);

        this.displacement = 7;
        this.image.src = "../assets/tank.png";

        this.hit = false;
        this.move = false;

        document.addEventListener("keydown", this.keyDownHandler.bind(this));
        document.addEventListener("keyup", this.keyUpHandler.bind(this));
        document.addEventListener("keypress", this.keyPressHandler.bind(this));
    }
}