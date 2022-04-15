// Insert global (can be used in all functions) variables here


var gameState = 0;

var bgImg;
var bg;

var wasteBin;
var wasteBinImg;

var recycleBin;
var recycleBinImg;

var compostBin;
var compostBinImg;

var softPlasticsBin;
var softPlasticsBinImg;


function preload(){

   bgImg = loadImage("assets/jungle.png");

   wasteBinImg = loadImage("assets/wasteBin.png");
   recycleBinImg = loadImage("assets/recycleBin.png");

}

function setup(){
    createCanvas(1690, 840);

    wasteBin = createSprite(820, 600, 50, 50);
    wasteBin.addImage(wasteBinImg);
    wasteBin.scale = 0.2;

    recycleBin = createSprite(720, 600, 50, 50);
    recycleBin.addImage(recycleBinImg);
    recycleBin.scale = 0.2;

}

function draw(){

    image(bgImg, 0, 0, width, height);







    drawSprites(); // To display sprites
}
