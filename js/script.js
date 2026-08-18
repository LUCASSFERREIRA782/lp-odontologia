/* =========================================================
   SCRIPT.JS — LP Studio
   Lê o objeto CONFIG (config.js) e preenche o HTML.
   Nenhum outro arquivo deve conter texto de conteúdo do cliente.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderBrand();
  renderHero();
  renderSobre();
  renderServicos();
  renderDiferenciais();
  renderKids();
  renderCta();
  renderHorarios();
  renderMapa();
  renderContato();
  renderFooter();
  renderSeo();
  hideLoader();
});

/* ---------- Marca (navbar + logo) ---------- */
function renderBrand() {
  document.querySelectorAll("[data-brand]").forEach(el => (el.textContent = CONFIG.empresa.nome));
  const boksyBtns = document.querySelectorAll("[data-boksy-link]");
  boksyBtns.forEach(el => {
    el.href = CONFIG.boksy.url;
    el.textContent = CONFIG.boksy.label;
  });
}

/* ---------- Hero ---------- */
function renderHero() {
  const h = CONFIG.hero;
  setText("[data-hero-eyebrow]", h.eyebrow);
  setText("[data-hero-titulo-prefixo]", h.tituloPrefixo);
  setText("[data-hero-titulo-destaque]", h.tituloDestaque);
  setText("[data-hero-subtitulo]", h.subtitulo);

  const statsEl = document.querySelector("[data-hero-stats]");
  if (statsEl) {
    statsEl.innerHTML = h.stats
      .map(s => `<div class="stat reveal"><b>${s.numero}</b><span>${s.label}</span></div>`)
      .join("");
  }
}

/* ---------- Sobre ---------- */
function renderSobre() {
  const s = CONFIG.sobre;
  setText("[data-sobre-eyebrow]", s.eyebrow);
  setText("[data-sobre-titulo]", s.titulo);
  setText("[data-sobre-texto]", s.texto);
}

/* ---------- Serviços ---------- */
function renderServicos() {
  const grid = document.querySelector("[data-servicos-grid]");
  if (!grid) return;
  grid.innerHTML = CONFIG.servicos
    .map(
      s => `
    <article class="smile-card service-card reveal">
      <div class="icon">${s.icone}</div>
      <h3>${s.nome}</h3>
      <p>${s.descricao}</p>
      <div class="price-row">
        <span class="price">${s.preco}</span>
        <a class="book-link" href="${whatsappLink("Quero agendar: " + s.nome)}" target="_blank" rel="noopener">Agendar →</a>
      </div>
    </article>`
    )
    .join("");
}

/* ---------- Diferenciais ---------- */
function renderDiferenciais() {
  const wrap = document.querySelector("[data-diferenciais]");
  if (!wrap) return;
  wrap.innerHTML = CONFIG.diferenciais
    .map(
      (d, i) => `
    <div class="diferencial reveal">
      <span class="num">${String(i + 1).padStart(2, "0")}</span>
      <h3>${d.titulo}</h3>
      <p>${d.texto}</p>
    </div>`
    )
    .join("");
}

/* ---------- Odontopediatria (especial kids) ---------- */
function renderKids() {
  const k = CONFIG.odontopediatria;
  if (!k) return;
  setText("[data-kids-eyebrow]", k.eyebrow);
  setText("[data-kids-titulo]", k.titulo);
  setText("[data-kids-texto]", k.texto);
  const badgesEl = document.querySelector("[data-kids-badges]");
  if (badgesEl) {
    badgesEl.innerHTML = k.badges.map(b => `<span class="kid-badge">${b}</span>`).join("");
  }
}

/* ---------- CTA ---------- */
function renderCta() {
  setText("[data-cta-titulo]", CONFIG.cta.titulo);
  setText("[data-cta-texto]", CONFIG.cta.texto);
  const btn = document.querySelector("[data-cta-whats]");
  if (btn) btn.href = whatsappLink();
}

/* ---------- Horários ---------- */
function renderHorarios() {
  const list = document.querySelector("[data-horarios-list]");
  if (!list) return;
  list.innerHTML = CONFIG.horarios
    .map(h => `<li><span>${h.dia}</span><span>${h.horario}</span></li>`)
    .join("");
}

/* ---------- Mapa ---------- */
function renderMapa() {
  setText("[data-endereco]", CONFIG.contato.endereco);
  const link = document.querySelector("[data-maps-link]");
  if (link) link.href = CONFIG.contato.googleMapsLink;
}

/* ---------- Contato ---------- */
function renderContato() {
  setText("[data-contato-telefone]", CONFIG.contato.telefone);
  setText("[data-contato-email]", CONFIG.contato.email);
  setText("[data-contato-endereco]", CONFIG.contato.endereco);
}

/* ---------- Footer ---------- */
function renderFooter() {
  const insta = document.querySelector("[data-social-instagram]");
  const face = document.querySelector("[data-social-facebook]");
  const whats = document.querySelector("[data-social-whatsapp]");
  if (insta) insta.href = CONFIG.redes.instagram;
  if (face) face.href = CONFIG.redes.facebook;
  if (whats) whats.href = whatsappLink();
  setText("[data-footer-ano]", new Date().getFullYear());
}

/* ---------- SEO básico (title/meta) ---------- */
function renderSeo() {
  document.title = CONFIG.seo.titulo;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", CONFIG.seo.descricao);
}

/* ---------- Loader ---------- */
function hideLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("is-hidden"), 350);
  });
}

/* ---------- Helpers ---------- */
function setText(selector, value) {
  document.querySelectorAll(selector).forEach(el => (el.textContent = value));
}

function whatsappLink(mensagem) {
  const texto = encodeURIComponent(mensagem || CONFIG.contato.whatsappMensagemPadrao);
  return `https://wa.me/${CONFIG.contato.whatsapp}?text=${texto}`;
}
