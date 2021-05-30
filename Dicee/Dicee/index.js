// random image for dice 1 setter

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var diceSrc1 = "images/" + randomDiceImage1;
document.querySelectorAll("img")[0].setAttribute("src",diceSrc1);

// random image for dice 2 setter

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var diceSrc2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",diceSrc2);

// the game outcome who wins

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber1< randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else { 
    document.querySelector("h1").innerHTML="Its Draw Man";
}