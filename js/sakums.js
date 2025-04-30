// Parāda sveiciena tekstu ar animāciju
window.onload = () => {
    const greeting = document.getElementById('welcome-text');
    if (greeting) {
      greeting.classList.add('fade-in');
    }
  };
  
  // Navigācijas pogas funkcionalitāte
  document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-game');
    const topBtn = document.getElementById('top-scores');
  
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        window.location.href = '/game';
      });
    }
  
    if (topBtn) {
      topBtn.addEventListener('click', () => {
        window.location.href = '/top';
      });
    }
  });
  