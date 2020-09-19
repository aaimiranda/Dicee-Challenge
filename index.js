var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 - 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // image dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0]; // select element first image to change
image1.setAttribute("src", randomImageSource); // set attribute source to change

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // random number between 1 - 6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // image dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // select element second image to change and set attribute source to change

// if Player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥇 Player 1 Wins! 🎉";
} // if Player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎉 Player 2 Wins! 🥇";

} // if it's a draw game
else {
    document.querySelector("h1").innerHTML = "🎲 Draw game! 🙂";
}

