import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selDate = selectedDates[0];
        if (selDate < Date.now()) {
            alert('Please choose a date in the future');
            startBtn.disabled = true
        } else {
            startBtn.disabled = false
        }
  },
};
const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onBtnStart)
flatpickr(input, options)
let selDate = null;
function onBtnStart() {
  timer.start
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
timer.start()