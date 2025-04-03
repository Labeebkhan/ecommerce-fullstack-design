function updateTimer() {
    const endTime = new Date().getTime() + 4 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000 + 34 * 60 * 1000 + 56 * 1000;
    
    function tick() {
        const now = new Date().getTime();
        const difference = endTime - now;
        if (difference < 0) return;
        document.getElementById("days").innerText = Math.floor(difference / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((difference / (1000 * 60 * 60)) % 24);
        document.getElementById("minutes").innerText = Math.floor((difference / (1000 * 60)) % 60);
        document.getElementById("seconds").innerText = Math.floor((difference / 1000) % 60);
    }
    setInterval(tick, 1000);
}
updateTimer();