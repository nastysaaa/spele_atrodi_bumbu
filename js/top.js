// top.js

document.addEventListener("DOMContentLoaded", () => {
    const cups = document.querySelectorAll(".cup");
    const status = document.getElementById("status");
  
    let ballPosition = Math.floor(Math.random() * 3);
  
    cups.forEach((cup, index) => {
      cup.addEventListener("click", () => {
        if (index === ballPosition) {
          cup.classList.add("ball");
          status.textContent = "Apsveicam! Tu atradi bumbu! 🎉";
        } else {
          status.textContent = "Diemžēl nav pareizi. Mēģini vēlreiz!";
        }
  
        // Deaktivē pārējos kausus
        cups.forEach(c => c.style.pointerEvents = "none");
      });
    });
  
    // Ja vēlies restartēt spēli:
    const restartBtn = document.getElementById("restart");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        ballPosition = Math.floor(Math.random() * 3);
        cups.forEach(cup => {
          cup.classList.remove("ball");
          cup.style.pointerEvents = "auto";
        });
        status.textContent = "Kur ir bumba?";
      });
    }
  });
  