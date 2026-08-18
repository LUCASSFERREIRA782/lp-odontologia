/* =========================================================
   GALLERY.JS — LP Studio
   Renderiza a grade de galeria a partir de CONFIG.galeria
   e controla um lightbox simples, sem bibliotecas externas.
   Como este projeto usa placeholders de cor no lugar de fotos,
   basta trocar o background por uma <img> real quando o cliente
   enviar as fotos definitivas.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  setupLightbox();
});

const GALLERY_GRADIENTS = [
  "linear-gradient(135deg,#0B7A75,#35CDBE)",
  "linear-gradient(135deg,#35CDBE,#FFC845)",
  "linear-gradient(135deg,#FFC845,#FF8163)",
  "linear-gradient(135deg,#FF8163,#0B7A75)",
];

function renderGallery() {
  const grid = document.querySelector("[data-gallery-grid]");
  if (!grid) return;

  grid.innerHTML = CONFIG.galeria
    .map((item, i) => {
      const gradient = GALLERY_GRADIENTS[i % GALLERY_GRADIENTS.length];
      const tallClass = item.tall ? " tall" : "";
      return `
      <button type="button" class="gallery-item${tallClass} reveal" style="background:${gradient}" data-legenda="${item.legenda}" aria-label="Ver ${item.legenda}">
        ${item.legenda}
      </button>`;
    })
    .join("");
}

function setupLightbox() {
  const overlay = document.createElement("div");
  overlay.id = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.style.cssText = `
    position:fixed; inset:0; z-index:200; display:none;
    align-items:center; justify-content:center;
    background:rgba(21,8,34,0.92); backdrop-filter:blur(6px);
  `;
  overlay.innerHTML = `
    <div id="lightbox-panel" style="width:min(90vw,520px);aspect-ratio:4/5;border-radius:24px;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:1.3rem;color:#fff;"></div>
    <button type="button" id="lightbox-close" aria-label="Fechar" style="position:absolute;top:24px;right:24px;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.1);color:#fff;border:1px solid rgba(255,255,255,.2);font-size:1.2rem;">✕</button>
  `;
  document.body.appendChild(overlay);

  const panel = overlay.querySelector("#lightbox-panel");
  const closeBtn = overlay.querySelector("#lightbox-close");

  document.addEventListener("click", e => {
    const item = e.target.closest(".gallery-item");
    if (!item) return;
    panel.style.background = item.style.background;
    panel.textContent = item.dataset.legenda;
    overlay.style.display = "flex";
  });

  const close = () => (overlay.style.display = "none");
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}
