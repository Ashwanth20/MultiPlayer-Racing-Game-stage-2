var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishedPlayer;
var leaderBoard = 0;

var form, player, game;

var cars, car1, car2, car3, car4;
var bronzeImg, silverImg, goldImg, startImg

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");

  bronzeImg = loadImage("images/bronze medal.png")
  silverImg = loadImage("images/silver medal.png")
  goldImg = loadImage("images/gold medal.png")
  startImg = loadImage("images/game-1.jpg")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(startImg)

  if(playerCount === 4 && leaderBoard === 0){
    game.update(1);
  }
  if(leaderBoard === 4){
    game.update(2);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2 && leaderBoard === 4){
    game.displayRanks();
  }
}
