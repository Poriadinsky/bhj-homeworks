let timer = 59;

function updateTimer() {
  const timerElement = document.getElementById('timer');
  timerElement.innerText = timer;
}
const intervalId = setInterval(() => {
  if (timer > 0) {
    timer--;
    updateTimer();
  } else {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}, 1000);