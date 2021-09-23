class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.refs = {
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      mins: document.querySelector(`${selector} [data-value="mins"]`),
      secs: document.querySelector(`${selector} [data-value="secs"]`),
    };
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    setInterval(() => {
      const currentDate = Date.now();
      const components = this.getTimeComponents(this.targetDate - currentDate);

      this.refs.days.textContent = components.days;
      this.refs.hours.textContent = components.hours;
      this.refs.mins.textContent = components.mins;
      this.refs.secs.textContent = components.secs;
    }, 1000);
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2022'),
});
