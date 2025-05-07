// Mainīgais, lai uzraudzītu spēles stāvokli
let gameStarted = false;
let ball = document.getElementById('ball');
let message = document.getElementById('message');

// Funkcija, lai sāktu spēli
function startGame() {
  if (gameStarted) {
    return; // Ja spēle jau ir sākusies, neko nedarām
  }

  gameStarted = true;
  message.textContent = "Atrodi bumbu!"; // Spēles paziņojums
  ball.style.display = 'block'; // Parādīt bumbu

  // Nejauši parādīt bumbu uz ekrāna
  showBall();

  // Uzlikt klikšķa notikumu uz bumbu
  ball.addEventListener('click', function() {
    alert('Tu atradi bumbu!');
    ball.style.display = 'none'; // Paslēpt bumbu pēc atradīšanas
    gameStarted = false; // Beigt spēli
    message.textContent = "Spēle beigusies. Noklikšķiniet uz pogas, lai sāktu no jauna.";
  });
}

// Funkcija, lai nejauši parādītu bumbu uz ekrāna
function showBall() {
  // Iegūst ekrāna platumu un augstumu
  const container = document.getElementById('game-container');
  const maxX = container.clientWidth - 60; // Bumbas platums
  const maxY = container.clientHeight - 60; // Bumbas augstums

  // Nejauši ģenerē pozīcijas koordinātas bumbai
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  // Iestatām bumbas pozīciju
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
}
