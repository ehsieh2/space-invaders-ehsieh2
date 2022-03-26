import "./style.css";
import Game from "./model/Game";

const canvas = document.getElementById("myCanvas");
const game  = new Game(canvas);
game.playGame();