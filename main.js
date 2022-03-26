import "./style.css";
import Alien from "./Alien.js";
import Missile from "./Missile.js";
import Tank from "./Tank.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

tank = new Tank(canvas.width / 2 - 25, canvas.height - 60);
aliens = [];
missiles = [];
score = 0;
gameOver = false;

missileSound = new Audio("../assets/shoot.wav");
explosionSound = new Audio("../assets/explosion.wav");
music = new Audio("../assets/music.mpeg");
music.loop = true;

//run game here

function displayText() {
  this.ctx.font = "16px Arial";
  this.ctx.fillStyle = "#0095DD";
  this.ctx.fillText("Invaders shot down: " + this.score, 10, 20); //8?

  if (this.gameOver) {
      this.ctx.fillText("Game Over!", 8, 40);
  } else {
      this.ctx.fillText("Missiles remaining: " + (10 - this.missiles.length), 10, 40); //8?
  }
}

function handleAliens() {

}

function handleMissile() {
  if (missiles.length <= 9 && tank.shoot) {
    missiles.push(new Missile(tank.x + 20, tank.y));
    missileSound.load();
    missileSound.play();
    tank.shoot = false;
  }

  for (let i = 0; i < missiles.length; i++) {
    if (missiles[i] != null) {
      if (missiles[i].offScreen()) {
        deleteMissile(i);
      } else {
        missiles[i].draw(ctx);
        missiles[i].move();
      }
    }
  }
}

function spawn() {
  if (Math.random() < 0.05) {
    //location and speed
    this.aliens.push(new Alien(this.canvas.width * Math.random(), 0, Math.random() * 2 + 2));
  }
}


function deleteAlien(index) {
  aliens[index] = null;
  aliens = aliens.filter(function(n) { return n;});
}

function deleteMissile(index) {
  missiles[index] = null;
  missiles = missiles.filter(function(n) { return n;});
}