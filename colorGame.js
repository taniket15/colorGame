var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add listeners to squares
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Wrong!";
            }
        });
    }
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function reset(){
    // generate new colors
    colors = generateRandomColor(numSquares);
    // pick new color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    // change squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }else{
            squares[i].style.display = "none";
        }
    }    
}

resetButton.addEventListener("click",function(){
   reset();
});

// change color of squares
function changeColor(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

// picks random color from colors array
function pickColor(){
    var ran;
    ran = Math.floor(Math.random()*colors.length);
    return colors[ran];
}

function generateRandomColor(num){
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    "rgb(232, 233, 433)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}















