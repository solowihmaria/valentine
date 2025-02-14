window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");

  audio.play().catch(() => {
    console.log("Автовоспроизведение заблокировано. Запуск по клику.");
  });

  document.addEventListener(
    "click",
    () => {
      if (audio.paused) {
        audio.play();
      }
    },
    { once: true }
  );
});
