/* =========================================================
   WHATSAPP.JS — LP Studio
   Botão flutuante de WhatsApp. Número e mensagem vêm de config.js.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const floatBtn = document.getElementById("whats-float");
  if (!floatBtn) return;

  const texto = encodeURIComponent(CONFIG.contato.whatsappMensagemPadrao);
  floatBtn.href = `https://wa.me/${CONFIG.contato.whatsapp}?text=${texto}`;
  floatBtn.setAttribute("aria-label", `Falar com ${CONFIG.empresa.nome} no WhatsApp`);
});
