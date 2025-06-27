
<script>
  function updateCounter() {
    const start = new Date("2022-02-12T01:00:00+07:00");
    const now = new Date();
    const diff = now - start;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countup").innerHTML =
      `<span>${days}</span> hari <span>${hours}</span> jam <span>${minutes}</span> menit <span>${seconds}</span> detik`;
  }

  setInterval(updateCounter, 1000);
  updateCounter();
</script>
