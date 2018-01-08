var numSquares = 6;
var colors = generateRandomColor(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

easyButton.addEventListener("click",function(){
    numSquares = 3;
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none"
        }
    }

});

hardButton.addEventListener("click",function(){
    numSquares = 6;
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();  
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click",function(){
    // generate new colors
    colors = generateRandomColor(numSquares);
    // pick new color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    // change squares
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "steelblue";
        resetButton.textContent = "New Colors"
    }    
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // add colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    // add listeners to squares
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

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















