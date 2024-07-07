document.addEventListener("DOMContentLoaded", () => {
  let main = document.querySelector("main");
  let nums = document.querySelector(".nums");
  let count = document.querySelector(".count");
  let endValue = 100;
  let duration = 2500;
  let incrementTime = duration / endValue;
  let currentValue = 1;
  let counterInterval = setInterval(() => {
    nums.textContent = currentValue;
    main.style.filter = "blur(" + (20 - (currentValue * 2) / 10) + "px)";
    count.style.opacity = (endValue - currentValue) / 100;
    if (currentValue >= endValue) {
      clearInterval(counterInterval);
    }
    currentValue++;
  }, incrementTime);
});
