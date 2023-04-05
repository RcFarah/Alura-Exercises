
// variáveis para a Bola
var xBola = 400
var yBola = 300
var diametroBola = 25
var raioBola = diametroBola / 2

// variáveis para o movimento da Bola
var velXBola = 5
var velYBola = 5


// variáveis para as raquetes
var xRaquetePlayer = 10
var yRaquetePlayer = yRaquetePlayer2 = 250
var grossuraRaqPlayer = grossuraRaqPlayer2 = 10
var alturaRaqPlayer = alturaRaqPlayer2 = 85
var xRaquetePlayer2 = 780
var topLeftRadius = topRightRadius = bottomLeftRadius = bottomRightRadius = 5
var velYRaqPlayer2

var hit = false

// pontuação
var pontosPlayer = 0
var pontosPlayer2 = 0

// sons do jogo
var acertaRaq;
var ponto;
var backsound;

function setup() {
  createCanvas(800, 600);
  backsound.loop();
  
}

function draw() {
  background(25);
  noStroke()

  criaBola();
  movimentaBola();
  
  colisaoBolaBorda();
  
  criaRaquete(xRaquetePlayer, yRaquetePlayer);
  criaRaquete(xRaquetePlayer2, yRaquetePlayer2)
  
  movRaqPlayer();
  movRaqPlayer2();
  //colisaoRaqPlayerBola();
  collidRaqBola(xRaquetePlayer, yRaquetePlayer);
  collidRaqBola(xRaquetePlayer2, yRaquetePlayer2);
  
  criarPlacar();
  marcaPonto();
  mapa()
}

// função para a criação da Bola
function criaBola(){
  fill(255, 255, 255)
  circle(xBola, yBola, diametroBola);
  describe('círculo com contorno preto, no centro da tela')
}

// função para a criação da movimentação da Bola
function movimentaBola(){
  xBola += velXBola
  yBola += velYBola
}

// função para a criação da colisão da Bola com a Borda do jogo
function colisaoBolaBorda(){
    if (xBola + raioBola > width || xBola - raioBola < 0){
    velXBola *= -1
  }
  
  if (yBola + raioBola > height || yBola - raioBola< 0) {
    velYBola *= -1
  }
}

// função para a criação das raquetes
function criaRaquete(x, y){
  rect(x, y, grossuraRaqPlayer, alturaRaqPlayer, topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius);
  describe('retângulo com contorno preto, na esquerda-meio da tela')
}

// função para criar a movimentação da raquete do player
function movRaqPlayer(){
  if(keyIsDown(UP_ARROW)){
    yRaquetePlayer2 -= 5;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquetePlayer2 += 5
  }
}

// função para criar a colisão entre a bola e a raquete do player
function colisaoRaqPlayerBola(){
  if(xBola - raioBola < xRaquetePlayer + grossuraRaqPlayer && yBola - raioBola < yRaquetePlayer + alturaRaqPlayer && yBola + raioBola > yRaquetePlayer){
    velXBola *= -1
  }
}

// função para criar a colisão entre a bola e a raquete do player importando bibliotecas
function collidRaqBola(x, y){
  hit = collideRectCircle(x, y, grossuraRaqPlayer, alturaRaqPlayer, xBola, yBola, 25)
  
  if(hit){
    velXBola *= -1
    acertoRaq.play()
  }
}

// função para criar o movimento da raquete do bot
function movRaqPlayer2(){
  if(keyIsDown(87)){
    yRaquetePlayer -= 5
  }
  
  if(keyIsDown(83)){
    yRaquetePlayer += 5
  }
}

// função para incluir o placar na tela
function criarPlacar(){
  fill(color(192,192,192))
  rect(175, 10, 50, 50)
  rect(575, 10, 50, 50)
  textAlign(CENTER)
  textSize(40)
  fill(255,215,0)
  text(pontosPlayer, 200, 50)
  text(pontosPlayer2, 600, 50)
}

// função para somar ponto para os players
function marcaPonto(){
  if(xBola > 785){
    pontosPlayer += 1;
    xBola = 400;
    ponto.play()
  }
  
  if(xBola < 15){
    pontosPlayer2 += 1;
    xBola = 400;
    ponto.play()
  }
}

// criação do mapa mais detalhada
function mapa(){
  fill(color(50,205,50))
  rect(-5, -5, 810, 10)
  rect(-5, 595, 810, 10)
  rect(-5, -5, 10, 610)
  rect(795, -5, 10, 610)
  rect(400, 0, 5, 610)
}

function preload(){
  backsound = loadSound("trilha.mp3")
  acertoRaq = loadSound("raquetada.mp3")
  ponto = loadSound("ponto.mp3")
}