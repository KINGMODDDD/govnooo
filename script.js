window.onload = function () {
document.body.classList.add('loaded_hiding');
window.setTimeout(function () {
document.body.classList.add('loaded');
document.body.classList.remove('loaded_hiding');
}, 500);
}

document.addEventListener("DOMContentLoaded", function() {
const header = document.querySelector("header");
window.addEventListener("scroll", function() {
header.classList.toggle("sticky", window.scrollY > 20);
});
});

let valueDisplays = document.querySelectorAll(".desc-count");
let interval = 2000;
let numSteps = 1000;

valueDisplays.forEach((valueDisplay) => {
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / numSteps);
let startValue = 0;
let increment = (endValue - startValue) / numSteps;
let step = 0;

let counter = setInterval(function () {
startValue += increment;
step++;
valueDisplay.textContent = Math.round(startValue);
if (step >= numSteps) {
clearInterval(counter);
valueDisplay.textContent = endValue;
}
}, duration);
});