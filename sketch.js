var wall,thickness;
var bullet,speed,weight;


function setup () {
createCanvas(1600,1000)
thickness=random(22,83)
wall=createSprite(1200,200,thickness,height/2);

speed=random(23,31)
weight=random(30,52)
bullet=createSprite(50, 400, 50, 10);
bullet.velocityX = speed;
bullet.shapeColor="yellow";

}
function draw(){
background("yellow")

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)


if(damage>10){
wall.shapeColor="green"
}

if(damage<10){
wall.shapeColor="blue"
}
hasCollided();
drawSprites();
}



