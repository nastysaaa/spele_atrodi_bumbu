let score = 0;
let timeLeft = 30;
let timer;
let gameStarted = false;

function startGame() {
  const name = document.getElementById("playerName").value.trim();
  if (!name) {
    alert("Lūdzu, ievadi savu vārdu!");
    return;
  }

  if (gameStarted) return;
  gameStarted = true;

  score = 0;
  timeLeft = 30;
  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;

  document.getElementById("ball").style.display = "block";
  moveBall();

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      gameStarted = false;
      document.getElementById("ball").style.display = "none";
      alert(`${name}, laiks beidzies! Tavs rezultāts: ${score}`);
    }
  }, 1000);
}

function moveBall() {
  if (!gameStarted) return;
  score++;
  document.getElementById("score").textContent = score;

  const container = document.getElementById("game-container");
  const ball = document.getElementById("ball");

  const maxX = container.clientWidth - ball.offsetWidth;
  const maxY = container.clientHeight - ball.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  ball.style.left = x + "px";
  ball.style.top = y + "px";
}

function restartGame() {
  clearInterval(timer);
  gameStarted = false;
  document.getElementById("score").textContent = "0";
  document.getElementById("time").textContent = "30";
  document.getElementById("ball").style.display = "none";
}
