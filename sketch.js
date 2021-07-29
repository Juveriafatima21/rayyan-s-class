
var a;
function setup() {
  createCanvas(400, 400);
  a=createSprite(200,200,40,40)
}

function draw() {
  background("black");
 if(keyIsDown(LEFT_ARROW)){
   a.x=a.x-2;
 }
 if(keyIsDown(RIGHT_ARROW)){
  a.x=a.x+2;
}
if(keyIsDown(UP_ARROW)){
  a.y=a.y-2;
}
 drawSprites()
}