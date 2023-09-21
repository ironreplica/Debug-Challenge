let input = document.querySelector("#name");
let display = document.querySelector(".DISPLAY");

input.addEventListener("input", function () {
  var name = input.value;
  display.textContent = name;
});

function simpleMath(num1, num2) {
  return num1 + num2;
}

console.log(simpleMath(2, 3));
