//variáveis para o ator
let xActor = 100
let yActor = 560
let collision = false
let points = 0

function showActor(){
  image(imgActor, xActor, yActor, 50, 50)
}

function actorMovement(){
  if(keyIsDown(UP_ARROW) || keyIsDown(87)){
    yActor -= 2.5
  }
  
  if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
    if(canMove()){
      yActor += 2.5
    }
  }
}

function verifyCollision(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let count = 0; count < imgCars.length; count += 1){
    collision = collideRectCircle(xCars[count], yCars[count], widthCars, heightCars, xActor, yActor, 10)
    if (collision){
      yActor = 560
      points--
    }
  }
}

function pointsInclude(){
  textAlign(CENTER);
  textSize(25);
  text(points, width / 2, 35)
}

function pointCount(){
  if(yActor<= 15){
    yActor = 560
    points++
  }
}

function canMove(){
  return yActor < 560
}