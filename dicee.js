var randomDiceNumber1 =Math.floor((Math.random()*6)+1);
var randomDiceImage1 = "dice"+randomDiceNumber1+".png";//dice2.png
var randomDiceSource1 = "images/"+randomDiceImage1;//images/dice2.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceSource1);

var randomDiceNumber2 =Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "dice"+randomDiceNumber2+".png";
var randomDiceSource2 = "images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceSource2);

if(randomDiceNumber1>randomDiceNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(randomDiceNumber1<randomDiceNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}else{
    document.querySelector("h1").innerHTML="🚩 Draw! 🚩"
}