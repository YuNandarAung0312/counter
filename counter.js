const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const count = document.getElementById("count");

let temp = 0;

increase.addEventListener("click", function () {
    temp++;
    count.textContent = temp;
});

decrease.addEventListener("click", function () {
    temp--;
    count.textContent = temp;
});

reset.addEventListener("click", function () {
    temp = 0;
    count.textContent = temp;
});
