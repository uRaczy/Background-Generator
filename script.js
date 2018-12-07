var body = document.querySelector("html");
var c1 = document.getElementById("color1");
var c2 = document.getElementById("color2");
var deg = document.getElementById("suwak");
var button = document.getElementById("button");
var css = document.querySelector("p");

body.style.background = "linear-gradient(0deg, #a1222f, #4d7227)";

function showInfo() {
    css.textContent = body.style.background + ";";
}

function random() {
    return Math.floor(Math.random() * (255 - 0) + 0);
  }

function random2() {
    return Math.floor(Math.random()*360);
}

function setBackground() {
    body.style.background 
    = "linear-gradient(" 
    + deg.value 
    + "deg," 
    + c1.value 
    + "," 
    + c2.value 
    + ")";

    showInfo();
}

function setBackgroundRandom() {
    body.style.background = "linear-gradient("
    + random2()
    + "deg," 
    + "rgb(" + random() + "," + random() + "," + random() + ")" 
    + "," 
    + "rgb(" + random() + "," + random() + "," + random() + ")" 
    + ")";

    showInfo();
}

deg.addEventListener("input", setBackground);

c1.addEventListener("input", setBackground);

c2.addEventListener("input", setBackground);

button.addEventListener("click", setBackgroundRandom);


