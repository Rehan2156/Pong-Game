// Variables for the ball
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;
var a=50,on=false,k=0,x=124,y=252,z=0;


// Variables for the paddle
var xPaddle,xPaddletop, yPaddletop;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;

var started = false;
var scorep1 = 0,scorep2=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
 // background(0);
  
}

function draw() {
  if(on==false){
    //background(0,20)
    textSize(50)
    fill(255,0,0)
    text("Multiplayer Bouncing ",50,75)
    text("Ball Game",165,130)
    textSize(20)
    fill(0,0,190)
    text("Player 1 is blue and uses A and S keys to move paddle left or right",100,175)
    text("Player 2 is red and uses LeftArrow and RightArrow keys to move ",100,225)
    text("paddle left or right",100,250);
    text("Touch the ball with the paddle to score points",100,300) 
    text("The Player who scores 10 points wins",100,350) 
textSize(30)
    fill(255,165,0)
  text("Click anywhere to start",100,windowHeight-50)
   if(mouseIsPressed)
     on=true
          k++}
  if(on){
  background(0,255)

  // Ball bounces off walls
	xBall += xBallChange;
	yBall += yBallChange;
	if (xBall < diameter/2 || 
      xBall > windowWidth - 0.5*diameter) {
		xBallChange *= -1;
  }
	if (yBall < diameter/2 || 
      yBall > windowHeight - diameter) {
    yBallChange *= -1;
	}
  
  // Detect collision with paddlebelow
  if ((xBall > xPaddle) &&
      (xBall <xPaddle + paddleWidth) &&    
      (yBall + (diameter/2) >= yPaddle)&&(yBall - (diameter/2) <= yPaddle+paddleHeight)) {
    xBallChange *= -1;
    yBallChange *= -1;
    scorep2++;
    x=200
    y=0
    z=0
  }
 //  if((xPaddle+paddleWidth==xBall-(diameter/2))&&(yBall>yPaddle)&&(yPaddle+paddleHeight>yBall)){
 // xBallChange *= -1;
 //    yBallChange *= -1;
 //  print("touch")
 //  }
  
  // Detect collision with paddletop
  if ((xBall >xPaddletop) &&
      (xBall <xPaddletop + paddleWidth) &&(yBall + (diameter/2) >= yPaddletop)&&(yBall - (diameter/2) <= yPaddletop+paddleHeight)){
    xBallChange *= -1;
    yBallChange *= -1;
    scorep1++;
    x=0
    y=0
    z=200
  }
  
  
  // Draw ball
	fill(x,y,z);
	noStroke();
	ellipse(xBall, yBall, diameter, diameter);
  
  // Update paddle location
  if (!started) {
    xPaddle = windowWidth / 2;
    yPaddle = windowHeight - 50;
    xPaddletop=windowWidth / 2;
    yPaddletop=50;
    started = true;
  }
  
  // Draw paddle
  fill(250,0,0);
  noStroke();
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
    fill(0,0,250)
  rect(xPaddletop, yPaddletop, paddleWidth, paddleHeight);
  
  // Draw score
  fill(0, 255, 255);
  textSize(24);
	text("Score Player 1: " + scorep1,10, 25 );
text("Score Player 2: " + scorep2, 10, windowHeight-25);
  
  
  if (keyIsDown(LEFT_ARROW)) {
    xPaddle -= 25;
  } else if (keyIsDown(RIGHT_ARROW)) {
    xPaddle += 25;
  }
 if (keyIsDown(65)) {
    xPaddletop -= 25;
  } else if (keyIsDown(68)) {
    xPaddletop += 25;
  }
  }
  if(scorep1==10){
    textSize(70)
    text("Player 1 wins",100,windowHeight/2);
    noLoop()
    }
  if(scorep2==10){
    textSize(70)
    text("Player 2 wins",100,windowHeight/2);
    noLoop()
    }
}
function mousePressed(){
on=!on;
}

  
