let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timer;

const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

startStopBtn.addEventListener("click", function() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        startStopBtn.textContent = "Start";
    } else {
        timer = setInterval(updateTime, 10);
        startStopBtn.textContent = "Stop";
    }
});

resetBtn.addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    startStopBtn.textContent = "Start";
    updateDisplay();
});

function updateTime() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    millisecondsDisplay.textContent = formatMilliseconds(milliseconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `0${time / 10}` : time / 10;
}