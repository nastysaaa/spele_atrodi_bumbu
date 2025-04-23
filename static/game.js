let score = 0;
let timeLeft = 30; // Laika limits spēlē (30 sekundes)
let timer;
let ballSize = 50; // Bumbas sākuma izmērs

// Funkcija, kas pārvieto bumbu uz jaunu nejaušu vietu
function moveBall() {
    const ball = document.getElementById('ball');
    const container = document.getElementById('game-container');

    // Jauni nejauši koordināti bumbai
    const newX = Math.floor(Math.random() * (container.clientWidth - ballSize));
    const newY = Math.floor(Math.random() * (container.clientHeight - ballSize));

    // Pārvietojam bumbu uz jauniem koordinateim
    ball.style.left = newX + 'px';
    ball.style.top = newY + 'px';
    
    // Palielinām punktus
    score++;
    document.getElementById('score').textContent = score;

    // Grūtības palielināšana (bumbas izmērs samazinās, kad grūtības līmenis aug)
    if (score % 10 === 0) {
        ballSize = Math.max(30, ballSize - 5);  // Bumbas izmērs samazinās ar katriem 10 punktiem
        ball.style.width = ballSize + 'px';
        ball.style.height = ballSize + 'px';
    }
}

// Funkcija, kas atjauno spēli
function restartGame() {
    score = 0;
    timeLeft = 30;
    ballSize = 50;
    document.getElementById('score').textContent = score;
    document.getElementById('time').textContent = timeLeft;
    document.getElementById('ball').style.width = ballSize + 'px';
    document.getElementById('ball').style.height = ballSize + 'px';
    
    // Pārtraucam esošo taimeri un sākam jaunu
    clearInterval(timer);
    timer = setInterval(updateTime, 1000);
}

// Funkcija, kas atjauno laika skaitīšanu
function updateTime() {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;
    
    if (timeLeft === 0) {
        clearInterval(timer);
        alert("Spēle beigusies! Tavi punkti: " + score);
    }
}

// Uzsāk spēli ar taimeri
timer = setInterval(updateTime, 1000);
