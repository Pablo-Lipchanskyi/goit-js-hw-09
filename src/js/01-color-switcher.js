const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChange)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timer = null
function changeColor() {
  timer = setInterval(() => {
  document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (getRandomHexColor) {
    startBtn.disabled = true
  }
}
function stopChange() {
  clearInterval(timer)
  startBtn.disabled = false
}