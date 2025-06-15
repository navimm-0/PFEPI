document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const startBtn = document.getElementById("start-btn");
  const closeModal = document.getElementById("close-modal");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      modal.classList.add("show");
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      modal.classList.remove("show");
    }
  });
});
