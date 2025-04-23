// Funkcija, kas sāk spēli
function startGame() {
    window.location.href = '/game';  // Pāriet uz spēles lapu
}

// Funkcija, kas parāda spēles informāciju
function showInfo() {
    alert('Spēles mērķis ir atrast bumbu, kas pārvietojas pa laukumu. Spēlētājam ir 30 sekundes, lai iegūtu pēc iespējas vairāk punktus.');
}

// Funkcija, kas parāda spēles rezultātus
function showResults() {
    window.location.href = '/top';  // Pāriet uz rezultātu lapu
}
