function preload() {
    mario_gameover = loadSound("gameover.wav")
    mario_jump = loadSound("jump.wav")
    mario_coin = loadSound("coin.wav")
    mario_kick = loadSound("kick.wav")
    mario_die = loadSound("mariodie.wav")
    world_start = loadSound ("world_start.wav")
    setSprites()
    MarioAnimation()
}
function setup() {
  canvas = createCanvas(1240,336)
  canvas.parent("canvas")
  instializeInSetup(mario)
  video = createCapture(VIDEO)
  video.size(800,400)
  video.parent("gameconsole")
posenet = ml5.poseNet(video,modelloaded)
posenet.on("pose",gotpose)
}
function modelloaded() {
  console.log("consola cargada")
}
function gotpose(results) {
  if (results.length > 0) {
    console.log(results)
    noseX = results[0].pose.nose.X
    noseY = results[0].pose.nose.Y
  }
}
function draw() {
   game() 
}