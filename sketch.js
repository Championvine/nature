var devine=0;
//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background("green"); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(200,200,100,100); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/1,300,500); 
  stroke(255,255,127)
  fill(200,200,100,100); 
  ellipse(width/2,height/4,500,300); 
  fill(200,200,100,100);
  ellipse(random(width),random(height),20,20)
  ellipse(mouseX,mouseY,50,50)
  stroke(260,260,130);
  strokeWeight(2);
  textFont("HELVETICA");
  textAlign(CENTER);
  textSize(100)
  text("NATURE",width/2,height/3);
}
function mousedPressed(){
	if(devine>50){
		devine=0;
	}

}
