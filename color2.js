var numSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButton = document.querySelectorAll(".mode");
init();

function init() {
  //modebuttons
  for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function () {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "EASY") {
        numSquares = 3;
      } else numSquares = 6;
      rest();
    });
  }

  //checking of the clicked clor being done here + chnging the h1,msg,colors,if not correct color etc.
  for (var i = 0; i < square.length; i++) {
    // add click listeners
    square[i].addEventListener("click", function () {
      //assigning the color to a var
      var clickedColor = this.style.backgroundColor;
      // comparing the colors
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "PLAY AGAIN";
      } 
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
  rest();
}

function rest() {
  colors = generateRandomColors(numSquares);
  // pick random color from the array for winning
  pickedColor = pickColor();
  // change color display
  colorDisplay.textContent = pickedColor;
  // change colors from square

  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.display = "block";
      square[i].style.backgroundColor = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "new color";
}

resetButton.addEventListener("click", function () {
  rest();
});

function changeColors(color) {
  // loop thru alll the squares
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  // add num random colors
  for (var i = 0; i < num; i++) {
    // random color pushed to the array for num times
    arr.push(randomColors());
  }
  // return array
  return arr;
}

function randomColors() {
  // pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0 to 255
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
