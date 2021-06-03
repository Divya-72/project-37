var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var bg1;

var question, contestant, quiz;


function preload(){
bg1=loadImage("bg1.jpg");


}


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(bg1);

  
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
