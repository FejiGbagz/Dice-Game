// Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var dicePlay1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll(".dice img")[0].setAttribute("src", dicePlay1);


// Dice 2 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dicePlay2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll(".dice img")[1].setAttribute("src", dicePlay2);


// Pick Winner

if (dicePlay1 > dicePlay2) {document.querySelector("h1").innerHTML = "Player 1 Wins!";}
else if (dicePlay1 == dicePlay2) {document.querySelector("h1").innerHTML = "Draw!";}
else {document.querySelector("h1").innerHTML = "Player 2 Wins!";}