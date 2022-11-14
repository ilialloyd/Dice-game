var randomNumber1 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

var originalText = document.querySelector("h1").innerHTML;

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "DRAW";
}

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩PLAYER 1 WINS!";

}

if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!🚩";

}