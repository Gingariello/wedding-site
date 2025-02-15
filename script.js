// Imposta la data del matrimonio
const weddingDate = new Date("2025-06-01T00:00:00").getTime();

// Funzione per aggiornare il countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = weddingDate - now;

    if (timeRemaining <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>È il grande giorno!</h2>";
        clearInterval(countdownInterval); // Ferma il countdown
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = `${days} <span>Giorni</span>`;
        document.getElementById("hours").innerHTML = `${hours} <span>Ore</span>`;
        document.getElementById("minutes").innerHTML = `${minutes} <span>Minuti</span>`;
        document.getElementById("seconds").innerHTML = `${seconds} <span>Secondi</span>`;
    }
}

// Aggiorna il countdown ogni secondo
const countdownInterval = setInterval(updateCountdown, 1000);

// Inizializza il countdown al caricamento della pagina
updateCountdown();