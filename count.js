window.onload = function () {
  // Counter waktu hubungan
  function updateCounter() {
    const start = new Date("2022-02-12T01:00:00+07:00");
    const now = new Date();
    const diff = now - start;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const countup = document.getElementById("countup");
    if (countup) {
      countup.innerHTML =
        `<span>${days}</span> hari <span>${hours}</span> jam <span>${minutes}</span> menit <span>${seconds}</span> detik`;
    }
  }
  const ring = document.getElementById("ring");

    if (ring) {
        ring.addEventListener("click", function () {
        window.location.href = "ring.html";
    });
    }

  setInterval(updateCounter, 1000);
  updateCounter();

  // Carousel fade logic
  const images = document.querySelectorAll('.carousel-track img');
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.remove('active');
      if (i === index) {
        img.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex); // Tampilkan pertama kali
  setInterval(nextSlide, 5000); // Auto fade tiap 5 detik
};

