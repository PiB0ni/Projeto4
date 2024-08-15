let palavra;
let som;
let imagem;

function setup() {
  createCanvas(600, 600);
  palavra= diogo2();
  som.loop();
}
function preload(){
  imagem = loadImage("imagem1.jfif");
  som = loadSound("song.mp3")

}

function draw() {
  
  diogo();
  diogo2();
  
  let maximo = width;
  let minimo = 0;
  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 300,300);
}

function diogo(){
  background("yellow");
  image(imagem,0,0,600,600)
  fill ("darkblue")
  textSize(40);
  textAlign(CENTER,CENTER);
}

function diogo2(){
  let palavras = ["nah i'd win","120p","not like us","barbeiro errou o corte",]
  return random(palavras);
}
