var randomNumber1 = Math.floor(Math.random()*6) +1 ;
var image = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", image);

var randomNumber2 = Math.floor(Math.random()*6) +1 ;
var image = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", image);


if (randomNumber1 > randomNumber2){
  document.querySelector("H1").innerHTML = "🚩Player 1 wins!"
}
if (randomNumber1 < randomNumber2){
  document.querySelector("H1").innerHTML = "Player 2 wins! 🚩"
}

if (randomNumber1 == randomNumber2){
  document.querySelector("H1").innerHTML = "Draw!"
}
