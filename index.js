var randomNumber1 = Math.floor(Math.random()*6)+1; // Dice 1

var randomDiceImage = "dice" + randomNumber1 + ".png"; //random image

var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource) // random image

//Dice 2

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource = "images/dice" + randomNumber2 + ".png";


 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource)

//If player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}

//If Player 2 wins
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}