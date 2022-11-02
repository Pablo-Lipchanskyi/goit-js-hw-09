const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


function getRandomHexColor() {
  return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColor() {
    const interval = setInterval(() => {
        document.body.style.backgroundColor = `rgb(${getRandomHexColor()})`
    },1000)
}
startBtn.addEventListener('click', changeColor());