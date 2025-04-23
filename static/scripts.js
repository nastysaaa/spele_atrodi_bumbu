let score = 0;
let timeLeft = 30;
let timer;
let ballSize = 50;
let difficultyLevel = 1;

const ball = document.getElementById('ball');
const container = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

function moveBall() {
  const maxX = container.clientWidth - ballSize;
  const maxY = container.clientHeight - ballSize;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  ball.style.left = `${newX}px`;
  ball.style.top = `${newY}px`;

  score++;
  scoreDisplay.textContent = score;

  if (score % 10 === 0) {
    difficultyLevel++;
    ballSize = Math.max(25, ballSize - 5);
    ball.style.width = `${ballSize}px`;
    ball.style.height = `${ballSize}px`;
  }
}

function updateTime() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timer);
    alert(`⏱️ Spēle beigusies!\n🎯 Tavi punkti: ${score}`);
  }
}

function restartGame() {
  score = 0;
  timeLeft = 30;
  ballSize = 50;
  difficultyLevel = 1;

  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;

  ball.style.width = `${ballSize}px`;
  ball.style.height = `${ballSize}px`;

  moveBall();
  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

window.onload = () => {
  restartGame();
}
