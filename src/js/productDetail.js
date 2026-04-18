/**
 * Galería miniaturas, tallas y acordeones — página detalle producto
 */
const mainImg = document.querySelector(".productDetail-mainImage");
const thumbs = document.querySelectorAll(".productDetail-thumb[data-full-src]");
const sizeBtns = document.querySelectorAll(".productDetail-sizeBtn");
const accordions = document.querySelectorAll(".accordion-detail");

thumbs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-full-src");
    if (mainImg && src) {
      mainImg.src = src;
      mainImg.alt = btn.getAttribute("data-alt") || mainImg.alt;
    }
    thumbs.forEach((t) => t.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});

sizeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sizeBtns.forEach((b) => b.classList.remove("is-selected"));
    btn.classList.add("is-selected");
  });
});

accordions.forEach((block) => {
  const trigger = block.querySelector(".accordion-detail-trigger");
  const panel = block.querySelector(".accordion-detail-panel");
  if (!trigger || !panel) return;

  trigger.addEventListener("click", () => {
    const expanded = trigger.getAttribute("aria-expanded") === "true";
    if (expanded) {
      trigger.setAttribute("aria-expanded", "false");
      panel.setAttribute("data-open", "false");
      return;
    }
    accordions.forEach((b) => {
      const t = b.querySelector(".accordion-detail-trigger");
      const p = b.querySelector(".accordion-detail-panel");
      if (t && p) {
        t.setAttribute("aria-expanded", "false");
        p.setAttribute("data-open", "false");
      }
    });
    trigger.setAttribute("aria-expanded", "true");
    panel.setAttribute("data-open", "true");
  });
});
