const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
startBtn.addEventListener('click', changeColor());
stopBtn.addEventListener('click', stopChange());
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColor() {
  
    interval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor()
    }, 1000)

}
function stopChange() {
  clearInterval(interval)
}