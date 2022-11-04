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
    console.log(selDate.getTime())
  },
};
const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('[data-start]');
startBtn.addEventListener('click', onBtnStart)
flatpickr(input, options)
let selDate = null;



function onBtnStart() {
timer.start()
}
const timer = {
    
    refs: {},
    start() {
        const delta = selDate - Date.now();
         console.log(delta);
        this.getRefs();
        setInterval(() => {
            const delta = selDate - Date.now();

            if (delta <= 0) {
                clearInterval(intervalId)
            };
            
            const data = this.convertMs(delta);
            this.refs.days.textContent = this.addLeadinZero(data.days);
            this.refs.hours.textContent = this.addLeadinZero(data.hours);
            this.refs.minutes.textContent = this.addLeadinZero(data.minutes);
            this.refs.seconds.textContent = this.addLeadinZero(data.seconds);
        }, 1000)
    },
    getRefs() {
        this.refs.days = document.querySelector('[data-days]');
        this.refs.hours = document.querySelector('[data-hours]');
        this.refs.minutes = document.querySelector('[data-minutes]');
        this.refs.seconds = document.querySelector('[data-seconds]');
    },

    convertMs(delta) {
        const days = Math.floor(delta / 1000 / 60 / 60 / 24);
        const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(delta / 1000 / 60) % 60;
        const seconds = Math.floor(delta / 1000) % 60;
        return { days, hours, minutes, seconds };
    },
    addLeadinZero(value) {
        return String(value).padStart(2, '0');
    }

};