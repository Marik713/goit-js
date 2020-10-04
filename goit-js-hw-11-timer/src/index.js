import './styles.css';

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};


const timer = {
    intervalId: null,
    start() {
        this.intervalId = setInterval(() => {
            const targetDate = new Date('Dec 19,2020').getTime();
            const currentDate = Date.now();
            const deltaTime = targetDate - currentDate;

            updateTimer(deltaTime);
        }, 1000);
    }
};

function updateTimer(time) {
    const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}

function pad(value) {
    return String(value).padStart(2, "0")
};

function padDays(value) {
    return String(value).padStart(3, "0")
};

timer.start()