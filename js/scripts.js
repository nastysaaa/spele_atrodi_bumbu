let score = 0;
let timeLeft = 30;
let timer;
let ballSize = 50;
let difficultyLevel = 1;

const ball = document.getElementById('ball');
const container = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const playerNameInput = document.getElementById('playerName');

// Funkcija pārvieto bumbu uz jaunu vietu un palielina punktus
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

// Funkcija samazina atlikušo laiku
function updateTime() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        alert(`⏱️ Spēle beigusies!\n🎯 Tavi punkti: ${score}`);
        submitResult();
    }
}

// Spēles atiestatīšana
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
console.log("JS ielādēts!");

function startGame() {
  alert("Sākam spēli!");
}

// Rezultāta nosūtīšana uz serveri
function submitResult() {
    const playerName = playerNameInput.value.trim();
    if (!playerName) return;

    const result = {
        vards: playerName,
        score: score,
        datums: new Date().toLocaleDateString('lv-LV')
    };

    fetch('/submit_result', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
    }).then(res => {
        if (res.ok) {
            console.log('Rezultāts saglabāts!');
        } else {
            console.error('Neizdevās saglabāt rezultātu!');
        }
    });
}

// Sāk spēli automātiski, kad lapa ielādējas
window.onload = () => {
    ball.addEventListener('click', moveBall);
    restartGame();
};
