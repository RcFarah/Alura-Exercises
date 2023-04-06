//variáveis para os Carros

let yCars = [55, 135, 220, 310, 385, 470]
let xCars = [850, 850, 850, 850, 850, 850]
let velCars = [3, 8, 5, 6, 7, 4]
let widthCars = 110
let heightCars = 70


function showCars(){
  for (let count = 0; count < imgCars.length; count++){
    image(imgCars[count], xCars[count], yCars[count], 110, 70)
  }
}

function carMovement(){
  for(let count = 0; count < imgCars.length; count++){
    xCars[count] -=  velCars[count]
  }
}

function carLoop(){
  for(let count = 0; count < imgCars.length; count++){
      if(outWindowRange(xCars[count])){
      xCars[count] = 850
    }
  }
}

function outWindowRange(xCarro){
  return xCarro < -120;
}