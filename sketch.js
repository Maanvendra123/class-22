function setup() {
  createCanvas(1200,800);
 fixedRact=createSprite(600,400,50,80)
 fixedRact.shapeColor="blue"
 movingRact=createSprite(400,200,80,30)
 movingRact.shapeColor="blue"
 gameObject1=createSprite(100,200,50,50)
 gameObject1.shapeColor="blue"
 gameObject2=createSprite(200,200,50,50)
 gameObject2.shapeColor="blue"
 gameObject3=createSprite(300,200,50,50)
 gameObject3.shapeColor="blue"
 gameObject4=createSprite(400,200,50,50)
 gameObject4.shapeColor="blue"
}

function draw() {
  background(255,255,255);
  movingRact.x=mouseX
movingRact.y=mouseY

 
 if(isTouching(movingRact,gameObject1)){
  gameObject1.shapeColor="red"
  movingRact.shapeColor="red"
 }
else{
  gameObject1.shapeColor="blue"
  movingRact.shapeColor="blue"
}
if(isTouching(movingRact,gameObject2)){
  gameObject2.shapeColor="red"
  movingRact.shapeColor="red"
 }
else{
  gameObject2.shapeColor="blue"
  movingRact.shapeColor="blue"
}
  drawSprites();
}
function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj2.width/2+obj1.width/2
    &&obj2.x-obj1.x<obj2.width/2+obj1.width/2
   && obj1.y-obj2.y<obj2.height/2+obj1.height/2
    &&obj2.y-obj1.y<obj2.height/2+obj1.height/2){
    return true;
    }
    
    else{
     return false;
    }
}