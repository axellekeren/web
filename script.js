function createRainDrop() {
    const rainDrop = document.createElement('div');
    rainDrop.className = 'rain-drop';

    // Set posisi acak untuk tetesan hujan
    rainDrop.style.left = Math.random() * 100 + 'vw';
    rainDrop.style.animationDuration = Math.random() * 2 + 2 + 's'; // Durasi antara 2 - 4 detik
    rainDrop.style.opacity = Math.random(); // Opaque berbeda-beda

    document.querySelector('.rain').appendChild(rainDrop);

    // Hapus tetesan setelah animasi selesai
    setTimeout(() => {
        rainDrop.remove();
    }, 5000);
}

// Membuat tetesan hujan secara acak
setInterval(createRainDrop, 100);

function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'fireworks';
    document.body.appendChild(firework);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;

    const sound = document.getElementById('firework-sound');
    sound.currentTime = 0;
    sound.play();

    setTimeout(() => {
        firework.remove();
    }, 1000);
}

setInterval(createFirework, 500);
