const time = document.querySelector('.time');
const startPauseBtn = document.querySelector('.start-pause');
const resetBtn = document.querySelector('.reset');

let isRunning = false;
let minutes = 25;
let seconds = 0;
let interval;

function updateTimer(minutes, seconds) {
    time.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    startPauseBtn.textContent = 'Pause';
    startPauseBtn.style.backgroundColor = '#ffc107';

    interval = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }

        if (minutes === 0 && seconds === 0) {
            clearInterval(interval);
            isRunning = false;
            startPauseBtn.textContent = 'Start';
            startPauseBtn.style.backgroundColor = '#28a745';
            alert('Time is up!');
        }

        updateTimer(minutes, seconds);
    }, 1000);
}

function pauseTimer() {
    if (!isRunning) return;
    isRunning = false;
    startPauseBtn.textContent = 'Start';
    startPauseBtn.style.backgroundColor = '#28a745';
    clearInterval(interval);
}

function resetTimer() {
    minutes = 25;
    seconds = 0;
    updateTimer(minutes, seconds);
    // Clear the interval before resetting
    clearInterval(interval);
    isRunning = false;
    startPauseBtn.textContent = 'Start';
    startPauseBtn.style.backgroundColor = '#28a745';
}

startPauseBtn.addEventListener('click', () => {
    isRunning ? pauseTimer() : startTimer();
});

resetBtn.addEventListener('click', resetTimer);
