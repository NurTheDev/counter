const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increase = () => {
  document.getElementById("value").innerText++;
};
increaseBtn.addEventListener("click", increase);
const decrease = () => {
  document.getElementById("value").innerText--;
};
decreaseBtn.addEventListener("click", decrease);
const reset = () => {
  document.getElementById("value").innerText = 0;
};
resetBtn.addEventListener("click", reset);
