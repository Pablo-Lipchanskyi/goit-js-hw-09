import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '250px',
  position: 'right-top',
  closeButton: false,
});

Notify.merge({
  useIcon: false,
});

const refs = {
  submitBtn: document.querySelector('.form > button'),
  form: document.querySelector('.form'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);
const formData = {};
function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  return formData;
}

function onFormSubmit(event) {
  event.preventDefault();

  const delayOne = Number(formData.delay);
  const step = Number(formData.step);
  const amount = Number(formData.amount);

  for (let i = 1; i <= amount; i += 1) {
    const delay = delayOne + step * (i - 1);

    createPromise(i, delay).then(notifySuccess).catch(notifyFail);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function notifySuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function notifyFail({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}