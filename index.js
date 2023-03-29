//First Dice
var randomNumber1 = Math.floor(Math.random()*6) + 1;
console.log (randomNumber1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Second Dice
var randomNumber2 = Math.floor(Math.random()*6) + 1;
console.log (randomNumber2);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//Result statement

if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").innerHTML="🤝 Empate!";
}
else if (randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML= "🚩 Jugador 1 gana!";
}
else if (randomNumber2>randomNumber1){
    document.querySelector(".container h1").innerHTML = "🚩 Jugador 2 Gana!";
}

