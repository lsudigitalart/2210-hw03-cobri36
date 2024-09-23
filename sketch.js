function setup() 
{
createCanvas(400, 400);
background(100);

///////////////
/////GRID/////
/////////////

  //var circleSize = 10;
  //for(var i = circleSize/2; i < width; i = i + circleSize*1.25)
  //for(var n = circleSize/2; n <innerHeight; n = n + circleSize)
  //{
  //ellipse(i, circleSize/2, circleSize);
  //console.log("that value of i is now: ", i);
  //}

////////////////
// CONNECTIONS //
////////////////

scale(0.1);
translate(width*4, height*3.5);

  for(var i = 0; i < 1001; i++){
    translate(width/2, i*4);
    rotate(PI/10)
    beginShape();
    vertex(width/2, height/2);
    vertex(width, height);
    vertex(0, height);
    endShape();

    beginShape();
    vertex(0, 0);
    vertex(width, height);
    endShape();
    
    strokeWeight(i/30);
  }

}

function draw() {
  // Put things you want to over and over here. 
}