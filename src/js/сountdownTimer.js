import refs from './refs';
const targetDate = new Date('Jan 01, 2022');

const countdownTimer = {
  init() {
    setInterval(() => {
      const currentTime = Date.now();

      const time = targetDate - currentTime;

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      refs.days.textContent = days;

      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      refs.hours.textContent = hours;

      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      refs.mins.textContent = mins;

      const secs = Math.floor((time % (1000 * 60)) / 1000);
      refs.secs.textContent = secs;
    }, 1000);
  },
};

countdownTimer.init();

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jan 01, 2022'),
// });
