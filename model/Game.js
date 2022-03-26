import Alien from "./model/Alien.js";
import Missile from "./model/Missile.js";
import Tank from "./model/Tank.js";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        this.tank = new Tank(this.canvas.width / 2 - 25, this.canvas.height - 60);
        this.aliens = [];
        this.missiles = [];
        this.score = 0;
        this.gameOver = false;
    
        this.missileSound = new Audio("../assets/shoot.wav");
        this.explosionSound = new Audio("../assets/explosion.wav");
        this.music = new Audio("../assets/music.mpeg");
        this.music.loop = true;
    }

    playGame() {
    //run game here
        thisctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.tank.draw(this.ctx);
        this.displayText();

        if(this.tank.moved) { //start game
            this.music.play();
            this.tank.move(this.canvas.width);
            this.spawn();
            this.handleMissile();
            this.handleAliens();
        }

        if (this.gameOver) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.displayText();
            this.music.pause();
        } else {
            window.requestAnimationFrame(this.playGame.bind(this)); //check this
        }
    }

    displayText() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Invaders shot down: " + this.score, 10, 20); //8?

        if (this.gameOver) {
            this.ctx.fillText("Game Over!", 8, 40);
        } else {
            this.ctx.fillText("Missiles remaining: " + (10 - this.missiles.length), 10, 40); //8?
        }
    }

    handleAliens() {
        for (let i = 0; i < this.aliens.length; i++) {
            if (this.aliens[i] != null) {
                if (this.tank.hits(this.aliens[i]) || this.aliens[i].y > this.canvas.height) {
                    this.gameOver = true;
                    return;
                }

                this.aliens[i].draw(this.ctx);
                this.aliens[i].move(this.canvas.width);

                for (let j = 0; j < this.missiles.length; j++) {
                    if (this.aliens[i] != null && this.aliens[i].hits(this.missiles[i])) {
                        this.score++;
                        this.deleteAlien(i);
                        this.deleteMissile(i);

                        this.explosionSound.load();
                        this.explosionSound.play();
                    }
                }
            }
        }
    }

    handleMissile() {
        if (this.missiles.length <= 9 && this.tank.shoot) {
            this.missiles.push(new Missile(this.tank.x + 20, this.tank.y));
            this.missileSound.load();
            this.missileSound.play();
            this.tank.shoot = false;
        }

        for (let i = 0; i < this.missiles.length; i++) {
            if (this.missiles[i] != null) {
                if (this.missiles[i].offScreen()) {
                    this.deleteMissile(i);
                } else {
                    this.missiles[i].draw(ctx);
                    this.missiles[i].move();
                }
            }
        }
    }

    spawn() {
        if (Math.random() < 0.05) {
            //location and speed
            this.aliens.push(new Alien(this.canvas.width * Math.random(), 0, Math.random() * 2 + 2));
        }
    }


    deleteAlien(index) {
        this.aliens[index] = null;
        this.aliens = this.aliens.filter(function(n) { return n;});
    }

    deleteMissile(index) {
        this.missiles[index] = null;
        this.missiles = this.missiles.filter(function(n) { return n;});
    }
}

export default Game;