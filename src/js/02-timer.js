import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', Dates)
flatpickr(input, options)
let selDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selDate = selectedDates[0];
  },
};

function Dates() {
  if (selDate > Date.now) {
    console.log('Its a magic')
  }
}





const timer = {
  start() {
    const startTime = Date.now()
    setInterval(() => {
      const currentTime = Date.now()
      console.log(startTime - currentTime)
    }, 1000)
  }
}
timer.start