document.getElementById('rsvp').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita che il modulo venga inviato senza JavaScript

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;

    alert(`Grazie per aver confermato!\nNome: ${name}\nEmail: ${email}\nPartecipazione: ${attendance}`);
});
