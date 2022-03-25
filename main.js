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

}

function spawn() {

}


function deleteAlien(index) {
  aliens[index] = null;
  aliens = aliens.filter(function(n) { return n;});
}

function deleteMissile(index) {
  missiles[index] = null;
  missiles = missiles.filter(function(n) { return n;});
}