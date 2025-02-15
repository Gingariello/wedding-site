// Countdown
const countdownDate = new Date("Sep 18, 2025 16:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML =
        days + " giorni " + hours + " ore " + minutes + " minuti " + seconds + " secondi ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "Il grande giorno è arrivato!";
    }
}, 1000);

// Mappa
function initMap() {
    var location = {lat: 41.9028, lng: 12.4964};  // Cambia con le coordinate del luogo
    var map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Gestione del modulo RSVP
document.getElementById('rsvp').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("La tua conferma è stata inviata! Grazie!");
});

// Gestione del modulo Contatto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Il tuo messaggio è stato inviato!");
});
