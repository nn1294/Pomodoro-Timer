const timeElement = document.querySelector('.time');
const playButton = document.querySelector('.play');
const restartButton = document.querySelector('.restart');

let secondsRemaining = 25 * 60; // 25 minutes in seconds
let isRunning = false;

const startTimer = () => {
  if (isRunning) return;
  isRunning = true;
  const countdown = setInterval(() => {
    secondsRemaining--;
    timeElement.textContent = formatTime(secondsRemaining);
    if (secondsRemaining === 0) {
      clearInterval(countdown);
      isRunning = false;
      // Add sound effect or alert here
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(countdown);
  isRunning = false;
};

const restartTimer = () => {
  secondsRemaining = 25 * 60;
  timeElement.textContent = formatTime(secondsRemaining);
  stopTimer();
};

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes < 10 ? '0' + minutes : minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
};

playButton.addEventListener('click', startTimer);
restartButton.addEventListener('click', restartTimer);
