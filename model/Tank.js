import Sprite from "./Sprite.js";

class Tank extends Sprite {
    constructor(x,y) {
        super(x,y,50,50,0,0);

        this.displacement = 7;
        this.image.src = "../assets/tank.png";

        this.shoot = false;
        this.move = false;

        document.addEventListener("keydown", this.keyDown.bind(this));
        document.addEventListener("keyup", this.keyUp.bind(this));
        document.addEventListener("keypress", this.keyPress.bind(this));
    }

    //keyUp
    keyUp(e) {
        if (e.key === "Left" || e.key === "ArrowLeft" || e.key === "Right" || e.key === "ArrowRight") {
            this.dx = 0;
        }
    }

    //keyDown
    keyDown(e) {
        if (e.key === "Left" || e.key === "ArrowLeft") {
            this.dx = -this.displacement;
        } else if (e.key === "Right" || e.key === "ArrowRight") {
            this.dx == this.displacement;
        }

        this.moved = true;
    }
    //keyPress

    keyPress(e) {
        if (e.key === " ") {
            this.shoot = true;
        }
    }
}