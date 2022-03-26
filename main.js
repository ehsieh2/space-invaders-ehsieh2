import Game from "./model/Game";
import "./style.css";


const canvas = document.getElementById("myCanvas");
let game  = new Game(canvas);
game.playGame();