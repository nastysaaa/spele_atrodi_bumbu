let gameStarted = false;
let ball = document.getElementById('ball');
let message = document.getElementById('message');

function startGame() {
  if (gameStarted) {
    return; // Ja spēle jau ir sākusies, neko nedarām
  }

  gameStarted = true;
  message.textContent = "Atrodi bumbu!";
  ball.style.display = 'block'; // Parādīt bumbu

  // Iespējamās bumbas pozīcijas (nejauši)
  showBall();

  // Bumbas klikšķa funkcija
  ball.addEventListener('click', function() {
    alert('Tu atradi bumbu!');
    ball.style.display = 'none'; // Paslēpt bumbu pēc atradšanas
    gameStarted = false; // Beigt spēli
    message.textContent = "Spēle beigusies. Noklikšķiniet uz pogas, lai sāktu no jauna.";
  });
}

function showBall() {
  // Nosaka maksimālos koordinātu limitus, lai bumba nepārsniegtu ekrāna robežas
  const container = document.getElementById('game-container');
  const maxX = container.clientWidth - 60; // 60px ir bumbas platums
  const maxY = container.clientHeight - 60; // 60px ir bumbas augstums

  // Nejauši ģenerē pozīciju bumbai
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  // Iestatām bumbas pozīciju
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
}
