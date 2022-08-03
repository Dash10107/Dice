
// Dice 1

var randomNumber1 = Math.floor(Math.random()*6)+1; 

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

//Dice 2

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";


 var count1 = 0;
 var count2 = 0;
 document.querySelector(".start-button").addEventListener("click",result);


 function result(){
    

    document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);
    document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//If player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
    count1++;
}

//If Player 2 wins
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
    count2++;
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}

document.querySelector(".start-button").innerHTML = "Stop";
document.querySelector(".start-button").addEventListener("click",function(){location.reload()});
}





