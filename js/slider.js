/* =========================================================
   SLIDER.JS — LP Studio
   Slider de avaliações em JavaScript puro.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderReviews();
  setupSliderControls();
});

function renderReviews() {
  const track = document.querySelector("[data-reviews-track]");
  const dots = document.querySelector("[data-reviews-dots]");
  if (!track) return;

  track.innerHTML = CONFIG.avaliacoes
    .map(
      r => `
    <div class="review-card reveal" style="min-width:100%;">
      <div class="stars">${"★".repeat(r.estrelas)}${"☆".repeat(5 - r.estrelas)}</div>
      <p>"${r.texto}"</p>
      <div class="author">— ${r.autora}</div>
    </div>`
    )
    .join("");

  if (dots) {
    dots.innerHTML = CONFIG.avaliacoes
      .map((_, i) => `<span class="dot${i === 0 ? " is-active" : ""}" data-index="${i}"></span>`)
      .join("");
  }
}

function setupSliderControls() {
  const track = document.querySelector("[data-reviews-track]");
  const dots = document.querySelectorAll("[data-reviews-dots] .dot");
  if (!track || dots.length === 0) return;

  let current = 0;
  const total = dots.length;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
  }

  dots.forEach(dot => dot.addEventListener("click", () => goTo(Number(dot.dataset.index))));

  track.style.display = "flex";
  track.style.transition = "transform .5s ease";

  // Autoplay leve — pausa se o usuário preferir menos movimento
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    setInterval(() => goTo(current + 1), 6000);
  }
}
