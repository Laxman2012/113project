function preload(){

}

function setup()
{

   canvas= createCanvas(800,450);
   canvas.position(110,250);
   video = createCapture(VIDEO);
   video.hide();

}

function draw()
{

   image(video,300,125,200,200);
   fill(0,255,0);
   circle(50,50,75);
   circle(750,49,75);
   circle(50,400,75);
   circle(750,400,75);
   fill(255,0,0);
   rect(86, 35,628,30);
   rect(86, 385,628,30);
   rect(35,84,30,279);
   rect(735,84,30,279);
   

}

function take_snapshot()
{

  save('Laxman_photos');

}