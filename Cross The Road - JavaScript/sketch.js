function setup(){
  createCanvas(800, 600);
}

function draw(){
  background(imgRoad);
  showActor();
  showCars();
  pointsInclude();
  carMovement();
  carLoop();
  actorMovement();
  verifyCollision();
  pointCount();
}