var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  writeGradient();
}

function writeGradient() {
  h3.textContent = body.style.background + ";";
}

// function initializeGradient(left, right) {
//   body.style.background =
//     "linear-gradient(to right, " + left + ", " + right + ")";
//   writeGradient();
// }

// create random gradient
// random colors generate each time function is called
function randomGradient() {
  var randomColor1 =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
  var randomColor2 =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
  color1.value = randomColor1;
  color2.value = randomColor2;
  setGradient();
}

// input event - anytime the input changes, we can detect that
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// 1. Write code so that the colour inputs match the background generated on the first page load.

// 2. Display the initial CSS linear gradient property on page load.
h3.textContent =
  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
random.addEventListener("click", randomGradient);
