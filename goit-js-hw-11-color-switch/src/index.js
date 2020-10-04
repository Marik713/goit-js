import './styles.css';
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const min = 0;
const max = colors.length;

const switchColor = {
    intervalid: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalid = setInterval(() => {
            bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
        }, 1000);
    },

    stop() {
        this.isActive = false;
        clearInterval(this.intervalid);
        bodyRef.style.backgroundColor = '';
    },
};

btnStartRef.addEventListener('click', switchColor.start.bind(switchColor));
btnStopRef.addEventListener('click', switchColor.stop.bind(switchColor));