document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById("play-btn");
    let isPlaying = false;
    let audio = new Audio("Self-Love.mp3"); // Add your music file path
    audio.loop=true;

    playBtn.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            playBtn.innerHTML = "🎵 ▶️Play Music";
        } else {
            audio.play();
            playBtn.innerHTML = "🎵 ⏸ Pause Music";
        }
        isPlaying = !isPlaying;
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll('.fade-in');

  function checkVisibility() {
      fadeElements.forEach((el) => {
          let position = el.getBoundingClientRect().top;
          let screenHeight = window.innerHeight;

          if (position < screenHeight - 100) {
              el.classList.add("active");
          }
      });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Run once to check elements already in view
});
