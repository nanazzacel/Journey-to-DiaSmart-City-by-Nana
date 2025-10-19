// Navigation
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("data-section");
    sections.forEach((sec) => sec.classList.remove("active"));
    document.getElementById(target).classList.add("active", "teleport-effect");
    setTimeout(
      () => document.getElementById(target).classList.remove("teleport-effect"),
      500
    );
  });
});

// Ambient Music Control
const music = document.getElementById("ambient-music");
const musicToggle = document.getElementById("music-toggle");
music.volume = 0.3;
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicToggle.textContent = "🎵 Play Music";
  } else {
    music.play().catch((error) => {
      console.log("Autoplay diblokir:", error);
      alert("Klik tombol untuk memutar musik.");
    });
    musicToggle.textContent = "⏸️ Pause Music";
  }
  isPlaying = !isPlaying;
});

document.addEventListener("DOMContentLoaded", function () {
  // Jawaban benar
  const correctAnswers = {
    q1: "B",
    q2: "false",
    q3: "B",
    q4: "B",
    q5: "true",
    q6: "B",
    q7: "true",
    q8: "C",
    q9: "false",
    q10: "C",
  };

  // Tombol cek jawaban
  document
    .getElementById("check-smart-answers")
    .addEventListener("click", function () {
      let score = 0;

      // Cek semua jawaban
      for (let key in correctAnswers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === correctAnswers[key]) {
          score++;
        } else if (key === "q2" || key === "q9") {
          // Tampilkan penjelasan untuk true/false yang salah
          document.getElementById(`exp-${key}`).style.display = "block";
        }
      }

      // Tampilkan hasil dan reward
      const resultsDiv = document.getElementById("smart-results");
      resultsDiv.innerHTML = `Skor Anda: ${score}/10. `;
      if (score >= 8) {
        resultsDiv.innerHTML += "🎉 Selamat! Anda mendapatkan badge edukasi!";
      } else {
        resultsDiv.innerHTML += "Coba lagi untuk reward!";
      }
    });
});
