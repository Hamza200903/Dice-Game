;

var randomNum1=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "dice" + randomNum1 + ".png");


var randomNum2=Math.floor(Math.random()*6)+1;

document.querySelector(".img2").setAttribute("src", "dice" + randomNum2 + ".png");

if(randomNum1>randomNum2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";

  
}
if(randomNum2>randomNum1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }

  if((randomNum1 === randomNum2)){
    document.querySelector("h1").innerHTML = "Draw!";
  }
