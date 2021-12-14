var snowflake,snowflakeImg
var bg,bgImg;
var player;
function preload() {
  snowflakeImg = loadImage("snow2.webp");
  bgImg = loadImage("snow1.jpg");
  player = loadSound("24981110_christmas-music-box-jingle-bells_by_audio_therapy_preview (1).mp3");
 
}
function setup() {
  createCanvas(1500,800);
 
  player.play();
  
}

function draw() {
  background(bgImg);  
  
  drawSprites();

 createsnowflakeImg();

}

function createsnowflakeImg(){
  if(frameCount%20===0){
  snowflake = createSprite(random(0,1500), 0, 50, 50);
  
  snowflake.velocityY = 1;
  snowflake.addImage(snowflakeImg);
  snowflake.scale = 0.1;

  }
}
