const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block2 , block3, block4, block5, block7, block8, block9, block10, block11, block14, block15;
var blocks2 , blocks2, blocks3, blocks4, blocks5, blocks6, blocks7, blocks8;


function preload(){
     polygon_img=loadImage("polygon.png"); 
    
    }


    function setup(){
    //level one block1 = new Block(300,275,30,40); 
//console.log(block1); 
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40); 
block7 = new Block(480,275,30,40);
 
//level two block8 = new Block(330,235,30,40);
 block9 = new Block(360,235,30,40); 
 block10 = new Block(390,235,30,40); 
 block11 = new Block(420,235,30,40); 
 block12 = new Block(450,235,30,40); 
 
 //level three block13 = new Block(360,195,30,40); 
 block14 = new Block(390,195,30,40); 
 block15 = new Block(420,195,30,40); 
 
 //top block16 = new Block(390,155,30,40); 
 //set 2 for second stand 
 //level one blocks1 = new Block(640,175,30,40); 
 blocks2 = new Block(670,175,30,40); 
 blocks3 = new Block(700,175,30,40); 
 blocks4 = new Block(730,175,30,40); 
 blocks5 = new Block(760,175,30,40); 
 //level two blocks6 = new Block(670,135,30,40); 
 blocks7 = new Block(700,135,30,40); 
 blocks8 = new Block(730,135,30,40); 
 //top blocks9 = new Block(700,95,30,40);

 p1 = createSprite(200,400,10,10);
 p2 = createSprite(200,400,10,10);
    }

    function draw(){

        drawSprites();

    }

    function keyPressed(){
        if(keyCode === 32){
            p1.attach(p2.body);
        }
    }
    
    